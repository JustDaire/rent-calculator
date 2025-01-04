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

export const RentSplit: React.FC<{ items: string[] }> = ({ items }) => {
  const itemsValid = items.length > 0;
  return (
    itemsValid && (
      <div className="self-center min-h-full w-full m-8 p-4 rounded-md">
        {items.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    )
  );
};
