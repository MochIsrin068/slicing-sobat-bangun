export const convertToCurrencyFormatID = (amount: number) => {
  const formattedAmount = amount.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  return formattedAmount;
};
