import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

import NewsLetter from "../components/NewsLetter";
import TopAdBanner from "../components/TopAdBannner";

function Layout() {
  const { pathname } = useLocation();
  return (
    <Main>
      {!pathname.includes("stores") && <ScrollRestoration />}

      {pathname === "/" && <TopAdBanner />}
      <Header />
      <Outlet />
      <NewsLetter />
      <Footer />
    </Main>
  );
}

export default Layout;
