import React from "react";
import LevelButton from "./LevelButton";

interface TableInfo {
  id_line: number;
  id_col: number;
  hourly_start: string;
  hourly_end: string;
  name: string;
  speaker: string;
  level: string;
}

const infos: TableInfo[] = [
  {
    id_line: 1,
    id_col: 1,
    hourly_start: "8:00",
    hourly_end: "8:50",
    name: "Credenciamento + Coffe",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 1,
    id_col: 1,
    hourly_start: "8:50",
    hourly_end: "9:00",
    name: "Abertura",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 2,
    id_col: 1,
    hourly_start: "9:00",
    hourly_end: "9:50",
    name: "Palestra Abertura",
    speaker: "Palestrante",
    level: "Intermediário",
  },
  {
    id_line: 2,
    id_col: 1,
    hourly_start: "9:50",
    hourly_end: "10:00",
    name: "Tempo de Transição",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 3,
    id_col: 1,
    hourly_start: "10:00",
    hourly_end: "10:50",
    name: "Palestra 1",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 3,
    id_col: 2,
    hourly_start: "10:00",
    hourly_end: "10:50",
    name: "Palestra 2",
    speaker: "Palestrante",
    level: "Avançado",
  },
  {
    id_line: 3,
    id_col: 3,
    hourly_start: "10:00",
    hourly_end: "10:50",
    name: "Palestra 3",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 3,
    id_col: 4,
    hourly_start: "10:00",
    hourly_end: "10:50",
    name: "Workshop 1",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 4,
    id_col: 1,
    hourly_start: "10:50",
    hourly_end: "11:40",
    name: "Palestra 1",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 4,
    id_col: 2,
    hourly_start: "10:50",
    hourly_end: "11:40",
    name: "Palestra 2",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 4,
    id_col: 3,
    hourly_start: "10:50",
    hourly_end: "11:40",
    name: "Palestra 3",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 4,
    id_col: 4,
    hourly_start: "10:50",
    hourly_end: "11:40",
    name: "Workshop 1",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 5,
    id_col: 1,
    hourly_start: "12:00",
    hourly_end: "13:20",
    name: "Almoço",
    speaker: "Palestrante",
    level: "",
  },
  {
    id_line: 6,
    id_col: 1,
    hourly_start: "13:20",
    hourly_end: "14:10",
    name: "Palestra 1",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 6,
    id_col: 2,
    hourly_start: "13:20",
    hourly_end: "14:10",
    name: "Palestra 2",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 6,
    id_col: 3,
    hourly_start: "13:20",
    hourly_end: "14:10",
    name: "Palestra 3",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 6,
    id_col: 4,
    hourly_start: "13:20",
    hourly_end: "14:10",
    name: "Workshop 2",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 7,
    id_col: 1,
    hourly_start: "15:00",
    hourly_end: "15:50",
    name: "Palestra 1",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 7,
    id_col: 2,
    hourly_start: "15:00",
    hourly_end: "15:50",
    name: "Palestra 2",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 7,
    id_col: 3,
    hourly_start: "15:00",
    hourly_end: "15:50",
    name: "Palestra 3",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 7,
    id_col: 4,
    hourly_start: "15:00",
    hourly_end: "15:50",
    name: "Workshop 2",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 8,
    id_col: 1,
    hourly_start: "15:50",
    hourly_end: "16:40",
    name: "Palestra Encerramento",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 9,
    id_col: 1,
    hourly_start: "17:00",
    hourly_end: "17:20",
    name: "Encerramento + Sorteio + Foto Oficial",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 9,
    id_col: 1,
    hourly_start: "17:20",
    hourly_end: "18:30",
    name: "Happy Hour",
    speaker: "Palestrante",
    level: "Iniciante",
  },
];

interface Props {
  id_line: number;
  id_col: number;
  rep: number;
}

export default function TableCel({ id_line, id_col, rep }: Props) {
  return (
    <>
      {infos
        .filter(
          (el) => el.id_line === id_line && el.id_col === id_col && rep === 1
        )
        .map((el, i) => (
          <div key={i} className="p-4 bg-zinc-50 rounded-md flex flex-col gap-2 shadow">
            <div className="w-fit flex flex-row text-xs text-zinc-800 border border-zinc-800 rounded-full px-2 py-0.5">
              {el.hourly_start} - {el.hourly_end}
            </div>
            <h2 className="text-sm">{el.name}</h2>
            <h1 className="text-sm font-bold">{el.speaker}</h1>

            <div className="mt-4 flex flex-row justify-between">
              {el.level ? (<LevelButton level={el.level}/>) : null}
              <div className="w-fit flex flex-row text-xs text-zinc-800 border border-zinc-800 rounded-full px-2 py-0.5">
                Info
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
