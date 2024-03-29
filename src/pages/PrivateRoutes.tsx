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
  const location = useLocation();
  // const location = useLocation();
  const { isAuthenticated, userInfo } = useAuth();
  if (!isAuthenticated() && !userInfo)
    return <Navigate to="/auth/login" state={{ from: location.pathname }} />;
  // return <Navigate to="/auth/login" state={{ from: location.pathname }} />;

  const { pathname } = useLocation();
  return (
    <Main>
      {!pathname.includes("stores") && <ScrollRestoration />}
      {pathname === "/" && <TopAdBanner />}

      {!pathname.includes("create-store") && <Header />}
      <Outlet />
      {!pathname.includes("create-store") && (
        <>
          <NewsLetter />
          <Footer />
        </>
      )}
    </Main>
  );
};

export default PrivateRoutes;
