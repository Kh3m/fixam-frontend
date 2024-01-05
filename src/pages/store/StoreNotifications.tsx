import Space from "../../components/Space";
import Notifications from "../user/notification/Notifications";
import StorePageTitle from "./StorePageTitle";

const StoreNotifications = () => {
  return (
    <section>
      <StorePageTitle title="Notifications" />
      <Space spacing="my-8" />
      <Notifications />
    </section>
  );
};

export default StoreNotifications;
