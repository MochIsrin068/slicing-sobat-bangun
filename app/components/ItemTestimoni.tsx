import Image from "next/image";

type TPropsItemTestimoni = {
  name: string;
  comment: string;
  rating: number;
};

export default function ItemTestimoni({
  comment,
  name,
  rating,
}: TPropsItemTestimoni) {
  return (
    <>
      <div className="flex mb-4 items-start">
        <Image
          src="/icons/user-photo-placeholder.svg"
          alt="User Photo"
          height={37}
          width={37}
          className="w-[32px] h-[32px] lg:w-auto lg:h-auto"
        />
        <div className="ml-2 lg:ml-4">
          <div className="flex items-center">
            <span className="font-bold text-sm lg:text-base text-black">
              {name}
            </span>
            <div className="w-[1px] h-4 bg-[#C5C7D0] mx-2" />
            <Image src="/icons/star.svg" alt="Star" height={13} width={13} />
            <span className="ml-1 lg:ml-2 text-xs lg:text-sm text-[#4A5568]">
              {rating}
            </span>
          </div>
          <div className="mt-1 lg:mt-2 text-[#4A5568] text-xs lg:text-base">
            {comment}
          </div>
        </div>
      </div>
    </>
  );
}
