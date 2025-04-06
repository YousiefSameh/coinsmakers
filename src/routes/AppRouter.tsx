import Loading from "@components/feedback/Loading";
import PageSuspenseFallback from "@components/feedback/PageSuspenseFallback";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Templates
const MainTemplate = lazy(() => import("@templates/MainTemplate"));

// Pages
const Earn = lazy(() => import("@pages/Earn"));
const Cashout = lazy(() => import("@pages/Cashout"));
const Checkout = lazy(() => import("@pages/Checkout"));
const CashoutHistory = lazy(() => import("@pages/CashoutHistory"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <Suspense fallback={<Loading />}><MainTemplate /></Suspense>,
		children: [
			{
				index: true,
				element: <PageSuspenseFallback><Earn /></PageSuspenseFallback>,
			},
			{
				path: "cashout",
				element: <PageSuspenseFallback><Cashout /></PageSuspenseFallback>,
			},
			{
				path: "cashout/confirm",
				element: <PageSuspenseFallback><Checkout /></PageSuspenseFallback>,
			},
			{
				path: "cashout/history",
				element: <PageSuspenseFallback><CashoutHistory /></PageSuspenseFallback>,
			},
		],
	},
]);

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter;