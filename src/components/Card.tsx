import { PropsWithChildren, ReactNode } from "react";

interface Props {
  withHeader?: boolean;
  headerContent?: ReactNode | string;
  styles?: string;
  notFullWidth?: boolean;
}

const Card = ({
  children,
  withHeader,
  headerContent,
  styles,
  notFullWidth,
}: PropsWithChildren<Props>) => {
  return (
    <>
      {withHeader && (
        <header className="rounded-t-md px-5 py-3 text-m text-white font-semibold  bg-fyellow">
          {headerContent}
        </header>
      )}
      <div
        className={`${styles} ${notFullWidth || "w-full"} ${
          withHeader ? "rounded-b-md " : "rounded-md "
        } dark:bg-slate-800 dark:text-white bg-white px-5 py-3 fshadow`}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
