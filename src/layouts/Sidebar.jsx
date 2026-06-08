import Logo from "./Logo";
import { NavLink } from "react-router";
import { NAV_MENU } from "../const/navigation";

export default function Sidebar() {
	return (
		<div className="w-full p-5 bg-white border-r border-gray-200">
			<Logo />
			<ul className="mt-10 grid gap-8">
				{NAV_MENU.map((link) => (
					<li key={link.url}>
						<NavLink
							to={link.url}
							className={({ isActive }) =>
								`grid grid-cols-[25px_1fr] gap-5 items-center transition-colors font-semibold
				${isActive ? "text-main" : "text-cstm-gray-100 hover:text-main"}`
							}
						>
							<svg className="icon" width={25} height={25}>
								<use href={`#${link.icon}`} />
							</svg>

							{link.title}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
}
