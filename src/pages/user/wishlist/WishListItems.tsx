import product1 from "../../../assets/product_1.png";
import EmptyStateUser from "../../../components/EmptyStateUser";
import HR from "../../../components/HR";
import { WishlistType } from "../../../services/wishlist";
import WishListItem from "./WishListItem";

interface Props {
  wishlistsForUser: WishlistType[];
}

const WishListItems = ({ wishlistsForUser }: Props) => {
  if (wishlistsForUser && !wishlistsForUser.length)
    return (
      <EmptyStateUser heading="Your wishlist is empty. Sprinkle it with wishes and turn it into a party of dreams! 🎉" />
    );

  if (wishlistsForUser)
    return (
      <section>
        {/* {wishListItems.map(({ product: { image, price, title } }, index) => (
          <section key={index}>
            <WishListItem imageURL={image} price={price} title={title} />
            {wishListItems.length - 1 !== index && <HR styles="my-8" />}
          </section>
        ))} */}

        {wishlistsForUser.map((wishlist, index) => (
          <section key={wishlist.id}>
            <WishListItem
              productId={wishlist.product_id}
              imageURL={product1}
              wishlist={wishlist}
            />
            {wishlistsForUser.length - 1 !== index && <HR styles="my-8" />}
          </section>
        ))}
      </section>
    );
};

export default WishListItems;
