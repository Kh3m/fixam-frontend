import Heading from "./Heading";
import EmptySearchStateSVG from "./SVGs/EmptySearchStateSVG";

const EmptyState = () => {
  return (
    <div>
      <EmptySearchStateSVG />
      <Heading variant="h3">No Result Found</Heading>
    </div>
  );
};

export default EmptyState;
