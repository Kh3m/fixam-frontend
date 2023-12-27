interface Props {
  tip?: string;
}
const Tooltip = ({ tip }: Props) => {
  return (
    <span
      className=" bg-black/80 p-2 absolute bottom-[calc(100%+10px)] left-[50%] 
          border border-white whitespace-nowrap hidden 
          translate-x-[-50%] rounded-md group-hover/tooltip:block
          
          before:content-[''] before:absolute before:top-[100%] before:left-[50%]
          before:translate-x-[50%] before:border-[8px] 
          before:border-t-black/80 before:border-b-transparent 
          before:border-r-transparent before:border-l-transparent 
          before:border-transparent before:border-[#333]"
    >
      {tip}
    </span>
  );
};

export default Tooltip;
