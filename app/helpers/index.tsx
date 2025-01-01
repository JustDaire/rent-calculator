export const calculateRent = (
  rent: number,
  total: number,
  items: { salary: number }[]
) => {
  const output = [];
  const share = rent / total;
  for (let i = 0; i < items.length; i++) {
    const amountOwed = items[i].salary * share;
    output.push(`Roommate ${i + 1} owes €${amountOwed.toFixed(2)}`);
  }
  return output;
};
