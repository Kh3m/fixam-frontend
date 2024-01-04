interface Props {
  isActive: boolean;
  isOderProgressBar?: boolean;
}
const Bar = ({ isActive, isOderProgressBar }: Props) => {
  return (
    <div
      className={`${isActive ? "bg-fyellow " : "bg-fgrey"} ${
        isOderProgressBar ? "h-6 -translate-x-1" : "h-1 rounded-sm"
      }  flex-grow`}
    ></div>
  );
};

export default Bar;
