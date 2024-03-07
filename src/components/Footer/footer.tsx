"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { FaFacebook, FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#2980B9] to-transparent">
      <div className="h-[5vh] w-full px-5 py-10 flex justify-between items-center">
        <div className="flex gap-3">
          <Link
            href="https://www.facebook.com/profile.php?id=100046502474922"
            passHref
            target="_blank"
          >
            <Button className="p-0 bg-transparent hover:bg-transparent">
              <FaFacebook
                className="text-2xl text-[#47556A] dark:text-white hover:text-[#2980B9] dark:hover:text-[#2980B9]"
                width={50}
                height={50}
              />
            </Button>
          </Link>
          <Link href="https://github.com/Ary-Sakirin" passHref target="_blank">
            <Button className="p-0 bg-transparent hover:bg-transparent">
              <FaGithub
                className="text-2xl text-[#47556A] dark:text-white hover:text-[#2980B9] dark:hover:text-[#2980B9]"
                width={50}
                height={50}
              />
            </Button>
          </Link>
          <Link href="https://twitter.com/Sakirin_ar" passHref target="_blank">
            <Button className="p-0 bg-transparent hover:bg-transparent">
              <FaXTwitter
                className="text-2xl text-[#47556A] dark:text-white hover:text-[#2980B9] dark:hover:text-[#2980B9]"
                width={50}
                height={50}
              />
            </Button>
          </Link>
        </div>
        <Link href="/photos">
          <div className="text-[#47556A] dark:text-white">
            ©2024 SOUM SOM ON
          </div>
        </Link>
      </div>
    </div>
  );
}
