import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbShare2 } from "react-icons/tb";
import Button from "../../../components/Button";
import Center from "../../../components/Center";
import Heading from "../../../components/Heading";
import {
  addItemToCart,
  removeFromWishlist,
} from "../../../components/Products/product-helpers";
import Space from "../../../components/Space";
import Spinner from "../../../components/Spinner";
import TapEffect from "../../../components/TapEffect";
import useProduct from "../../../hooks/products/useProduct";
import useAuth from "../../../hooks/useAuth";
import { WishlistType } from "../../../services/wishlist";
import { formatPrice } from "../../../utils/number-formatter";

interface Props {
  title?: string;
  price?: number;
  imageURL: string;
  productId: string;
  wishlist: WishlistType;
}

const WishListItem = ({ title, imageURL, productId, wishlist }: Props) => {
  const [isDeletingWishlist, setIsDeletingWishlist] = useState(false);
  const [isMovingItemToCart, setIsMovingItemToCart] = useState(false);

  const queryClient = useQueryClient();

  const { data: product, isLoading: isLoadingProduct } = useProduct(productId);
  const { user, isAuthenticated } = useAuth();

  const handleShare = async () => {
    if (product) {
      if (navigator.share && navigator.canShare({ url: location.href })) {
        const shared = await navigator.share({
          title:
            "I realy love this product: " + title + ", kindly check it out.",
          url: `http://localhost:5173/${product.category_name}/${product.id}`,
          text: "Beautiful Products",
        });

        console.log("SHARED SUCCESSFUL", shared);
      } else {
        alert("Your browser doesn't support native share");
      }
    }
  };

  if (isLoadingProduct)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  if (product)
    return (
      <section className="flex space-x-4">
        <div className="flex space-x-4 grow">
          <div>
            <img
              src={imageURL}
              alt={title}
              className="h-24 object-cover overflow-hidden rounded-lg"
            />
            {/* <p className="text-fgrey text-xs py-1">
            Item added 21st december, 2023
          </p> */}
          </div>

          <div>
            <Heading variant="h4" styles="font-semibold text-[20px]">
              {product.name}
            </Heading>

            <Space spacing="my-1" />
            <div className="text-base font-semibold">
              {formatPrice(product.selling_price as number)}
            </div>
            <Space spacing="my-1" />
          </div>
        </div>

        <div className="flex-grow-0 basis-[200px] flex flex-col items-center">
          <Button
            onClick={async () => {
              if (user) {
                setIsMovingItemToCart(true);
                await addItemToCart(
                  productId,
                  user.id,
                  isAuthenticated(),
                  queryClient
                );
                await removeFromWishlist(wishlist.id, user.id, queryClient);
                setIsMovingItemToCart(true);
              }
            }}
            disabled={isMovingItemToCart}
            variant="elevated"
            styles="hover:bg-fyellow-shades-600 bg-fyellow font-bold text-white"
          >
            Move to Cart
          </Button>
          <Space spacing="my-1" />
          <div className="flex space-x-4">
            <TapEffect
              styles="text-fyellow border flex items-center justifify-center cursor-pointer text-lg 
            border-fyellow rounded-md w-1/2 px-5 py-1"
            >
              <Button onClick={handleShare}>
                <TbShare2 />
              </Button>
            </TapEffect>
            <TapEffect
              styles="text-fyellow border flex items-center justifify-center cursor-pointer text-lg 
            border-fyellow rounded-md w-1/2 px-5 py-1"
            >
              <Button
                disabled={isDeletingWishlist}
                onClick={async () => {
                  if (user) {
                    setIsDeletingWishlist(true);
                    await removeFromWishlist(wishlist.id, user.id, queryClient);
                    setIsDeletingWishlist(true);
                  }
                }}
              >
                {isDeletingWishlist ? <Spinner /> : <RiDeleteBin6Line />}
              </Button>
            </TapEffect>
          </div>
        </div>
      </section>
    );
};

export default WishListItem;
