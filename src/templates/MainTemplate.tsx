import { Outlet } from "react-router-dom";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";

const MainTemplate = () => {
	return (
		<div className="wrapper min-h-screen">
			<Sidebar />
			<main className="ml-0 md:ml-[240px] w-screen md:w-[calc(100vw-240px)]">
				<Header />
				<div className="content pt-[90px] md:pt-[120px] p-6 w-full">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default MainTemplate;
