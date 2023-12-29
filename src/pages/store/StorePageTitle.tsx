import Heading from "../../components/Heading";
import Space from "../../components/Space";

const StorePageTitle = ({ title }: { title: string }) => {
  return (
    <>
      <Space spacing="my-4" />
      <Heading variant="h3">{title}</Heading>
      <Space spacing="my-4" />
    </>
  );
};

export default StorePageTitle;
