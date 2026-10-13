const flights = [
  { id: 1, flightNumber: "AV-101", departure: "Минск",  arrival: "Варшава", price: 250 },
  { id: 2, flightNumber: "AV-202", departure: "Минск",  arrival: "Берлин",  price: 320 },
  { id: 3, flightNumber: "AV-303", departure: "Гомель", arrival: "Москва",  price: 180 },
];

export async function GET() {
  return Response.json(flights);
}