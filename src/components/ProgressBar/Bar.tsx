interface Props {
  isActive: boolean;
}
const Bar = ({ isActive }: Props) => {
  return (
    <div
      className={`${
        isActive ? "bg-fyellow " : "bg-fgrey"
      } h-1 rounded-sm flex-grow`}
    ></div>
  );
};

export default Bar;
