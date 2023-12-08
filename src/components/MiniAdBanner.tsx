const MiniAdBanner = ({ shouldRotate }: { shouldRotate?: boolean }) => {
  return (
    <div className="flex justify-center items-center bg-fpurple h-24 text-lg ">
      <span className={`${shouldRotate && "-rotate-90"} `}>Fix Ad Here</span>
    </div>
  );
};

export default MiniAdBanner;
