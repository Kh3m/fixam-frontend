import Center from "../../../components/Center";
import EmptyStateStore from "../../../components/EmptyStateStore";
import EmptyStateUser from "../../../components/EmptyStateUser";
import ActionMenu from "../../../components/Menu/ActionMenu";
import Space from "../../../components/Space";
import Spinner from "../../../components/Spinner";
import Table from "../../../components/Table";
import useOrdersForStore from "../../../hooks/store/useOrdersForStore";
import useAuth from "../../../hooks/useAuth";
import { FetchResponseType } from "../../../services/apiClient";
import { StoreOrderType } from "../../../services/store";
import { formatPrice } from "../../../utils/number-formatter";
import removeSpacing from "../../../utils/removeSpacing";
import StorePageTitle from "../StorePageTitle";
import OrderQuickFilter from "./OrderQuickFilter";

const StoreOrderHistory = () => {
  const { userStores } = useAuth();

  const { data, isLoading: isLoadingStoreOrders } = useOrdersForStore(
    userStores ? userStores[userStores?.length - 1].id : ""
  );
  const ordersForStore = data as FetchResponseType<StoreOrderType>;

  console.log("ordersForStore", ordersForStore);

  const generateTableOrderData = () => {
    if (isLoadingStoreOrders)
      return (
        <tr>
          <td className="p-4" colSpan={6}>
            <Center>
              <Spinner />
            </Center>
          </td>
        </tr>
      );

    if (ordersForStore && !ordersForStore.results.length)
      return (
        <tr>
          <td className="p-4" colSpan={6}>
            <Center>
              <EmptyStateStore heading="No Order" />
            </Center>
          </td>
        </tr>
      );

    if (ordersForStore)
      return (
        <>
          {ordersForStore.results.map((storeOder, index) => {
            const lowerStatus = removeSpacing(
              storeOder.order.order_delivery_status
            );

            return (
              <tr key={index} className="rounded-lg dark:bg-slate-700 fshadow">
                <td className="p-4 font-semibold">
                  #{storeOder.id.split("-")[0]}
                </td>
                {/* <td>{order.customer}</td> */}
                <td>{storeOder.quantity}</td>
                {/* <td>{order.time}</td> */}
                {/* <td>{formatDateString(storeOder.created_at.split(" ")[0])}</td> */}
                <td
                  // className={`
                  // ${
                  //   lowerStatus === "intransit"
                  //     ? "text-fyellow"
                  //     : lowerStatus === "pickedup" ||
                  //       lowerStatus === "delivered"
                  //     ? "text-green-600"
                  //     : "text-red-400"
                  // }
                  // `}
                  className=""
                >
                  {storeOder.order.order_delivery_status}
                </td>
                <td>
                  {formatPrice(
                    Number.parseFloat(storeOder.item_price.toString())
                  )}
                </td>
                <td className="text-center">
                  <ActionMenu
                    actions={[
                      {
                        label: "View",
                        link: {
                          to: userStores
                            ? `/stores/${
                                userStores[userStores?.length - 1].slug
                              }/orders/${storeOder.order.id}`
                            : "",
                        },
                      },
                    ]}
                  />
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
          "ID",
          // "Customer",
          "Quantity",
          //   "Date",
          // "Type",
          "Status",
          "Amount",
        ]}
        TableData={generateTableOrderData()}
      />
    </section>
  );
};

export default StoreOrderHistory;
