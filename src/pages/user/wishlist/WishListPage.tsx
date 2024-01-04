import Card from "../../../components/Card";
import HR from "../../../components/HR";
import Heading from "../../../components/Heading";
import Space from "../../../components/Space";
import WishListItems from "./WishListItems";

const WishListPage = () => {
  return (
    <Card styles="px-12">
      <div className="flex justify-between font-semibold text-2xl">
        <Heading variant="h2" styles="text-2xl">
          Wishlist
        </Heading>
        <span className="text-lg">2 Items</span>
      </div>
      <HR styles="mt-4 mb-8" />
      <WishListItems />
      <Space spacing="my-14" />
    </Card>
  );
};

export default WishListPage;
