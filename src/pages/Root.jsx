import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = (props) => {
  return (
    <>
      <span className="top_most_part">
        <MainNavigation
          scrollToSection={props.scrollToSection}
          homeRef={props.homeRef}
          programRef={props.programRef}
        />
      </span>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
