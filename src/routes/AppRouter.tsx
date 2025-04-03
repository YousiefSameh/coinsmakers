import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Templates
import MainTemplate from "@templates/MainTemplate";
import Earn from "@pages/Earn";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainTemplate />,
		children: [
			{
				index: true,
				element: <Earn />,
			},
		],
	},
]);

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter;