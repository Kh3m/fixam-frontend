import logo from "../assets/fixam-logo2.png";
import WLogo from "../assets/fixamlogo-w.png";

interface Props {
  styles?: string;
  color: "white" | "yellow";
}

const Logo = ({ styles, color }: Props) => {
  return (
    <div className={styles}>
      {color === "white" ? (
        <img src={WLogo} alt="Fixam Logo" className="w-full" />
      ) : (
        <img src={logo} alt="Fixam Logo" className="w-full" />
      )}
    </div>
  );
};

export default Logo;
