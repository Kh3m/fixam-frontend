import {
  Navigate,
  Outlet,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Main from "../components/Main";
import Footer from "../components/Footer/Footer";
import NewsLetter from "../components/NewsLetter";
import Header from "../components/Header";
import TopAdBanner from "../components/TopAdBannner";

const PrivateRoutes = () => {
  const { isAuthenticated, userInfo } = useAuth();
  if (!isAuthenticated() && !userInfo) return <Navigate to="/auth/login" />;

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
};

export default PrivateRoutes;
