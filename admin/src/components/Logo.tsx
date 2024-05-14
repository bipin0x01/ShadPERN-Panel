import Image from "next/image";
import logo from "./logo.png";

const Logo = () => {
  return (
    <div>
      <Image src={logo} alt="Logo" height={40} />
    </div>
  );
};

export default Logo;
