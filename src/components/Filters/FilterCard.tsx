import { PropsWithChildren } from "react";
import Card from "../Card";
import Space from "../Space";

interface Props {
  filterTitle: string;
}

const FilterCard = ({ children, filterTitle }: PropsWithChildren<Props>) => {
  return (
    <Card>
      <h3 className="text-sm dark:text-white text-slate-900 font-semibold">
        {filterTitle}
      </h3>
      <Space spacing="my-2" />
      {children}
    </Card>
  );
};

export default FilterCard;
