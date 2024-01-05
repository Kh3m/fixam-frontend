import Table from "../../../components/Table";
import StorePageTitle from "../StorePageTitle";
import OrderQuickFilter from "./OrderQuickFilter";
import { formatPrice } from "../../../utils/number-formatter";
import Space from "../../../components/Space";
import removeSpacing from "../../../utils/removeSpacing";
import ActionMenu from "../../../components/Menu/ActionMenu";

const orders = [
  {
    id: 54768,
    customer: "Khem Adams",
    payment: "Paid",
    time: "2 mins ago",
    type: "Delivery",
    status: "In Transit",
    amount: 457_623,
  },
  {
    id: 54768,
    customer: "Khem Adams",
    payment: "Paid",
    time: "2 mins ago",
    type: "Pick up",
    status: "Picked up",
    amount: 457_623,
  },
  {
    id: 54768,
    customer: "Khem Adams",
    payment: "Paid",
    time: "2 mins ago",
    type: "Delivery",
    status: "Cancelled",
    amount: 457_623,
  },
  {
    id: 54768,
    customer: "Khem Adams",
    payment: "Paid",
    time: "2 mins ago",
    type: "Delivery",
    status: "Delivered",
    amount: 457_623,
  },
];
const StoreOrders = () => {
  const generateTableOrderData = () => {
    // if (isLoading) return <p>Loading...</p>;
    return (
      <>
        {orders.map((order) => {
          const lowerStatus = removeSpacing(order.status);

          return (
            <tr key={order.id} className="rounded-lg dark:bg-slate-700 fshadow">
              <td className="p-4 font-semibold">#{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.payment}</td>
              <td>{order.time}</td>
              <td>{order.type}</td>
              <td
                className={`${
                  lowerStatus === "intransit"
                    ? "text-fyellow"
                    : lowerStatus === "pickedup" || lowerStatus === "delivered"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {order.status}
              </td>
              <td>{formatPrice(Number.parseFloat(order.amount.toString()))}</td>
              <td className="text-center">
                <ActionMenu actions={[{ label: "View" }]} />
              </td>
            </tr>
          );
        })}
      </>
    );
  };

  return (
    <section>
      <StorePageTitle title="Order History" />
      <OrderQuickFilter />
      <Space spacing="my-8" />
      <Table
        tableHeadings={[
          "",
          "Customer",
          "Payment",
          "Time",
          "Type",
          "Status",
          "Amount",
        ]}
        TableData={generateTableOrderData()}
      />
    </section>
  );
};

export default StoreOrders;
