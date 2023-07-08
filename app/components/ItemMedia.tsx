import Image from "next/image";

type TPropsItemMedia = {
  title: string;
  medias: Array<{
    image: string;
    name: string;
  }>;
};

export default function ItemMedia({ medias, title }: TPropsItemMedia) {
  return (
    <>
      <div>
        <div className="font-semibold leading-tight text-sm lg:text-base">
          {title}
        </div>
        <div className="flex mt-1 lg:mt-2">
          {medias.map((media) => (
            <Image
              key={media.name}
              src={media.image}
              width={56}
              height={56}
              alt={media.name}
              className="mr-2 lg:mr-6"
            />
          ))}
        </div>
      </div>
    </>
  );
}
