import Loading from "@components/feedback/Loading";
import PageSuspenseFallback from "@components/feedback/PageSuspenseFallback";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Templates
const MainTemplate = lazy(() => import("@templates/MainTemplate"));

// Pages
const Earn = lazy(() => import("@pages/Earn"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <Suspense fallback={<Loading />}><MainTemplate /></Suspense>,
		children: [
			{
				index: true,
				element: <PageSuspenseFallback><Earn /></PageSuspenseFallback>,
			},
		],
	},
]);

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter;