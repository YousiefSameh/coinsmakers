import { Outlet } from "react-router-dom";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";

const MainTemplate = () => {
	return (
		<div className="wrapper relative flex items-center justify-between">
			<Sidebar />
			<main>
				<Header />
				<div className="content">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default MainTemplate;
