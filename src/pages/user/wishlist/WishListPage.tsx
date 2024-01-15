import Card from "../../../components/Card";
import Center from "../../../components/Center";
import HR from "../../../components/HR";
import Heading from "../../../components/Heading";
import Space from "../../../components/Space";
import Spinner from "../../../components/Spinner";
import useAuth from "../../../hooks/useAuth";
import useWishlistForUser from "../../../hooks/wishlist/useWishlistForUser";
import { FetchResponseType } from "../../../services/apiClient";
import { WishlistType } from "../../../services/wishlist";
import WishListItems from "./WishListItems";

const WishListPage = () => {
  const { user } = useAuth();
  const { data: wishlists, isLoading: isLoadingWishlists } = useWishlistForUser(
    user?.id || ""
  );

  const wishlistsForUser = wishlists as FetchResponseType<WishlistType>;

  if (isLoadingWishlists)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  if (wishlists)
    return (
      <Card styles="px-12">
        <div className="flex justify-between font-semibold text-2xl">
          <Heading variant="h2" styles="text-lg md:text-2xl">
            Wishlist
          </Heading>
          <span className="text-sm md:text-lg">
            {wishlistsForUser.results.length
              ? wishlistsForUser.results.length + " Items"
              : ""}
          </span>
        </div>
        <HR styles="mt-4 mb-8" />
        <WishListItems
          wishlistsForUser={wishlistsForUser.results as WishlistType[]}
        />
        <Space spacing="my-14" />
      </Card>
    );
};

export default WishListPage;
