import Image from "next/image";

type TPropsBreadcrumb = {
  title: string;
  isActive?: boolean;
};

export default function Breadcrumb({ title, isActive }: TPropsBreadcrumb) {
  return (
    <>
      <div className="flex items-center">
        <span
          className={`${
            isActive
              ? "text-red-500 hover:text-red-600 cursor-pointer"
              : "text-gray-500"
          } text-[10px] lg:text-sm font-bold`}
        >
          {title}
        </span>
        {isActive && (
          <Image
            src="./icons/arrow-right.svg"
            alt="arrow-right"
            height={24}
            width={24}
          />
        )}
      </div>
    </>
  );
}
