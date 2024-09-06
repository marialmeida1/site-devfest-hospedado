import TableLine from "./TableLine";
import styles from './Table.module.css'

export default function Table({selectHourly}: {selectHourly: number}) {
  return (
    <table className="w-full table-auto border-collapse md:border">
      <thead className={`${styles["sticky_header"]}`}>
        <tr className="hidden md:table-row">
          <th className="py-4 px-2 text-left">Início</th>
          <th className="py-4 px-2 text-left">Trilha Dev</th>
          <th className="py-4 px-2 text-left">Trilha IA</th>
          <th className="py-4 px-2 text-left">Trilha Carreira</th>
          <th className="py-4 px-2 text-left">Workshop</th>
        </tr>
      </thead>
      <tbody className="">
        <TableLine lineSelect={selectHourly}/>
      </tbody>
    </table>
  );
}
