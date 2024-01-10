import { Outlet, useLocation } from "react-router-dom";
import UserPageContainer from "../UserPageContainer";

const AccountPage = () => {
  const { pathname } = useLocation();
  return (
    <UserPageContainer
      heading={
        pathname.endsWith("account/addresses") ? "Account" : "Edit Address"
      }
      hasBackArrow={pathname.endsWith("addresses/edit") ? true : false}
    >
      <Outlet />
    </UserPageContainer>
  );
};

export default AccountPage;
