// Ф-ция для сокращения значения числа до двух цифр после запятой без округления

export const UpdatePrice = (e: number): number => {
  let firstNumber = Math.floor(e * 100);
  return Math.floor(firstNumber * 10) / 1000;
};

// Ф-ция для сокращения текста до 22 символов

export const UpdateText = (e: string): string => {
  let correctText: string = e;
  if (e.length > 22) {
    correctText = e.substring(0, 22) + "...";
  }
  return correctText;
};

// Ф-ция для деления числа по разрядам

export const formatCurrency = (amount: number | string): string => {
  const roundedAmount = Math.floor(Number(amount));
  const formattedAmount = roundedAmount.toLocaleString();
  const formattedCurrency = formattedAmount;
  return formattedCurrency;
};
