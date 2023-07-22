import TransactionModal from "../components/Modals/TransactionModal";
import Dashboard from "./components/Dashboard";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TransactionModal />
      <Dashboard />
      {children}
    </div>
  );
};

export default Layout;
