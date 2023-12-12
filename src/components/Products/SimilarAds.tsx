import Space from "../Space";
import Products from "./Products";

const SimilarAds = () => {
  return (
    <div>
      <h3 className="dark:text-white text-2xl">Similar Advert</h3>
      <Space spacing="my-4" />
      <section className="flex">
        <Products direction="horizontal" />
      </section>
    </div>
  );
};

export default SimilarAds;
