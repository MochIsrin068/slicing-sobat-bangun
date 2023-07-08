import Image from "next/image";

type TPropsItemUtilityInfo = {
  image: string;
  title: string;
  description: string;
  supText?: string;
};

export default function ItemUtilityInfo({
  image,
  description,
  title,
  supText,
}: TPropsItemUtilityInfo) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 lg:w-5 lg:h-5">
          <Image src={image} alt="Icon Detail" height={24} width={24} />
        </div>
        <div className="text-zinc-500 text-[10px] lg:text-xs font-normal leading-none mt-3">
          {title} {supText && <sup>{supText}</sup>}
        </div>
        <div className="text-black text-xs lg:text-sm mt-1 lg:mt-2 font-normal leading-tight">
          {description}
        </div>
      </div>
    </>
  );
}
