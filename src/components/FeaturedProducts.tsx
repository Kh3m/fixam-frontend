import FeaturedBar from "./FeaturedBar";
import MiniAdBanner from "./MiniAdBanner";
import Products from "./Products/Products";
import Space from "./Space";

interface Props {
  title: string;
  to: string;
}

const FeaturedProducts = ({ title, to }: Props) => {
  return (
    <>
      <MiniAdBanner />
      <FeaturedBar title={title} to={to} />
      <Products />
      <Space spacing="my-8" />
    </>
  );
};

export default FeaturedProducts;
