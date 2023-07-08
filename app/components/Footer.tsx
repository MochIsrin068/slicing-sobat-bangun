import Image from "next/image";
import React from "react";
import ItemSocialMedia from "./ItemSocialMedia";
import ItemMedia from "./ItemMedia";
import Link from "next/link";
import { media } from "../lib/data";

export default function Footer() {
  return (
    <>
      <div className="py-[39px] px-4 lg:px-16 bg-[#012846] text-white">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <Link href="/">
              <Image
                src="/logos/sobat-bangun-white.svg"
                width={169}
                height={47}
                alt="Logo"
              />
            </Link>
            <div className="mt-4 w-full lg:w-10/12">
              <div className="text-white text-xs lg:text-base font-normal leading-normal">
                SobatBangun adalah platform digital dari SIG yang bergerak
                dengan misi mengembangkan proses pembangunan dan renovasi rumah
                secara lebih baik serta berkelanjutan.
              </div>
              <div className="flex items-center cursor-pointer mt-3">
                <Image
                  src="/icons/email.svg"
                  width={24}
                  height={24}
                  alt="Logo"
                  className="lg:w-auto lg:h-auto w-[20px] h-[20px]"
                />
                <div className="underline text-xs lg:text-base ml-2">
                  sobat@sobatbangun.com
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="leading-snug text-sm lg:text-base">
                Sosial Media :
              </div>
              <div className="flex mt-4">
                <ItemSocialMedia
                  data={{
                    image: "/logos/instagram.svg",
                    title: "Instagram",
                  }}
                  customClass="!bg-slate-800 mr-2 lg:mr-5"
                />
                <ItemSocialMedia
                  data={{
                    image: "/logos/facebook.svg",
                    title: "Facebook",
                  }}
                  customClass="mr-2 lg:mr-5 p-5"
                />
                <ItemSocialMedia
                  data={{
                    image: "/logos/youtube.svg",
                    title: "Youtube",
                  }}
                  customClass="mr-2 lg:mr-5"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex lg:flex-row flex-col">
            <div className="w-1/2 flex-col justify-start items-start gap-6 inline-flex lg:mt-0 mt-5">
              <div className="self-stretch h-4 lg:h-[21px] text-white text-base lg:text-[20px] font-bold leading-loose">
                Produk & Layanan
              </div>
              <div className="flex-col justify-start items-start gap-1 lg:gap-2 flex">
                <div className=" lg:leading-9 cursor-pointer text-sm lg:tex-base hover:text-red-500">
                  Renovasi
                </div>
                <div className=" lg:leading-9 cursor-pointer text-sm lg:tex-base hover:text-red-500">
                  Bangun Rumah
                </div>
                <div className=" lg:leading-9 cursor-pointer text-sm lg:tex-base hover:text-red-500">
                  Layanan Desain
                </div>
                <div className=" lg:leading-9 cursor-pointer text-sm lg:tex-base hover:text-red-500">
                  Teknologi Tambahan
                </div>
                <div className=" lg:leading-9 cursor-pointer text-sm lg:tex-base hover:text-red-500">
                  Beli Material
                </div>
              </div>
            </div>
            <div className="w-1/2 flex-col justify-start items-start gap-6 inline-flex lg:mt-0 mt-5">
              <div className="self-stretch h-4 lg:h-[21px] text-white text-base lg:text-[20px] font-bold leading-loose">
                Tentang Kami
              </div>
              <div className="flex-col justify-start items-start gap-1 lg:gap-2 flex">
                <div className=" lg:leading-9 cursor-pointer text-sm lg:tex-base hover:text-red-500">
                  Tentang SobatBangun
                </div>
                <div className=" lg:leading-9 cursor-pointer text-sm lg:tex-base hover:text-red-500">
                  Kebijakan Dan Privasi
                </div>
                <div className=" lg:leading-9 cursor-pointer text-sm lg:tex-base hover:text-red-500">
                  Syarat Dan Ketentuan
                </div>
                <div className=" lg:leading-9 cursor-pointer text-sm lg:tex-base hover:text-red-500">
                  FAQ
                </div>
                <div className=" lg:leading-9 cursor-pointer text-sm lg:tex-base hover:text-red-500">
                  Daftar Menjadi Mitra
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-between mt-7 lg:mt-11 flex-col lg:flex-row">
          {media.map((item, index) => (
            <ItemMedia key={index} title={item.title} medias={item.medias} />
          ))}
        </div>
        <div className="flex lg:justify-between lg:items-center mt-6 lg:mt-11 flex-col lg:flex-row h-44 lg:h-auto">
          <div className="flex items-center">
            <div className="leading-9 mr-2 lg:mr-4 text-sm lg:text-base">
              Powered by :
            </div>
            <Image
              src="/logos/sig.svg"
              width={71}
              height={41}
              alt="Logo"
              className="lg:h-auto lg:w-auto w-[61px] h-[31px]"
            />
          </div>
          <div className="text-xs lg:text-sm leading-none lg:mt-0 mt-4">
            Copyright &copy; 2023 SobatBangun. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}
