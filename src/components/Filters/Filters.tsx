import MiniAdBanner from "../MiniAdBanner";
import Space from "../Space";
import BrandFilter from "./BrandFilter";
import BulkPriceFilter from "./BulkPriceFilter";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import ConditionFilter from "./ConditionFilter";
import LocationFilter from "./LocationFilter";
import MaterialFilter from "./MaterialFilter";
import PriceFilter from "./PriceFilter";
import RoomFilter from "./RoomFilter";
import TypeFilter from "./TypeFilter";

const Filters = () => (
  <>
    <CategoryFilter />
    <Space spacing="my-4" />
    <LocationFilter />
    <Space spacing="my-4" />
    <PriceFilter />
    <Space spacing="my-4" />
    <TypeFilter />
    <Space spacing="my-4" />
    <ConditionFilter />
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
    <Space spacing="my-4" />
    <MiniAdBanner shouldRotate />
    <Space spacing="my-4" />
  </>
);

export default Filters;
