import BusSVG from "../../components/SVGs/BusSVG";

const CheckoutSummary = () => {
  return (
    <div className="flex justify-between">
      <div className="basis-1/2">
        <ul>
          <li className=" font-medium">AbdulKareem Adams</li>
          <li className="text-black/80 font-medium">+234 81319156</li>
          <li className="text-black/80 font-medium">
            Behind MIB Plaza, 1st Avenue, Gwarinpa, Abuja F.C.T. 900801
          </li>
        </ul>
      </div>
      <div className="basis-1/2 flex justify-end">
        <BusSVG />
      </div>
    </div>
  );
};

export default CheckoutSummary;
