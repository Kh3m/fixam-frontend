import Logo from "./Logo";

const TopAdBanner = () => {
  return (
    <div className="bg-fblack h-12 md:h-[106px] text-fyellow text-sm md:text-4xl flex justify-center items-center space-x-5">
      <div>Welcome to</div>
      <Logo color="yellow" styles="w-7 h-7 md:w-[80px] md:h-[80px]" />
      <div>Buy From Your Comfort</div>
    </div>
  );
};

export default TopAdBanner;
