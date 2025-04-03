import { Outlet } from "react-router-dom";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import Footer from "@components/Footer";

const MainTemplate = () => {
	return (
		<div className="wrapper min-h-screen">
			<Sidebar />
			<main className="ml-0 md:ml-[240px] w-screen md:w-[calc(100%-240px)] overflow-hidden relative">
				<Header />
				<div className="content p-6 md:p-12">
					<Outlet />
				</div>
				<Footer />
			</main>
		</div>
	);
};

export default MainTemplate;
