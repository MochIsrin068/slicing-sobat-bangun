"use client";
import Image from "next/image";
import Carousel from "./components/Carousel";
import ItemCard from "./components/ItemCard";
import ItemUtilityInfo from "./components/ItemUtilityInfo";
import ItemPriceInfo from "./components/ItemPriceInfo";
import TestimoniItem from "./components/ItemTestimoni";
import { designs, rooms, testimoni, utlities } from "./lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main>
      <Carousel />
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 my-5 mx-4 lg:mx-16 gap-x-9"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="col-span-1 lg:col-span-2">
          <div className="text-zinc-900 text-xl lg:text-2xl font-semibold leading-7">
            Tampilan Rumah
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4 mt-4">
            {rooms.map((room, index) => (
              <ItemCard
                key={index}
                image={room.image}
                title={room.title}
                subtitle={room.subtitle}
              />
            ))}
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <ItemCard
            title="Omah Apik 3"
            subtitle="Studio SAe"
            studioLogo="/images/studio.svg"
          >
            <div className="flex mt-2 lg:mt-4">
              <div className="mr-5">
                <div className="text-neutral-600 text-xs lg:text-sm font-normal leading-tight mt-2 lg:mt-4">
                  Jenis Rumah
                </div>
                <div className="text-neutral-600 text-xs lg:text-sm font-normal leading-tight mt-2 lg:mt-4">
                  Tipe Design
                </div>
              </div>
              <div>
                <div className="text-black text-xs lg:text-sm font-normal leading-tight mt-2 lg:mt-4">
                  Scandinavian
                </div>
                <div className="flex items-center mt-2 lg:mt-4">
                  <Image
                    src="/icons/check.svg"
                    alt="House"
                    width={16}
                    height={16}
                    className="mr-1 lg:mr-2 lg:h-auto lg:w-auto w-[14px] h-[14px]"
                  />
                  <div className="text-red-500 text-xs lg:text-sm font-normal leading-tight">
                    Dapat Dimodifikasi
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[1px] bg-gray-200 my-4" />
            <div className="flex justify-between">
              {utlities.map((utlity, index) => (
                <ItemUtilityInfo
                  key={index}
                  title={utlity.title}
                  description={utlity.description}
                  image={utlity.image}
                />
              ))}
            </div>
            <div className="h-[1px] bg-gray-200 my-4" />
            <ItemPriceInfo
              price={designs[0].price}
              minimumConstructionPrice={designs[0].minimumConstructionPrice}
              buttonLabel="Konsultasi Sekarang"
            />
          </ItemCard>
          <div className="mt-4 lg:mt-8">
            <div className="text-zinc-900 text-xl lg:text-2xl font-semibold leading-7">
              Testimoni
            </div>
            <div className="mt-4">
              {testimoni.map((item, index) => (
                <TestimoniItem
                  key={index}
                  name={item.name}
                  comment={item.comment}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="mt-5 lg:mt-[135px] mb-5 mx-4 lg:mx-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        ref={ref}
      >
        <div className="text-zinc-900 text-xl lg:text-2xl font-semibold leading-7">
          Desain Lainnya oleh Studio SAe
        </div>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {designs.map((item, index) => (
            <ItemCard
              key={index}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              studioLogo={item.studioLogo}
              model={item.model}
            >
              <div className="flex justify-between mt-4">
                {utlities.map((utlity, index) => (
                  <ItemUtilityInfo
                    key={index}
                    title={utlity.title}
                    description={utlity.description}
                    image={utlity.image}
                  />
                ))}
              </div>
              <div className="h-[1px] bg-gray-200 my-4" />
              <ItemPriceInfo
                price={item.price}
                minimumConstructionPrice={item.minimumConstructionPrice}
                buttonLabel="Lihat Detail"
                buttonVariant="outline"
              />
            </ItemCard>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
