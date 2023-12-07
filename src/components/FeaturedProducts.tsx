import FeaturedBar from "./FeaturedBar";
import MiniAdBanner from "./MiniAdBanner";
import Products from "./Products/Products";

const FeaturedProducts = ({ title }: { title: string }) => {
  return (
    <div className="flex-grow my-8">
      <MiniAdBanner />
      <FeaturedBar title={title} />
      <Products />
    </div>
  );
};

export default FeaturedProducts;
