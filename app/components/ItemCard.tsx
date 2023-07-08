import Image from "next/image";
import { ReactNode } from "react";

type TPropsItemCard = {
  children?: ReactNode;
  image?: string;
  title: string;
  subtitle: string;
  studioLogo?: string;
  model?: string;
};

export default function ItemCard({
  children,
  image,
  subtitle,
  title,
  model,
  studioLogo,
}: TPropsItemCard) {
  return (
    <>
      <div className="p-4 border border-gray-200 rounded-lg lg:rounded-2xl hover:shadow-lg">
        <div>
          {image && (
            <div
              className="h-[160px] lg:h-[201px] rounded mb-3"
              style={{
                background: `url("${image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          )}
          <div className="flex items-center">
            <h2 className="text-gray-900 lg:text-[20px] font-bold leading-normal">
              {title}
            </h2>
            {model && (
              <div className="lg:h-7 px-2 lg:px-3 py-1 bg-zinc-100 rounded-xl lg:rounded-2xl ml-2 border justify-start items-start gap-2.5 inline-flex">
                <div className="text-black text-xs lg:text-sm font-normal leading-tight">
                  {model}
                </div>
              </div>
            )}
          </div>
          <div className="flex mt-1 lg;mt-3 items-center">
            {studioLogo && (
              <Image
                src={studioLogo}
                alt="Studio"
                width={28}
                height={28}
                className="rounded-full border border-gray-200 mr-3 lg:w-auto lg:h-auto h-[24px] w-[24px]"
              />
            )}
            <div className="text-black text-xs lg:text-sm font-normal leading-tight">
              {subtitle}
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
