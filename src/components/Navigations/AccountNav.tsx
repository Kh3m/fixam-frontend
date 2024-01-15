import { RiAccountCircleLine } from "react-icons/ri";
import CircledLink from "./CircledLink";
import { UserType } from "../../services/user";
import { FaChevronDown } from "react-icons/fa6";
import Spinner from "../Spinner";
import accountSVG from "../../assets/svgs/account.svg";
import ordersSVG from "../../assets/svgs/orders.svg";
import wishlistSVG from "../../assets/svgs/wishlist.svg";
import logoutSVG from "../../assets/svgs/logout.svg";
import { Variants, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ImageType } from "../../utils/types";
import { useState } from "react";

interface Props {
  userData?: UserType;
}

type LinkItemType = { to: string; img: ImageType; text: string };

interface LinkItemProps {
  linkItem: LinkItemType;
  onClick: () => void;
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const LinkItem = ({ linkItem: { to, img, text }, onClick }: LinkItemProps) => (
  <motion.li
    onClick={onClick}
    variants={itemVariants}
    className="my-4 first-of-type:my-2 text-black hover:font-semibold"
  >
    <Link to={to} className="flex items-center space-x-6 rounded-b-lg">
      <img {...img} className="h-6 w-16" />
      <span className="w-36">{text}</span>
    </Link>
  </motion.li>
);

const AccountNav = ({ userData }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const linkItems: LinkItemType[] = [
    {
      to: "/users/account/addresses",
      img: { src: accountSVG, alt: "Account" },
      text: "Account",
    },
    {
      to: "/users/orders",
      img: { src: ordersSVG, alt: "Orders" },
      text: "Orders",
    },
    {
      to: "/users/wishlist",
      img: { src: wishlistSVG, alt: "Wishlist" },
      text: "Wishlist",
    },
    // {
    //   to: "/users/notification",
    //   img: { src: notificationSVG, alt: "Account" },
    //   text: "Notification",
    // },
    {
      to: "/auth/logout",
      img: { src: logoutSVG, alt: "Logout" },
      text: "Logout",
    },
  ];

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className=" relative"
    >
      <motion.div
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="user-select-none text-sm flex items-center space-x-2 text-white cursor-pointer font-semibold "
      >
        <CircledLink to="#" styles="text-2xl mr-2">
          <RiAccountCircleLine />
        </CircledLink>

        <span className="hidden md:inline-block">
          {userData ? userData.first_name : <Spinner />}
        </span>

        <motion.div
          className="hidden md:block"
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <FaChevronDown />
        </motion.div>
      </motion.div>

      <motion.ul
        className="absolute z-40 top-[120%] right-0
      bg-white pagination-shadow px-10 py-4"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        // style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {linkItems.map(({ to, img, text }) => (
          <LinkItem
            key={to}
            onClick={() => setIsOpen(false)}
            linkItem={{
              to: to,
              img: img,
              text: text,
            }}
          />
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default AccountNav;
