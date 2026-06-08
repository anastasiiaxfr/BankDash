import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TheDrawer from "./TheDrawer";
import SVG from "./SVG";

import { Drawer } from "@/components/ui/drawer";
import { Outlet, useLocation } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../siteConfig";

export default function AppLayout() {
  const location = useLocation();

  const titles = {
    "/": "Dashboard",
    "/accounts": "Accounts",
    "/credit-cards": "Credit Cards",
    "/investments": "Investments",
    "/loans": "Loans",
    "/my-privileges": "My Privileges",
    "/services": "Services",
    "/transactions": "Transactions",
    "/settings": "Settings",
  };

  const title = titles[location.pathname] || "Dashboard";

  return (
    <>
      <Helmet>
        {/* SEO Description */}
        <meta name="description" content={siteConfig.description} />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content={`${siteConfig.name} | ${title}`} />
        <meta property="og:description" content={siteConfig.description} />
        <meta
          property="og:image"
          content={`${siteConfig.url}${siteConfig.ogImage}`}
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Drawer direction="left">
        <div className="grid min-h-screen grid-cols-1 md:grid-cols-[250px_1fr] bg-bg">
          <aside className="hidden md:flex">
            <Sidebar />
          </aside>

          <div className="flex flex-col w-full overflow-x-hidden">
            <Header title={title} />

            <div className="flex-1 flex flex-col">
              <Outlet />
            </div>

            <Footer />
            <SVG />
          </div>
        </div>
        <TheDrawer />
      </Drawer>
    </>
  );
}
