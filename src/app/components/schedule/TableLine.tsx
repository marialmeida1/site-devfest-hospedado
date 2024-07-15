import React from "react";
import TableCel from "./TableCel";

interface TableRow {
  hourly: string;
  td: number;
  colspan: number;
  div: number;
}

const lines: TableRow[] = [
  { hourly: "8:00", td: 2, colspan: 4, div: 2 },
  { hourly: "9:00", td: 2, colspan: 4, div: 2 },
  { hourly: "10:00", td: 5, colspan: 0, div: 1 },
  { hourly: "10:50", td: 5, colspan: 0, div: 1 },
  { hourly: "12:00", td: 2, colspan: 4, div: 1 },
  { hourly: "13:20", td: 5, colspan: 0, div: 1 },
  { hourly: "15:00", td: 5, colspan: 0, div: 1 },
  { hourly: "15:50", td: 2, colspan: 4, div: 1 },
  { hourly: "17:00", td: 2, colspan: 4, div: 2 },
];

interface Props {
  lineSelect: number;
}

export default function TableLine({ lineSelect }: Props) {
  return (
    <>
      {lineSelect === 0
        ? lines.map((el, i) => (
            <tr key={i}>
              {/* Web */}
              {Array.from({ length: el.td }).map((_, j) =>
                j >= 1 ? (
                  <td
                    key={j}
                    className="py-10 h-80 px-2 text-left border border-zinc-300 space-y-4 hidden md:table-cell"
                    colSpan={el.colspan}
                  >
                    {Array.from({ length: el.div }).map((_, k) => (
                      <TableCel
                        key={`line-${i}-col-${j}-rep-${k}`}
                        id_line={i + 1}
                        id_col={j}
                        rep={k + 1}
                        trail={0}
                      />
                    ))}
                  </td>
                ) : (
                  <td
                    key={`line-${i}-hourly`}
                    className="py-8 px-2 text-left border border-zinc-300 hidden md:table-cell"
                  >
                    {el.hourly}
                  </td>
                )
              )}

              {/* Mobile */}
              <td
                key={el.td}
                className="py-2 md:py-10 md:px-2 text-left space-y-4 md:hidden"
                colSpan={el.colspan}
              >
                {Array.from({ length: el.div }).map((_, k) =>
                  el.td > 2 ? (
                    Array.from({ length: el.td }).map((_, j) => (
                      <TableCel
                        key={`line-${i}-col-${j}-rep-${k}`}
                        id_line={i + 1}
                        id_col={j}
                        rep={k + 1}
                        trail={j}
                      />
                    ))
                  ) : (
                    <TableCel
                      key={`line-${i}-col-${1}-rep-${k}`}
                      id_line={i + 1}
                      id_col={1}
                      rep={k + 1}
                      trail={5}
                    />
                  )
                )}
              </td>
            </tr>
          ))
        : lines.map((el, i) =>
            lineSelect === i + 1 ? (
              <tr key={i} className="mb-4 border-b-2">
                {/* Web */}
                {Array.from({ length: el.td }).map((_, j) =>
                  j >= 1 ? (
                    <td
                      key={j}
                      className="py-10 h-80 px-2 text-left border border-zinc-300 space-y-4 hidden md:table-cell"
                      colSpan={el.colspan}
                    >
                      {Array.from({ length: el.div }).map((_, k) => (
                        <TableCel
                          key={`line-${i}-col-${j}-rep-${k}`}
                          id_line={i + 1}
                          id_col={j}
                          rep={k + 1}
                          trail={0}
                        />
                      ))}
                    </td>
                  ) : (
                    <td
                      key={`line-${i}-hourly`}
                      className="py-8 px-2 text-left border border-zinc-300 hidden md:table-cell"
                    >
                      {el.hourly}
                    </td>
                  )
                )}

                {/* Mobile */}
                <td
                  key={el.td}
                  className="py-2 md:py-10 md:px-2 text-left space-y-4 md:hidden"
                  colSpan={el.colspan}
                >
                  {Array.from({ length: el.div }).map((_, k) =>
                    el.td > 2 ? (
                      Array.from({ length: el.td }).map((_, j) => (
                        <TableCel
                          key={`line-${i}-col-${j}-rep-${k}`}
                          id_line={i + 1}
                          id_col={j}
                          rep={k + 1}
                          trail={j}
                        />
                      ))
                    ) : (
                      <TableCel
                        key={`line-${i}-col-${1}-rep-${k}`}
                        id_line={i + 1}
                        id_col={1}
                        rep={k + 1}
                        trail={5}
                      />
                    )
                  )}
                </td>
              </tr>
            ) : null
          )}
    </>
  );
}
