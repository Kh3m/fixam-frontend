import Button from "./Button";
import Input from "./Input";
import Space from "./Space";

const NewsLetter = () => {
  return (
    <section
      color="black"
      className="flex flex-col text-center text-white bg-fblack h-72 items-center justify-center"
    >
      <div className="w-1/2">
        <div className="my-2">
          <p className="text-2xl my-1 font-semibold leading-normal">
            Hello there, new to <span className="text-pri-default">Fixam?</span>
          </p>
          <p className="text-[16px] my-1">
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
        </div>
        <div>
          <Input placeholder="Enter your email" />
          <Space spacing="my-2"></Space>
          <Button
            variant="elevated"
            styles="bg-fyellow py-2 px-8  font-normal"
            noSizingClass
          >
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
