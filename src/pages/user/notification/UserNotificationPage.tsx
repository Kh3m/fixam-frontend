import UserPageContainer from "../UserPageContainer";
import Notifications from "./Notifications";

const UserNotificationPage = () => {
  return (
    <UserPageContainer heading="Notifications" itemsCount="5">
      <Notifications />
    </UserPageContainer>
  );
};

export default UserNotificationPage;
