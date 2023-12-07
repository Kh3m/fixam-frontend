import { PropsWithChildren } from "react";
import Card from "../Card";
import Space from "../Space";

interface Props {
  filterBy: string;
}

const FilterCard = ({ children, filterBy }: PropsWithChildren<Props>) => {
  return (
    <Card>
      <h3 className="text-sm text-slate-900 font-semibold">{filterBy}</h3>
      <Space spacing="my-2" />
      {children}
    </Card>
  );
};

export default FilterCard;
