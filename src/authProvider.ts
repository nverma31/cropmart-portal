import type { AuthProvider } from "@refinedev/core";

export const TOKEN_KEY = "cropmart-auth";
const API_URL = import.meta.env.VITE_API_URL;

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {


    try {
      const response = await fetch(`${API_URL}/auth/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        return {
          success: false,
          error: {
            message: "Login failed",
            name: "Invalid credentials",
          },
        };
      }

      const { data } = await response.json();

      // Extract token from "Bearer <JWT>" or just "<JWT>"?
      // "token": "Bearer <JWT>" according to prompt.
      // We should probably just store it as is, or strip Bearer? 
      // "Send token via: Authorization: Bearer <token>"
      // If the response is "Bearer abc", then header should be "Bearer Bearer abc" if I add Bearer in dataProvider?
      // Prompt says: "token": "Bearer <JWT>".
      // Prompt says: "Send token via: Authorization: Bearer <token>".
      // This is ambiguous. If the value IS "Bearer <JWT>", then sending "Bearer <token>" would be "Bearer Bearer <JWT>".
      // Let's assume the prompt means the value INCLUDES the prefix, or the prompt meant the format is `Bearer <token>`.
      // Usage: `Authorization: Bearer <token>` usually implies the *variable* `token` is just the hash.
      // But the response example generic: `"token": "Bearer <JWT>"`.
      // I will assume the stored value should be the raw JWT if possible, but safely I will store exactly what the server returns, 
      // AND in dataProvider I will check if it starts with Bearer.
      // actually, let's just store what's given. 
      // In dataProvider `headers["Authorization"] = 'Bearer ${token}'`. 
      // If token is `Bearer xyz`, header becomes `Bearer Bearer xyz`. This is bad.
      // I will strip `Bearer ` from the response if present, or just store it and handle in dataProvider.
      // Let's strip it to be clean.

      let token = data.token;
      if (token && token.startsWith("Bearer ")) {
        token = token.replace("Bearer ", "");
      }

      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem("user", JSON.stringify(data.user));

      return {
        success: true,
        redirectTo: "/",
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: "Network error",
          name: "NetworkError",
        },
      };
    }
  },
  logout: async () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("user");
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  check: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => null,
  getIdentity: async () => {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
    return null;
  },
  onError: async (error) => {
    if (error.statusCode === 401 || error.statusCode === 403) {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem("user");
      return {
        logout: true,
        redirectTo: "/login",
      };
    }
    return {};
  },
};
