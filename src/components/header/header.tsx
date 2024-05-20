/** @format */
"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { IoCloseOutline } from "react-icons/io5";

export default function Header() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      label: "Início",
      link: "/"
    },
    {
      label: "Serviços",
      link: "/servicos"
    },
    {
      label: "Sobre",
      link: "/Sobre"
    },
    {
      label: "Contato",
      link: "/contato"
    },
  ];

  return (
    <header>
      <nav className="flex fixed w-full mx-auto border-b bg-backgroud shadow-2xl z-50 justify-between sm:px-3 md:px-1 xl:px-36 px-4 items-center py-6">
        {/* Logo para Desktop */}
        <Link href={"/"} className="flex justify-start items-center text-3xl gap-2">
          <img src="./logo.png" alt="logo" className="w-20 h-11 block" />
          <h1 className="sm:flex font-bold text-4xl hidden">KAOS RECORDS</h1>
        </Link>
        {/* Links de Navegação e Ícone do Menu para Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="font-medium duration-300 hover:text-zinc-700"
              href={d.link}
            >
              {d.label}
            </Link>
          ))}
        </div>

        {/* Logo e Ícone do Menu para Mobile */}
        <section className="lg:hidden flex items-center gap-4 ml-auto">
          <FiMenu
            onClick={() => setMenu(true)}
            className="text-3xl cursor-pointer"
          />
        </section>

        {/* Sidebar do Menu Mobile */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-texto bg-backgroud justify-between 
          flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
            <div className="flex flex-col gap-8">
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className="mt-0 mb-8 text-3xl cursor-pointer self-end"
              />

              {navlinks.map((d, i) => (
                <Link key={i} className="font-bold" href={d.link}>
                  {d.label}

                </Link>

              ))}
            </div>
            <div className="">
              <h1 className="mb-5 text-center text-xl">redes sociais</h1>
              <div className="flex mb-20 text-3xl justify-between">
                <FaYoutube className="hover:text-red-500 duration-500" />
                <FaInstagram className="hover:text-purple-500 duration-500" /> 
                <SiTiktok className="hover:text-zinc-900 duration-500" /> 
              </div>

            </div>
          </section>
        </div>
      </nav>
    </header>
  );
}