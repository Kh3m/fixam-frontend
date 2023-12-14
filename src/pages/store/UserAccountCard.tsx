import { FaAngleDown } from "react-icons/fa6";

import khemProfilePic from "../../assets/khem/khem.png";

import Card from "../../components/Card";

const UserAccountCard = () => {
  return (
    <Card styles="w-fit ml-auto my-2">
      <div className="flex justify-center items-center space-x-4 ">
        <div className="h-14 w-14 rounded-lg">
          <img
            src={khemProfilePic}
            alt="Profile Picture"
            className="h-full w-full overflow-hidden rounded-lg object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Khem</h3>
          <h4 className="text-base font-semibold text-fgrey">User's Account</h4>
        </div>
        <FaAngleDown size={26} />
      </div>
    </Card>
  );
};

export default UserAccountCard;
