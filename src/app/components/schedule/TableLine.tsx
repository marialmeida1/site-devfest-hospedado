import React from "react";
import TableCel from "./TableCel";

interface TableRow {
  hourly: string;
  td: number;
  colspan: number;
  div: number;
}

const lines: TableRow[] = [
  {
    hourly: "8:00",
    td: 2,
    colspan: 4,
    div: 2,
  },
  {
    hourly: "9:00",
    td: 2,
    colspan: 4,
    div: 2,
  },
  {
    hourly: "10:00",
    td: 5,
    colspan: 0,
    div: 1,
  },
  {
    hourly: "10:50",
    td: 5,
    colspan: 0,
    div: 1,
  },
  {
    hourly: "12:00",
    td: 2,
    colspan: 4,
    div: 1,
  },
  {
    hourly: "13:20",
    td: 5,
    colspan: 0,
    div: 1,
  },
  {
    hourly: "15:00",
    td: 5,
    colspan: 0,
    div: 1,
  },
  {
    hourly: "15:50",
    td: 2,
    colspan: 4,
    div: 1,
  },
  {
    hourly: "17:00",
    td: 2,
    colspan: 4,
    div: 2,
  },
];

export default function TableLine() {
  return (
    <>
      {lines.map((el, i) => (
        <tr key={i}>
          {Array.from({ length: el.td }).map((_, j) =>
            j >= 1 ? (
              <td
                key={j}
                className="py-10 h-80 px-2 text-left border border-zinc-300 space-y-4"
                colSpan={el.colspan}
              >
                {Array.from({ length: el.div }).map((_, k) => (
                  <TableCel
                    key={`line-${i}-col-${j}-rep-${k}`}
                    id_line={i + 1}
                    id_col={j}
                    rep={k + 1}
                  />
                ))}
              </td>
            ) : (
              <td
                key={`line-${i}-hourly`}
                className="py-8 px-2 text-left border border-zinc-300"
              >
                {el.hourly}
              </td>
            )
          )}
        </tr>
      ))}
    </>
  );
}
