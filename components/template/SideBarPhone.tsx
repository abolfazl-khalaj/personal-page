import Link from "next/link";
import { FaProjectDiagram, FaRegUser, FaUserCog } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { RiArticleLine } from "react-icons/ri";

export default function SideBarPhone() {
  const menuItems = [
    { href: "/", icon: <IoHomeOutline size={28} />, label: "صفحه اصلی" },
    { href: "/projects", icon: <FaProjectDiagram size={28} />, label: "پروژه" },
    { href: "/skills", icon: <GiSkills size={28} />, label: "مهارت" },
    { href: "/blog", icon: <RiArticleLine size={28} />, label: "مقالات" },
    { href: "/about", icon: <FaRegUser size={28} />, label: "درباره من" },
    { href: "/panel", icon: <FaUserCog size={28} />, label: "پنل مدیریت" },
  ];

  return (
    <ul className="flex m-auto justify-around w-full bg-gradient-to-r from-cyan-900 to-teal-900 py-3 rounded-t-xl shadow-lg">
      {menuItems.map((item, index) => (
        <li key={index} className="flex-1">
          <Link
            href={item.href}
            className="flex flex-col items-center gap-y-1 justify-center p-2 text-white transition-transform duration-200 hover:scale-110"
          >
            {item.icon}
            <span className="text-sm font-semibold">{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
