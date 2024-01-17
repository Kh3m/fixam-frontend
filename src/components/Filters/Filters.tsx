import MiniAdBanner from "../MiniAdBanner";
import Space from "../Space";
import CategoryFilter from "./CategoryFilter";
import LocationFilter from "./LocationFilter";
import PriceFilter from "./PriceFilter";
import TypeFilter from "./TypeFilter";

const Filters = () => (
  <div className="hidden">
    <CategoryFilter />
    <Space spacing="my-4" />
    <LocationFilter />
    <Space spacing="my-4" />
    <PriceFilter />
    <Space spacing="my-4" />
    <TypeFilter />
    <Space spacing="my-4" />
    {/* <ConditionFilter />
    <Space spacing="my-4" />
    <RoomFilter />
    <Space spacing="my-4" />
    <MaterialFilter />
    <Space spacing="my-4" />
    <BrandFilter />
    <Space spacing="my-4" />
    <ColorFilter />
    <Space spacing="my-4" />
    <BulkPriceFilter />
    <Space spacing="my-4" /> */}
    <MiniAdBanner shouldRotate />
    <Space spacing="my-4" />
  </div>
);

export default Filters;
