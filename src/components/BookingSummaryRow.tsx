type SummaryRow = {
  id: number;
  seat: string;
  price: number;
};

export function BookingSummaryRow({ id, seat, price }: SummaryRow) {
  return (
    <li className="flex justify-between text-white-dimmed text-s">
      <div className="flex">
        <div className="w-12">{`${id}x`}</div>
        <div className="text-white">{seat}</div>
      </div>
      <div>
        <span className="text-white">{`$${price}`}</span>
        <span className="text-white-dimmed"> / each</span>
      </div>
    </li>
  );
}
