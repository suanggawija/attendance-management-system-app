"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ButtonPrimary = ({
  href,
  text,
}: {
  href: string;
  text: string;
}) => {
  return (
    <Link
      href={href}
      className="px-5 py-2 bg-linear-to-r from-red-500 to-red-700 hover:from-red-500 hover:to-red-900 rounded-full text-white font-bold duration-700"
    >
      {text}
    </Link>
  );
};

export const ButtonSecondary = () => {
  return <div>ButtonSecondary</div>;
};

export const ButtonOutline = () => {
  return <div>ButtonOutline</div>;
};

export const ButtonGhost = () => {
  return <div>ButtonGhost</div>;
};

export const ButtonIcon = () => {
  return <div>ButtonIcon</div>;
};

export const ButtonDanger = () => {
  return <div>ButtonDanger</div>;
};

export const ButtonLoading = () => {
  return <div>ButtonLoading</div>;
};

export const ButtonDisabled = () => {
  return <div>ButtonDisabled</div>;
};

export const ButtonTextAndIcon = () => {
  return <div>ButtonTextAndIcon</div>;
};

export const ButtonNavbar = ({
  key,
  href,
  text,
}: {
  key: number;
  href: string;
  text: string;
}) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${
        pathname >= href ? "text-red-600" : "text-gray-700"
      } text-sm hover:text-red-700 duration-300`}
      href={href}
      key={key}
    >
      {text}
    </Link>
  );
};
