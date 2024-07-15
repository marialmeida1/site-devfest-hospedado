"use client";
import { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import Table from "../components/schedule/Table";

const hourly: string[] = [
  "8:00",
  "9:00",
  "10:00",
  "10:50",
  "12:00",
  "13:20",
  "15:00",
  "15:50",
  "17:00",
];

export default function Schedule() {
  const [selectedValueHourly, setSelectedValueHourly] = useState<number>(0);

  const handleChangeHourly = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValueHourly(Number(event.target.value));
  };

  return (
    <section className="container md:py-8 min-h-screen">
      <SectionTitle align="text-center">Programação</SectionTitle>


      <div className="py-2 w-full md:hidden flex flex-row gap-2">
        <select
          name="hourly"
          value={selectedValueHourly}
          onChange={handleChangeHourly}
          className="px-2 py-1.5 w-full text-zinc-600 text-sm bg-zinc-50 border border-zinc-300 rounded "
        >
          <option value="" disabled hidden>
            Horário
          </option>
          <option value="0">Todos</option>
          {hourly.map((el, i) => (
            <option key={i + 1} value={i + 1}>
              {el}
            </option>
          ))}
        </select>

      </div>

      <Table
        selectHourly={selectedValueHourly}
      />
    </section>
  );
}
