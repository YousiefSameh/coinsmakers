import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Templates
import MainTemplate from "@templates/MainTemplate";
import Home from "@pages/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainTemplate />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
]);

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter;