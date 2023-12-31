import khemReviewImg from "../../assets/khem/khem-review.jpg";
import Heading from "../Heading";
import Rating from "../Rating";
import Space from "../Space";

const Review = () => {
  return (
    <div className="">
      <div className="flex space-x-2 items-center">
        <img
          src={khemReviewImg}
          alt="Reviewer"
          className=" h-14 w-14 rounded-full object-cover object-top"
        />
        <div>
          <Heading variant="h4" styles="text-[20px] font-semibold pl-1">
            Abdul Kareem
          </Heading>
          <div className="flex items-center space-x-2 text-fgrey">
            <Rating count={4} />
            <span> 5 Star </span>
          </div>
        </div>
      </div>
      <Space spacing="my-2" />
      <p className="text-justify line-clamp-5">
        The product exceeded my expectations with its sleek design and powerful
        performance. It's a game-changer, providing a seamless and efficient
        experience that enhances my daily tasks.
      </p>
    </div>
  );
};

export default Review;
