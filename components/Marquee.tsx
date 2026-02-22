import Image from "next/image";
import { logoIconsList } from "../constants";

type IconProps = {
  imgPath: string;
  name: string;
};

function LogoIcon({ imgPath, name }: IconProps) {
  return (
    <div className="flex-none marquee-item">
      <Image src={imgPath} alt={name} width={64} height={64} />
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, id) => (
            <LogoIcon key={id} imgPath={icon.imgPath} />
          ))}
          {logoIconsList.map((icon, id) => (
            <LogoIcon key={id} imgPath={icon.imgPath} />
          ))}
        </div>
      </div>
    </div>
  );
}
