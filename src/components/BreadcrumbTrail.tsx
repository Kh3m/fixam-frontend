import { Link, useLocation } from "react-router-dom";
import capitalize from "../utils/capitalize";
import { Fragment } from "react";

const BreadcrumbTrail = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex items-cente text-fgrey space-x-2">
      <Link to="/" className="hover:underline underline-offset-2">
        Home
      </Link>
      {pathname.split("/").map((name) => {
        if (name)
          return (
            <Fragment>
              <span>&gt;</span>
              <Link
                to={pathname.slice(0, pathname.indexOf(name) + name.length)}
                className={
                  "hover:underline underline-offset-2 last-of-type:font-bold"
                }
              >
                {capitalize(name)}
              </Link>
            </Fragment>
          );
      })}
    </div>
  );
};

export default BreadcrumbTrail;
