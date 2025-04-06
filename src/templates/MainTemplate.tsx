import { Outlet } from "react-router-dom";
import Header from "@components/shared/Header";
import Sidebar from "@components/shared/Sidebar";
import Footer from "@components/shared/Footer";
import { ToastContainer } from "react-toastify";

const MainTemplate = () => {
	return (
		<div className="wrapper min-h-screen">
			<Sidebar />
			<main className="ml-0 md:ml-[240px] w-screen md:w-[calc(100%-240px)] overflow-hidden relative">
				<Header />
				<div className="content p-0 sm:p-6 md:p-12">
					<Outlet />
				</div>
				<Footer />
			</main>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
};

export default MainTemplate;
