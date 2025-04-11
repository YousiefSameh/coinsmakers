import Loading from "@components/feedback/Loading";
import PageSuspenseFallback from "@components/feedback/PageSuspenseFallback";
import ProtectedRoute from "@components/feedback/ProtectedRoute";
import ProfileTemplate from "@templates/ProfileTemplate";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Templates
const MainTemplate = lazy(() => import("@templates/MainTemplate"));

// Pages
// const Home = lazy(() => import("@pages/Home"));
const Earn = lazy(() => import("@pages/Earn"));
const Cashout = lazy(() => import("@pages/Cashout"));
const Checkout = lazy(() => import("@pages/Checkout"));
const CashoutHistory = lazy(() => import("@pages/CashoutHistory"));
const Register = lazy(() => import("@pages/Register"));
const Login = lazy(() => import("@pages/Login"));
const Ranking = lazy(() => import("@pages/Ranking"));
const About = lazy(() => import("@pages/Profile/About"));
const Update = lazy(() => import("@pages/Profile/Update"));
const ChangePassword = lazy(() => import("@pages/Profile/ChangePassword"));
const TwoFactor = lazy(() => import("@pages/Profile/TwoFactor"));
const AccountSettings = lazy(() => import("@pages/Profile/AccountSettings"));
const Coupons = lazy(() => import("@pages/Coupons"));
const RewardsHistory = lazy(() => import("@pages/RewardsHistory"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <MainTemplate />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <Earn />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "cashout",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <Cashout />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "cashout/confirm",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "cashout/history",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <CashoutHistory />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "register",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute restrictedForAuthenticated>
              <Register />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "login",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute restrictedForAuthenticated>
              <Login />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "ranking",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <Ranking />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "coupons",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <Coupons />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "rewards-history",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <RewardsHistory />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "profile",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <ProfileTemplate />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
        children: [
          {
            index: true,
            element: (
              <PageSuspenseFallback>
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              </PageSuspenseFallback>
            ),
          },
          {
            path: "update",
            element: (
              <PageSuspenseFallback>
                <ProtectedRoute>
                  <Update />
                </ProtectedRoute>
              </PageSuspenseFallback>
            ),
          },
          {
            path: "password",
            element: (
              <PageSuspenseFallback>
                <ProtectedRoute>
                  <ChangePassword />
                </ProtectedRoute>
              </PageSuspenseFallback>
            ),
          },
          {
            path: "twofactor",
            element: (
              <PageSuspenseFallback>
                <ProtectedRoute>
                  <TwoFactor />
                </ProtectedRoute>
              </PageSuspenseFallback>
            ),
          },
          {
            path: "account",
            element: (
              <PageSuspenseFallback>
                <ProtectedRoute>
                  <AccountSettings />
                </ProtectedRoute>
              </PageSuspenseFallback>
            ),
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
