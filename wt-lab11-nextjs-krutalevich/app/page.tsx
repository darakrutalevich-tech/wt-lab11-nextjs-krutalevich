import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Авиакомпания</h1>
      <p>Обзорная работа по Next.js</p>
      <p>
        Система бронирования билетов — рейсы, направления, цены.
      </p>
      <nav>
        <ul>
          <li>
            <Link href="/about">О приложении</Link>
          </li>
          <li>
            <Link href="/flights">Рейсы</Link>
          </li>
          <li>
            <Link href="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}