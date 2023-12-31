import Button from "../Button";
import Heading from "../Heading";

import product1 from "../../assets/product_1.png";
import Space from "../Space";

const ProductDescriptionText = () => {
  return (
    <section>
      <Heading variant="h3" styles="text-[24px] font-semibold">
        Product Details
      </Heading>
      <Space spacing="my-2" />

      <div className="flex space-x-8">
        <img src={product1} alt="" className=" h-48 w-1/5 rounded-md" />
        <div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec , vulputate.
          </p>

          <Button
            variant="elevated"
            styles="px-6 py-2 bg-fyellow text-white font-semibold my-4"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDescriptionText;
