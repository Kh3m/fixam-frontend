import FilterCard from "./FilterCard";

const LocationFilter = () => {
  return (
    <FilterCard filterBy="Location">
      <ul>
        <li className="text-sm text-fgrey">All Nigeria</li>
      </ul>
    </FilterCard>
  );
};

export default LocationFilter;
