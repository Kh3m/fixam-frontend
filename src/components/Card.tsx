import { PropsWithChildren } from "react";

interface Props {
  styles?: string;
  notFullWidth?: boolean;
}

const Card = ({ children, styles, notFullWidth }: PropsWithChildren<Props>) => {
  return (
    <section>
      <div
        className={`${styles} ${
          notFullWidth || "w-full"
        } rounded-md dark:bg-slate-800 dark:text-white bg-white px-5 py-3 md:fshadow`}
      >
        {children}
      </div>
    </section>
  );
};

export default Card;
