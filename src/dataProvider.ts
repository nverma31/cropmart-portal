
import { DataProvider } from "@refinedev/core";

const API_URL = import.meta.env.VITE_API_URL;
const TOKEN_KEY = "cropmart-auth";

const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
    const token = localStorage.getItem(TOKEN_KEY);
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
        ...(options.headers as Record<string, string>),
    };

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${url}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: "Unknown error" }));
        console.error("API Error:", error);
        throw {
            message: error.errorMessage || error.message || response.statusText,
            statusCode: response.status,
            status: response.status,
        };
    }


    return response.json();
};


export const dataProvider: DataProvider = {
    getList: async ({ resource, pagination, sorters, filters }) => {
        const params = new URLSearchParams();

        // Pagination
        if (pagination) {
            const { current, pageSize } = pagination as any;
            params.append("page", (current || 1).toString());
            params.append("limit", (pageSize || 10).toString());
        }

        // Sorting
        if (sorters && sorters.length > 0) {
            params.append("sort", sorters[0].field);
            params.append("order", sorters[0].order);
        }

        // Filtering (Simple search implementation as per requirements)
        if (filters && filters.length > 0) {
            // Assuming generic search behavior for now, mapping _q to search if explicitly passed or checking specific filters
            const searchFilter = filters.find((f) => {
                if ("field" in f) {
                    return f.operator === "contains" || f.field === "search" || f.field === "q";
                }
                return false;
            });
            if (searchFilter && "value" in searchFilter) {
                params.append("search", searchFilter.value as string);
            }
        }

        const url = `/${resource}?${params.toString()}`;
        const { data } = await fetchWithAuth(url);

        return {
            data: data.items,
            total: data.total,
        };
    },

    getOne: async ({ resource, id }) => {
        const { data } = await fetchWithAuth(`/${resource}/${id}`);
        return { data };
    },

    create: async ({ resource, variables }) => {
        const { data } = await fetchWithAuth(`/${resource}`, {
            method: "POST",
            body: JSON.stringify(variables),
        });
        return { data };
    },

    update: async ({ resource, id, variables }) => {
        const { data } = await fetchWithAuth(`/${resource}/${id}`, {
            method: "PATCH",
            body: JSON.stringify(variables),
        });
        return { data };
    },

    deleteOne: async ({ resource, id }) => {
        await fetchWithAuth(`/${resource}/${id}`, {
            method: "DELETE",
        });
        return { data: { id } } as any;
    },

    getApiUrl: () => API_URL,

    custom: async ({ url, method, payload, headers }) => {
        const response = await fetchWithAuth(url, {
            method,
            body: payload ? JSON.stringify(payload) : undefined,
            headers: headers as HeadersInit
        });
        return { data: response };
    }
};

