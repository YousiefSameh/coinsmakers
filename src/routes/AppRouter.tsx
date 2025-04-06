import Loading from "@components/feedback/Loading";
import PageSuspenseFallback from "@components/feedback/PageSuspenseFallback";
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
						<Earn />
					</PageSuspenseFallback>
				),
			},
			{
				path: "cashout",
				element: (
					<PageSuspenseFallback>
						<Cashout />
					</PageSuspenseFallback>
				),
			},
			{
				path: "cashout/confirm",
				element: (
					<PageSuspenseFallback>
						<Checkout />
					</PageSuspenseFallback>
				),
			},
			{
				path: "cashout/history",
				element: (
					<PageSuspenseFallback>
						<CashoutHistory />
					</PageSuspenseFallback>
				),
			},
			{
				path: "register",
				element: (
					<PageSuspenseFallback>
						<Register />
					</PageSuspenseFallback>
				),
			},
			{
				path: "login",
				element: (
					<PageSuspenseFallback>
						<Login />
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
