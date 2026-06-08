import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TheDrawer from "./TheDrawer";
import SVG from "./SVG";

import { Drawer } from "~/components/ui/drawer";

export default function AppLayout({ children }) {
	return (
		<Drawer direction="left">
			<div className="grid min-h-screen grid-cols-1 md:grid-cols-[250px_1fr] bg-bg">
				<aside className="hidden md:flex">
					<Sidebar />
				</aside>

				<main className="flex flex-col w-full ">
					<Header />

					<div className="flex-1">{children}</div>

					<Footer />
					<SVG />
				</main>
			</div>
			<TheDrawer />
		</Drawer>
	);
}
