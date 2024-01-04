import UserPageContainer from "../UserPageContainer";

import product1 from "../../../assets/product_1.png";
import NotificationItem from "./NotificationItem";

const notifications = [
  {
    title: "Order Delivered",
    description: "Your order #547862FA has been delivered!",
    time: "2 mins ago",
    imageURL: product1,
  },
  {
    title: "Order Delivered",
    description: "Your order #547862FA has been delivered!",
    time: "4 days ago",
  },
  {
    title: "Order Confirmed",
    description: "Your order #547862FA has been confirmed!",
    time: "4 days ago",
  },
  {
    title: "Order Cancelled",
    description: "Your order #547862FA has been camcelled!",
    time: "4 days ago",
  },
];

const UserNotificationPage = () => {
  return (
    <UserPageContainer heading="Notifications" itemsCount="5">
      <ul>
        {notifications.map(({ title, description, time, imageURL }) => (
          <NotificationItem
            title={title}
            description={description}
            time={time}
            imageURL={imageURL}
          />
        ))}
      </ul>
    </UserPageContainer>
  );
};

export default UserNotificationPage;
