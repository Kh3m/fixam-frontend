import Button from "./Button";
import Input from "./Input";

const NewsLetter = () => {
  return (
    <div
      color="black"
      className="flex flex-col my-5 text-center text-white bg-fblack h-72 justify-center"
    >
      <div className="my-2">
        <p className="text-2xl my-1 font-semibold leading-normal">
          Hello there, new to <span className="text-pri-default">Fixam?</span>
        </p>
        <p className="text-[16px] my-1">
          Subscribe to our newsletter to get updates on our latest offers!
        </p>
      </div>
      <div>
        <Input />
        <div className="mx-2 inline-block"></div>
        <Button
          variant="elevated"
          styles="bg-fyellow py-2 px-8  font-normal"
          noSizingClass
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default NewsLetter;
