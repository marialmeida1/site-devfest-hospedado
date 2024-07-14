"use client"
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
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <section className="container py-12">
      <SectionTitle align="text-center">Programação</SectionTitle>
      <div className="py-2 w-full md">
        <select
          name="hourly"
          value={selectedValue}
          onChange={handleChange}
          className="px-2 py-1 w-full text-zinc-600 bg-zinc-100 border border-zinc-300 rounded "
        >
          <option value="" disabled hidden>
            Selecione o horário
          </option>
          {hourly.map((el, i) => (
            <option key={i} value={i}>{el}</option>
          ))}
        </select>
      </div>
      <Table />
    </section>
  );
}
