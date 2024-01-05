import ActionMenu from "../../../components/Menu/ActionMenu";
import Space from "../../../components/Space";
import Table from "../../../components/Table";
import StorePageTitle from "../StorePageTitle";

const orders = [
  {
    id: 1,
    name: "AbdulKareem Adamu",
    email: "abdulkareemadamu150@gmail.com",
  },
  {
    id: 2,
    name: "Khem Adams",
    email: "khem6333@gmail.com",
  },
  {
    id: 3,
    name: "Alex Cheta Alex",
    email: "alexcheta@gmail.com",
  },
  {
    id: 4,
    name: "Sir. IK",
    email: "sirik@gmail.com",
  },
];
const StoreCustomers = () => {
  const generateTableOrderData = () => {
    // if (isLoading) return <p>Loading...</p>;
    return (
      <>
        {orders.map((order) => {
          return (
            <tr key={order.id} className="rounded-lg dark:bg-slate-700 fshadow">
              <td className="p-4 font-semibold">#{order.id}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
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
      <StorePageTitle title="Customers" />
      <Space spacing="my-8" />
      <Table
        tableHeadings={["S/N", "Customer Name", "Customer Email"]}
        TableData={generateTableOrderData()}
      />
    </section>
  );
};

export default StoreCustomers;
