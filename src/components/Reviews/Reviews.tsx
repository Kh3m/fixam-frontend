import Button from "../Button";
import Card from "../Card";
import Heading from "../Heading";
import Space from "../Space";
import Review from "./Review";

const Reviews = () => {
  return (
    <section>
      <Heading variant="h3" styles="text-[24px] font-semibold">
        Reviews
      </Heading>
      <Space spacing="my-12" />
      <div className="flex space-x-8">
        <Review />
        <Review />
        <Review />
      </div>
      <Space spacing="my-8" />
      <div className="flex justify-center">
        <Button
          variant="elevated"
          styles="px-6 py-2 bg-fyellow text-white font-semibold"
        >
          Load More
        </Button>
      </div>
    </section>
  );
};

export default Reviews;
