import partner2 from "../assets/partners/logo beger.png";
import partner4 from "../assets/partners/Sun-King-Logo-01.png";

const Partners = () => {
  return (
    <section className="bg-slate-600 p-5">
      <h3 className="text-center text-slate-100 font-medium text-4xl">
        Trust Partners
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-16 items-center px-6 py-12 md:p-16">
        <img
          src={partner2}
          alt="Our Partner - Dangote Cement"
          className=" w-28 object-cover"
        />
        <img
          src={partner2}
          alt="Our Partner - Berger"
          className=" w-28 object-cover"
        />
        <img
          src={partner4}
          alt="Our Partner - Dangote Cement"
          className=" w-28 object-cover"
        />
        <img
          src={partner4}
          alt="Our Partner - Luminous Power Technologies"
          className=" w-28 object-cover"
        />
        <img
          src={partner2}
          alt="Our Partner - Sun King"
          className=" w-28 object-cover"
        />
        <img
          src={partner4}
          alt="Our Partner - Luminous Power Technologies"
          className=" w-28 object-cover"
        />
      </div>
    </section>
  );
};

export default Partners;
