import Scroll from "../Scroll";
import Space from "../Space";
import Products from "./Products";

const SimilarAds = () => {
  return (
    <div>
      <h3 className="dark:text-white text-2xl">Similar Advert</h3>
      <Space spacing="my-4" />
      <Scroll direction="horizontal">
        <Products direction="horizontal" />
      </Scroll>
    </div>
  );
};

export default SimilarAds;
