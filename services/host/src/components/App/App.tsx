import { Link, Outlet } from "react-router-dom";
import { adminRoutes } from "@packages/shared/src/Routes/admin";
import { shopRoutes } from "@packages/shared/src/Routes/shop";

export const App = () => {
  return (
    <div data-testid={"App.DataTestId"}>
      <h1>PAGE</h1>
      <Link to={adminRoutes.admin}>ABOUT</Link>
      <br />
      <Link to={shopRoutes.main}>SHOP</Link>
      <Outlet />
    </div>
  );
};
