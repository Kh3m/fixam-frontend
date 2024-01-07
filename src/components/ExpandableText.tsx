import { Fragment, useState } from "react";
import { getNumberOfWords, wordCount } from "../utils/words";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [showMore, setShowMore] = useState(false);

  const handleExpandText = () => {
    setShowMore(!showMore);
  };

  return (
    <p className="text-fgrey text-justify">
      {wordCount(children) <= 50
        ? children
        : showMore
        ? children
        : getNumberOfWords(children, 50)}
      <Fragment>
        {!showMore && <span>...</span>}
        <span
          onClick={handleExpandText}
          className="text-fyellow-shades-300 font-bold italic cursor-pointer mx-1"
        >
          {showMore ? "Read Less" : "Read More"}
        </span>
      </Fragment>
    </p>
  );
};

export default ExpandableText;
