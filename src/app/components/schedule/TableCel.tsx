import React, { useEffect, useState } from "react";

import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LevelButton from "./LevelButton";
import InfoModal from "../common/Modal";
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
  // Horários antes de 13:20 permanecem os mesmos
  {
    id_line: 1,
    id_col: 1,
    hourly_start: "8:00",
    hourly_end: "8:50",
    name: "Credenciamento + Networking",
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

  // Horários ajustados a partir de 13:20
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
    hourly_start: "14:10",
    hourly_end: "15:00",
    name: "Palestra 1",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 7,
    id_col: 2,
    hourly_start: "14:10",
    hourly_end: "15:00",
    name: "Palestra 2",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 7,
    id_col: 3,
    hourly_start: "14:10",
    hourly_end: "15:00",
    name: "Palestra 3",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 7,
    id_col: 4,
    hourly_start: "14:10",
    hourly_end: "15:00",
    name: "Workshop 2",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 8,
    id_col: 1,
    hourly_start: "15:00",
    hourly_end: "15:50",
    name: "Palestra 1",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 8,
    id_col: 2,
    hourly_start: "15:00",
    hourly_end: "15:50",
    name: "Palestra 2",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 8,
    id_col: 3,
    hourly_start: "15:00",
    hourly_end: "15:50",
    name: "Palestra 3",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 8,
    id_col: 4,
    hourly_start: "15:00",
    hourly_end: "15:50",
    name: "Workshop 2",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 9,
    id_col: 1,
    hourly_start: "15:50",
    hourly_end: "16:10",
    name: "Palestra Encerramento",
    speaker: "Palestrante",
    level: "Iniciante",
  },
  {
    id_line: 10,
    id_col: 1,
    hourly_start: "16:10",
    hourly_end: "18:00",
    name: "Encerramento + Sorteio + Foto Oficial + Happy Hour",
    speaker: "Palestrante",
    level: "Iniciante",
  },
];

const trails: string[] = [
  "Trilha Dev",
  "Trilha IA",
  "Trilha Carreira",
  "Workshop",
  "Sem categoria",
];

interface Props {
  id_line: number;
  id_col: number;
  rep: number;
  trail: number;
}

export default function TableCel({ id_line, id_col, rep, trail }: Props) {

  const [selectedInfo, setSelectedInfo] = useState<TableInfo | null>(null);

  const openModal = (info: TableInfo) => {
    setSelectedInfo(info);
  };

  const closeModal = () => {
    setSelectedInfo(null);
  };

  return (
    <>
      {infos
        .filter(
          (el) => el.id_line === id_line && el.id_col === id_col && rep === 1
        )
        .map((el, i) => (
          <div
            key={i}
            className="p-4 bg-zinc-50 rounded-md flex flex-col items-center gap-2 shadow border"
          >
            {trails[trail - 1] && trail !== 5 && (
              <div className="font-black rounded text-zinc-600">
                {trails[trail - 1]}
              </div>
            )}
            <div className="md:hidden w-fit flex flex-row text-xs text-zinc-800 border border-zinc-800 rounded-full px-2 py-0.5">
              {el.hourly_start} - {el.hourly_end}
            </div>
            <div className="space-y-1 w-fit flex flex-col items-center">
              <h2 className="text-xs text-zinc-700">{el.speaker}</h2>
              <h1 className="text-sm font-bold">{el.name}</h1>
            </div>
            {/*<div className="mt-4 flex flex-row justify-between">
              {el.level && <LevelButton level={el.level} />}
              <div
                onClick={() => openModal(el)}
                className="cursor-pointer w-fit gap-1 flex flex-row items-center text-xs text-zinc-800 border border-zinc-800 rounded-full px-2 py-0.5"
              >
                <p>Info</p>
                <FontAwesomeIcon icon={faCircleInfo} className="h-3" />
              </div>
              {selectedInfo && (
                <InfoModal isOpen={!!selectedInfo} onClose={closeModal}>
                  <h1 className="text-xl font-semibold text-zinc-900">
                    {selectedInfo.name}
                  </h1>
                  <p className="text-base leading-relaxed text-zinc-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, molestias officia? Pariatur culpa vero
                    voluptatum voluptates, delectus, obcaecati totam officiis
                    itaque veniam corporis ipsum veritatis, aspernatur mollitia
                    repellat rerum explicabo.
                  </p>
                  <ul>
                    <li className="text-base leading-relaxed text-zinc-500">
                      <span className="text-base text-zinc-700 font-bold">
                        Palestrante:{" "}
                      </span>
                      {selectedInfo.speaker}
                    </li>
                    <li className="text-base leading-relaxed text-zinc-500">
                      <span className="text-base text-zinc-700 font-bold">
                        Horário Início:{" "}
                      </span>
                      {selectedInfo.hourly_start}
                    </li>
                    <li className="text-base leading-relaxed text-zinc-500">
                      <span className="text-base text-zinc-700 font-bold">
                        Horário Término:{" "}
                      </span>
                      {selectedInfo.hourly_end}
                    </li>
                    {/*<li className="text-base leading-relaxed text-zinc-500">
                      <span className="text-base text-zinc-700 font-bold">
                        Nível:{" "}
                      </span>
                      {selectedInfo.level}
                    </li>
                  </ul>
                </InfoModal>
              )}
            </div>*/}
          </div>
        ))}
    </>
  );
}
