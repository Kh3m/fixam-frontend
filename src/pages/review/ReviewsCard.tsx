interface Props {
  averageRating: number;
}

const ReviewsCard = ({ averageRating }: Props) => {
  return (
    <div
      className="h-[160px] w-[160px] bg-fyellow-shades-500 rounded-md 
    flex justify-center items-center flex-col font-semibold"
    >
      <span className=" text-5xl text-white">{averageRating.toFixed(1)}</span>
      <span className=" text-lg text-white">out of 5</span>
    </div>
  );
};

export default ReviewsCard;
