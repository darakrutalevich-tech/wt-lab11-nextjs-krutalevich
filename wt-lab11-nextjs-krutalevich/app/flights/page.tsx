type Flight = {
  id: number;
  flightNumber: string;
  departure: string;
  arrival: string;
  price: number;
};

async function getFlights(): Promise<Flight[]> {
  const response = await fetch("http://localhost:3000/api/flights", {
    cache: "no-store",
  });
  return response.json();
}

export default async function Flights() {
  const flights = await getFlights();

  return (
    <main>
      <h1>Рейсы</h1>
      {flights.map((flight) => (
        <article key={flight.id}>
          <h2>{flight.flightNumber}</h2>
          <p>
            {flight.departure} → {flight.arrival}
          </p>
          <p>Цена: {flight.price} BYN</p>
        </article>
      ))}
    </main>
  );
}