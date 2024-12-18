import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

function Page() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <Outlet />
    </div>
  );
}

export default Page;
