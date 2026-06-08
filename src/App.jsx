import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/AppLayout";
import Dashboard from "./pages/dashboard";
import Accounts from "./pages/accounts";
import CreditCards from "./pages/credit-cards";
import Investments from "./pages/investments";
import Loans from "./pages/loans";
import MyPrivileges from "./pages/my-privileges";
import Services from "./pages/services";
import Settings from "./pages/settings";
import Transactions from "./pages/transactions";
import NotFound from "./pages/404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Dashboard />}
            handle={{ title: "Dashboard" }}
          />
          <Route
            path="accounts"
            element={<Accounts />}
            handle={{ title: "Accounts" }}
          />
          <Route
            path="credit-cards"
            element={<CreditCards />}
            handle={{ title: "Credit cards" }}
          />
          <Route
            path="investments"
            element={<Investments />}
            handle={{ title: "Investments" }}
          />
          <Route path="loans" element={<Loans />} handle={{ title: "Loans" }} />
          <Route
            path="my-privileges"
            element={<NotFound />}
            handle={{ title: "My privileges" }}
          />
          <Route
            path="services"
            element={<Services />}
            handle={{ title: "Services" }}
          />
          <Route
            path="transactions"
            element={<Transactions />}
            handle={{ title: "Transactions" }}
          />
          <Route
            path="settings"
            element={<Settings />}
            handle={{ title: "Settings" }}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
