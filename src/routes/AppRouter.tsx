import Loading from "@components/feedback/Loading";
import PageSuspenseFallback from "@components/feedback/PageSuspenseFallback";
import ProtectedRoute from "@components/feedback/ProtectedRoute";
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
		],
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;
