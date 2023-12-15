const MenuItems = ({
  items,
  showMenuItems,
}: {
  items: string[];
  showMenuItems: boolean;
}) => {
  return (
    <>
      {showMenuItems ? (
        <ul className="absolute top-12 dark:bg-slate-500 bg-white fshadow rounded-md ">
          {items.map((item) => (
            <li className="cursor-pointer font-normal text-slate-600 dark:hover:bg-slate-800 last:border-b-0 border-b hover:bg-fyellow hover:text-white rounded-t-md px-4 p-2 whitespace-nowrap">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default MenuItems;
