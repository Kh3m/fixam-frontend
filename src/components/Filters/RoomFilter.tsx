import Collapsible from "../Collapsibles/Collapsible";
import Space from "../Space";
import FiltersWithInputField from "./FiltersWithInputField";

const rooms = [
  {
    text: "Bedroom",
    count: "• 18 018 ads",
    selected: true,
  },
  {
    text: "Dining Room",
    count: "• 11 891 ads",
    selected: true,
  },
  {
    text: "Home Office / Study",
    count: "• 24 205 ads",
    selected: true,
  },
  {
    text: "Kitchen",
    count: "• 1 775 ads",
    selected: true,
  },
  {
    text: "Living Room",
    count: "• 39 697 ads",
    selected: true,
  },
  {
    text: "Attic",
    count: "• 80 ads",
    selected: true,
  },
];

const RoomFilter = () => {
  return (
    <Collapsible headerName="Room">
      <FiltersWithInputField
        filters={rooms}
        filterTitle="Room"
        inputType="text"
        variant="checkbox"
        placeholder="Find Room"
      />
      <Space spacing="my-4" />
    </Collapsible>
  );
};

export default RoomFilter;
