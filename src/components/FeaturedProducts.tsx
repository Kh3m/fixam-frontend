import FeaturedBar from "./FeaturedBar";
import MiniAdBanner from "./MiniAdBanner";
import Products from "./Products/Products";

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
    </>
  );
};

export default FeaturedProducts;
