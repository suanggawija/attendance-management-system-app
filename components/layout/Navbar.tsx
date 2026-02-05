import Image from "next/image";
import Link from "next/link";
import { ButtonNavbar, ButtonPrimary } from "../ui/button/Button";

export const Navbar = () => {
  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className="w-full flex justify-between  items-center fixed px-8 py-3 ">
      <div className="flex gap-2 items-center">
        <Image alt="logo" width={40} height={40} src={"logo.svg"} />
        <span className="text-red-700 text-xl font-bold uppercase">
          Attendance
        </span>
      </div>
      <ul className="flex gap-6">
        {menus.map((menu, index) => (
          // <Link
          //   className="text-gray-700 text-sm hover:text-red-700 duration-300 "
          //   href={menu.link}
          //   key={index}
          // >
          //   {menu.name}
          // </Link>
          <ButtonNavbar key={index} href={menu.link} text={menu.name} />
        ))}
      </ul>
      <div>
        <ul>
          <ButtonPrimary href="" text="Login" />
        </ul>
      </div>
    </nav>
  );
};
