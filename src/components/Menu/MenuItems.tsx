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
        <ul className="absolute top-12 dark:bg-fdark-700 bg-white fshadow rounded-md ">
          {items.map((item) => (
            <li className="cursor-pointer font-normal dark:hover:bg-fdark-800 hover:bg-fyellow hover:text-white rounded-md px-4 p-2 whitespace-nowrap">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default MenuItems;
