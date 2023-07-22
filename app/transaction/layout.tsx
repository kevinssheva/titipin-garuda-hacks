import Dashboard from "./components/Dashboard";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Dashboard />
      {children}
    </div>
  );
};

export default Layout;
