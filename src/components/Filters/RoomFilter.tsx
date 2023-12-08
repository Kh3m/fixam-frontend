import Space from "../Space";
import FiltersWithInputField from "./FiltersWithInputField";

const rooms = [
  {
    category: "Bedroom",
    count: "• 18 018 ads",
    selected: true,
  },
  {
    category: "Dining Room",
    count: "• 11 891 ads",
    selected: true,
  },
  {
    category: "Home Office / Study",
    count: "• 24 205 ads",
    selected: true,
  },
  {
    category: "Kitchen",
    count: "• 1 775 ads",
    selected: true,
  },
  {
    category: "Living Room",
    count: "• 39 697 ads",
    selected: true,
  },
  {
    category: "Attic",
    count: "• 80 ads",
    selected: true,
  },
];

const RoomFilter = () => {
  return (
    <>
      <FiltersWithInputField
        filters={rooms}
        filterTitle="Room"
        inputType="text"
        variant="checkbox"
        placeholder="Find Room"
      />
      <Space spacing="my-4" />
    </>
  );
};

export default RoomFilter;
