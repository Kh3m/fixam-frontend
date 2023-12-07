import Logo from "./Logo";

const TopAdBanner = () => {
  return (
    <div className="bg-fblack h-12 md:h-20 text-fyellow text-sm md:text-lg flex justify-center items-center space-x-5">
      <div>Welcome to</div>
      <Logo color="yellow" styles="w-7 h-7 md:w-12 md:h-12" />
      <div>Buy From Your Comfort</div>
    </div>
  );
};

export default TopAdBanner;
