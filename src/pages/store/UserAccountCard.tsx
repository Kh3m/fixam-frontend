import { FaAngleDown } from "react-icons/fa6";

import khemProfilePic from "../../assets/khem/khem.png";

import Card from "../../components/Card";
const UserAccountCard = () => {
  return (
    <Card styles="w-fit" notFullWidth>
      <div className="flex justify-center items-center space-x-4 ">
        <div className="h-14 w-14 rounded-lg">
          <img
            src={khemProfilePic}
            alt="Profile Picture"
            className="h-full w-full overflow-hidden rounded-lg object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold dark:text-fdark-200  text-left">
            Khem
          </h3>
          <h4 className="text-base font-semibold text-fgrey text-left">
            User's Account
          </h4>
        </div>
        <FaAngleDown size={26} color="#6c6c6c" />
      </div>
    </Card>
  );
};

export default UserAccountCard;
