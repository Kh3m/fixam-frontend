import Heading from "./Heading";

interface Props {
  styles?: string;
  bannerURL: string;
  description: string;
  heading: string;
  isStoreBanner?: boolean;
}

const Banner = ({
  styles,
  description,
  heading,
  bannerURL,
  isStoreBanner,
}: Props) => {
  const temInlineStyle = {
    background: `url(${bannerURL}) lightgray 50% / cover no-repeat`,
  };

  return (
    <section
      style={temInlineStyle}
      className={`${
        isStoreBanner
          ? "rounded-md h-[200px] md:h-[238px]"
          : "h-[300px] md:h-[338px]"
      } relative `}
    >
      <div
        className={`${styles} ${
          isStoreBanner && "rounded-md"
        } bg-fblack/75 absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center`}
      >
        <div className="text-center text-white">
          <Heading variant="h1" styles="text-[36px] font-bold">
            {heading}
          </Heading>
          <p className="md:w-[532px] text-sm font-normal">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
