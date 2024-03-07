"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { FaFacebook, FaGithub, FaTelegram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Navbar() {
  const { setTheme } = useTheme();

  return (
    <div className="">
      <div className="h-[10vh] w-full px-5 py-10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/28615575?v=4" />
              <AvatarFallback>SO</AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex flex-col">
            <p className="flex gap-1 items-center font-bold text-[#47556A] dark:text-white">
              SOUM SOM ON
              <HiMiniCheckBadge
                className="text-blue-600 text-xl"
                width={50}
                height={50}
              />
            </p>
            <p className="text-[#47556A] dark:text-white">
              somon.soum9@gmail.com
            </p>
          </div>
        </div>
        <div className="flex items-center gap-0 lg:gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[#47556A]" />
                <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="border-r-2 dark:border-white hidden lg:block">
            &nbsp;
          </div>
          <div className="hidden lg:block">&nbsp;</div>
          <Link
            href="https://www.facebook.com/profile.php?id=100046502474922"
            passHref
            target="_blank"
          >
            <Button className="p-0 bg-transparent hover:bg-transparent hidden lg:block">
              <FaFacebook
                className="text-2xl text-[#47556A] dark:text-white hover:text-[#2980B9] dark:hover:text-[#2980B9]"
                width={50}
                height={50}
              />
            </Button>
          </Link>
          <Link href="https://github.com/Ary-Sakirin" passHref target="_blank">
            <Button className="p-0 bg-transparent hover:bg-transparent hidden lg:block">
              <FaGithub
                className="text-2xl text-[#47556A] dark:text-white hover:text-[#2980B9] dark:hover:text-[#2980B9]"
                width={50}
                height={50}
              />
            </Button>
          </Link>
          <Link href="https://twitter.com/Sakirin_ar" passHref target="_blank">
            <Button className="p-0 bg-transparent hover:bg-transparent hidden lg:block">
              <FaXTwitter
                className="text-2xl text-[#47556A] dark:text-white hover:text-[#2980B9] dark:hover:text-[#2980B9]"
                width={50}
                height={50}
              />
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#2980B9] to-transparent"></div>
    </div>
  );
}
