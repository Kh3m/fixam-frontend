import HR from "../../../components/HR";
import Heading from "../../../components/Heading";

interface Props {
  heading: string;
}
const HeadingWithBorderBottom = ({ heading }: Props) => {
  return (
    <>
      <Heading variant="h4" styles="text-[20px] font-semibold">
        {heading}
      </Heading>
      <HR styles="mt-4 mb-8" />
    </>
  );
};

export default HeadingWithBorderBottom;
