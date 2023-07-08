import Image from "next/image";

type TPropsItemSocialMedia = {
  data: {
    image: string;
    title: string;
  };
  customClass?: string;
};

export default function ItemSocialMedia({
  customClass,
  data,
}: TPropsItemSocialMedia) {
  return (
    <>
      <div
        className={`rounded-full flex items-center justify-center w-12 h-12 lg:w-[52px] lg:h-[52px] bg-white cursor-pointer ${customClass}`}
      >
        <Image
          height={24}
          width={24}
          alt={data.title}
          src={data.image}
          className="lg:h-auto lg:w-auto h-[20px] w-[20px]"
        />
      </div>
    </>
  );
}
