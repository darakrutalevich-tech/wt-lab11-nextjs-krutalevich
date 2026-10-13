type FlightCardProps = {
  flightNumber: string;
  departure: string;
  arrival: string;
  price: number;
};

export default function FlightCard({
  flightNumber,
  departure,
  arrival,
  price,
}: FlightCardProps) {
  return (
    <article>
      <h2>{flightNumber}</h2>
      <p>
        {departure} → {arrival}
      </p>
      <p>Цена: {price} BYN</p>
    </article>
  );
}