import Image from "next/image";
import { FC } from "react";

const MyPhoto: FC = () => {
  return (
    <div className="w-52 h-52 md:w-[350px] md:h-[350px]">
      <Image
        src="https://avatars.githubusercontent.com/u/174951987?v=4"
        alt="Profile"
        width={350}
        height={350}
        className="object-cover rounded-full"
        quality={100}
      />
    </div>
  );
};

export default MyPhoto;
