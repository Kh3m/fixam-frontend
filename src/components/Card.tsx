import { PropsWithChildren, ReactNode } from "react";

interface Props {
  withHeader?: boolean;
  headerContent?: ReactNode | string;
}

const Card = ({
  children,
  withHeader,
  headerContent,
}: PropsWithChildren<Props>) => {
  return (
    <>
      {withHeader && (
        <header className="rounded-t-md px-5 py-3 text-m text-white font-semibold bg-fyellow">
          {headerContent}
        </header>
      )}
      <div
        className={`${
          withHeader ? "rounded-b-md " : "rounded-md "
        } bg-white px-5 py-3 w-full fshadow`}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
