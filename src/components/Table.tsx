import { ReactNode } from "react";

interface Props {
  TableData: ReactNode;
  tableHeadings: string[];
}
const Table = ({ tableHeadings, TableData }: Props) => {
  return (
    <table className="w-full">
      <thead
        className="text-white dark:bg-slate-700 bg-fyellow rounded-lg text-left border-b
           dark:border-slate-600"
      >
        <tr>
          {tableHeadings.map((heading, index) => (
            <th key={index} className={`${index === 0 ? "p-4" : "py-4"}`}>
              {heading}
            </th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>

      <tbody className="text-left text-black dark:text-slate-200">
        {TableData}
      </tbody>
    </table>
  );
};

export default Table;
