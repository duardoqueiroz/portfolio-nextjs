import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SocialMediaButtonProps {
  name: string;
  link: string;
  icon: string;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  icon,
  link,
  name,
}) => {
  return (
    <Link
      key={name}
      href={link}
      target="_blank"
      className="transition delay-70 duration-300 ease-in-out hover:scale-125"
    >
      <Image width={50} height={50} src={icon} alt={name} loading="lazy" />
    </Link>
  );
};

export default SocialMediaButton;
