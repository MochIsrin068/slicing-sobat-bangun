type TpropsButton = {
  label: string;
  variant: "primary" | "secondary" | "outline";
  customClass?: string;
};

export default function Button({ label, variant, customClass }: TpropsButton) {
  const buttonStyles =
    variant === "outline"
      ? "border border-red-500 text-red-500 hover:border-red-600 hover:text-red-600"
      : variant === "secondary"
      ? "text-black hover:text-red-500"
      : "text-white bg-red-500 hover:bg-red-600";

  return (
    <>
      <button
        className={`rounded-md py-2 px-4 text-center font-semibold text-xs lg:text-base ${buttonStyles} ${customClass}`}
      >
        {label}
      </button>
    </>
  );
}
