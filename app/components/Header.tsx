"use client";
import Image from "next/image";
import Button from "./Button";
import ArrowDown from "./ArrowDown";
import Breadcrumb from "./Breadcrumb";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
      <div className="mb-5">
        <motion.div
          className="py-4 px-5 lg:py-10 lg:px-[62px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row justify-between lg:items-center">
            <Link href="/">
              <Image
                src={"/logos/sobat-bangun.svg"}
                alt="Logo"
                width={147}
                height={42}
              />
            </Link>
            <div className="flex items-center mt-3 lg:mt-0">
              <div className="flex items-center justify-center mr-2 lg:mr-8 text-black hover:text-red-500">
                <Button
                  label="Tentang Kami"
                  variant="secondary"
                  customClass="truncate px-0 lg:px-4"
                />
                <div className="items-center justify-center hidden lg:flex">
                  <ArrowDown />
                </div>
              </div>
              <div className="flex items-center justify-center mr-2 lg:mr-8 text-black hover:text-red-500">
                <Button
                  label="Product & Layanan"
                  variant="secondary"
                  customClass="truncate"
                />
                <div className="items-center justify-center hidden lg:flex">
                  <ArrowDown />
                </div>
              </div>
              <Button
                label="Blog"
                variant="secondary"
                customClass="mr-2 lg:mr-8"
              />
              <Button label="FAQ" variant="secondary" />
            </div>
            <div className="flex items-center">
              <Button
                label="Daftar"
                variant="secondary"
                customClass="px-0 mr-4"
              />
              <Button label="Masuk" variant="primary" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex lg:items-center px-4 lg:px-[62px] mt-2 lg:mt-0"
        >
          <Breadcrumb title="Home" isActive />
          <Breadcrumb title="Layanan Desain" isActive />
          <Breadcrumb title="Minim Legit" />
        </motion.div>
      </div>
    </>
  );
}
