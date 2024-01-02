import Heading from "./Heading";
import SearchNot from "../assets/searchnot.svg";

const EmptyState = () => {
  return (
    <div className="flex flex-col space-x-5 space-y-2 justify-center items-center">
      <img src={SearchNot} className="h-28" />
      <Heading variant="h3">No Result Found</Heading>
      <p>We can’t find any item matching your search</p>
    </div>
  );
};

export default EmptyState;
