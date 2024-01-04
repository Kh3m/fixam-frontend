import Heading from "../../../components/Heading";
import BorderCard from "../BorderCard";

interface Props {
  title: string;
  description: string;
  time: string;
  imageURL?: string;
}
const NotificationItem = ({ title, description, imageURL, time }: Props) => {
  return (
    <li className="my-4">
      <BorderCard styles="flex justify-between">
        <div>
          <Heading variant="h4" styles="text-sm font-bold">
            {title}
          </Heading>
          <p className="font-medium text-gray-400">
            {description}
            <span
              className={`
              px-2 py-1 text-xs
              ${
                title.toLocaleLowerCase().includes("delivered") &&
                "text-green-500"
              } 
              ${
                title.toLocaleLowerCase().includes("confirmed") &&
                "text-fyellow-shades-500"
              } ${
                title.toLocaleLowerCase().includes("cancelled") &&
                "text-red-500"
              } `}
            >
              See Details
            </span>
          </p>

          {imageURL && <img src={imageURL} className="w-16 rounded-md" />}
        </div>
        <div className="text-sm font-semibold text-gray-400">{time}</div>
      </BorderCard>
    </li>
  );
};

export default NotificationItem;
