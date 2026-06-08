import { Button } from "@/components/ui/button";
import {
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from "@/components/ui/drawer";
import Logo from "./Logo";
import { NavLink } from "react-router";
import { NAV_MENU } from "../const/navigation";

function TheDrawer() {
	return (
		<DrawerContent className="rounded-none! w-62.5!">
			<DrawerHeader>
				<div className="flex items-center justify-between">
					<DrawerClose asChild>
						<Logo />
					</DrawerClose>

					<DrawerTitle className="sr-only">Menu</DrawerTitle>
				</div>
			</DrawerHeader>
			<div className="no-scrollbar overflow-y-auto">
				<div className="w-full p-5">
					<ul className="grid gap-8">
						{NAV_MENU.map((link) => (
							<li key={link.url}>
								<DrawerClose
									asChild
									className={({ isActive }) =>
										`grid grid-cols-[25px_1fr] gap-5 items-center transition-colors font-semibold
					${isActive ? "text-main" : "text-cstm-gray-100 hover:text-main"}`
									}
								>
									<NavLink to={link.url}>
										<svg
											className="icon"
											width={25}
											height={25}
										>
											<use href={`#${link.icon}`} />
										</svg>

										{link.title}
									</NavLink>
								</DrawerClose>
							</li>
						))}
					</ul>
				</div>
			</div>
		</DrawerContent>
	);
}

export default TheDrawer;
