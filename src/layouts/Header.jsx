import { Button } from "@/components/ui/button";
import { DrawerTrigger } from "@/components/ui/drawer";
import SearchField from "../components/Form/Fields/SearchField";
import SettingsDropDown from "../components/SettingsDropDown";
import NottificationDropDown from "../components/NottificationDropDown";
import Avatar from "../components/Avatar";
import { Menu } from "lucide-react";

export default function Header({ title }) {
	return (
		<header className="bg-white shadow p-5">
			<div className="flex justify-between items-center gap-3">
				<DrawerTrigger asChild className="md:hidden">
					<Button variant="outline" className="border-none">
						<Menu size={24} />
					</Button>
				</DrawerTrigger>
				<h1>{title}</h1>
				<div className="md:ml-auto flex gap-10 items-center">
					<div className="hidden lg:flex gap-10 items-center">
						<SearchField />
						<SettingsDropDown />
						<NottificationDropDown />
					</div>
					<Avatar />
				</div>
			</div>
		</header>
	);
}
