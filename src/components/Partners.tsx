import partner1 from "../assets/partners/dangote-cement-logo 2.png";
import partner2 from "../assets/partners/logo beger.png";
import partner3 from "../assets/partners/Luminous_power_technologies_logo.png";
import partner4 from "../assets/partners/Sun-King-Logo-01.png";

const Partners = () => {
  return (
    <section className="bg-[#EEE] p-5">
      <h3 className="text-center text-black font-medium text-4xl">
        Trust Partners
      </h3>

      <div className="grid grid-cols-6 gap-16 items-center p-16">
        <img
          src={partner1}
          alt="Our Partner - Dangote Cement"
          className=" w-28 object-cover"
        />
        <img
          src={partner2}
          alt="Our Partner - Berger"
          className=" w-28 object-cover"
        />
        <img
          src={partner1}
          alt="Our Partner - Dangote Cement"
          className=" w-28 object-cover"
        />
        <img
          src={partner3}
          alt="Our Partner - Luminous Power Technologies"
          className=" w-28 object-cover"
        />
        <img
          src={partner4}
          alt="Our Partner - Sun King"
          className=" w-28 object-cover"
        />{" "}
        <img
          src={partner3}
          alt="Our Partner - Luminous Power Technologies"
          className=" w-28 object-cover"
        />
      </div>
    </section>
  );
};

export default Partners;
