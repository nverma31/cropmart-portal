import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  RefineSnackbarProvider,
  ThemedLayout,
  useNotificationProvider,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerProvider, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";

import { UserList } from "./pages/users/list";
import { UserEdit } from "./pages/users/edit";
import { FarmerList } from "./pages/farmers/list";
import { FarmerCreate } from "./pages/farmers/create";
import { FarmerEdit } from "./pages/farmers/edit";
import { IntermediaryList } from "./pages/intermediaries/list";
import { IntermediaryCreate } from "./pages/intermediaries/create";
import { IntermediaryEdit } from "./pages/intermediaries/edit";
import { EnquiryList } from "./pages/enquiries/list";
import { EnquiryCreate } from "./pages/enquiries/create";
import { EnquiryShow } from "./pages/enquiries/show";
import { EnquiryEdit } from "./pages/enquiries/edit";

import { ForgotPassword } from "./pages/forgotPassword";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider}
                notificationProvider={useNotificationProvider}
                routerProvider={routerProvider}
                authProvider={authProvider}
                resources={[
                  {
                    name: "users",
                    list: "/users",
                    edit: "/users/edit/:id",
                    show: "/users/show/:id",
                    meta: { canDelete: true },
                  },
                  {
                    name: "farmers",
                    list: "/farmers",
                    create: "/farmers/create",
                    edit: "/farmers/edit/:id",
                    show: "/farmers/show/:id",
                  },
                  {
                    name: "intermediaries",
                    list: "/intermediaries",
                    create: "/intermediaries/create",
                    edit: "/intermediaries/edit/:id",
                    show: "/intermediaries/show/:id",
                  },
                  {
                    name: "enquiries",
                    list: "/enquiries",
                    create: "/enquiries/create",
                    edit: "/enquiries/edit/:id",
                    show: "/enquiries/show/:id",
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  projectId: "mdQilY-gmQhqM-6Sg84I",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-inner"
                        fallback={<CatchAllNavigate to="/login" />}
                      >
                        <ThemedLayout Header={Header}>
                          <Outlet />
                        </ThemedLayout>
                      </Authenticated>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource="users" />}
                    />

                    <Route path="/users">
                      <Route index element={<UserList />} />
                      <Route path="edit/:id" element={<UserEdit />} />
                    </Route>

                    <Route path="/farmers">
                      <Route index element={<FarmerList />} />
                      <Route path="create" element={<FarmerCreate />} />
                      <Route path="edit/:id" element={<FarmerEdit />} />
                    </Route>

                    <Route path="/intermediaries">
                      <Route index element={<IntermediaryList />} />
                      <Route path="create" element={<IntermediaryCreate />} />
                      <Route path="edit/:id" element={<IntermediaryEdit />} />
                    </Route>

                    <Route path="/enquiries">
                      <Route index element={<EnquiryList />} />
                      <Route path="create" element={<EnquiryCreate />} />
                      <Route path="edit/:id" element={<EnquiryEdit />} />
                      <Route path="show/:id" element={<EnquiryShow />} />
                    </Route>
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-outer"
                        fallback={<Outlet />}
                      >
                        <NavigateToResource />
                      </Authenticated>
                    }
                  >
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                      path="/forgot-password"
                      element={<ForgotPassword />}
                    />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
