import { convertToCurrencyFormatID } from "../utils/currency";
import Button from "./Button";

type TPropsItemPriceInfo = {
  price: number;
  minimumConstructionPrice: number;
  buttonLabel: string;
  buttonVariant?: "primary" | "secondary" | "outline";
};

export default function ItemPriceInfo({
  price,
  minimumConstructionPrice,
  buttonVariant = "primary",
  buttonLabel,
}: TPropsItemPriceInfo) {
  return (
    <>
      <div>
        <p className="text-black text-xs lg:text-sm">Harga Design</p>
        <h2 className="text-black text-2xl lg:text-[32px] font-semibold leading-10 mt-1">
          {convertToCurrencyFormatID(price)}
        </h2>
        <div className="text-zinc-500 text-xs lg:text-sm font-normal leading-tight mt-1 lg:mt-2">
          Harga konstruksi mulai dari{" "}
          {convertToCurrencyFormatID(minimumConstructionPrice)}
        </div>
        <Button
          label={buttonLabel}
          variant={buttonVariant}
          customClass="w-full py-10 lg:py-[14px] text-base mt-4"
        />
      </div>
    </>
  );
}
