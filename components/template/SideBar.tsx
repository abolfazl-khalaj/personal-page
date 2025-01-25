import Link from "next/link";
import { FC } from "react";

const SideBar: FC= () => {
    return (
      <div className="w-1/5 bg-gray-800 fixed right-0 top-0 bottom-0">
        <div>
            <p className="font-MorabbaBold lg:text-xl text-center my-2 py-3 border-b border-blue-400">
                به صفحه من خوش امدید
            </p>
        </div>
        <ul className="flex gap-y-3 flex-col mt-11 pr-3">
            <li>
                <Link href={'/'}>صفحه اصلی</Link>
            </li>
            <li>
                <Link href={'/skills'}>مهارت</Link>
            </li>
            <li>
                <Link href={'/projects'}>پروژه</Link>
            </li>
            <li>
                <Link href={'/blog'}>مقالات</Link>
            </li>
            <li>
                <Link href={'/about'}>درباره من</Link>
            </li>
            <li>
                <Link href={'/panel'}>پنل مدیریت</Link>
            </li>
        </ul>
      </div>
    );
  };
  
export default SideBar