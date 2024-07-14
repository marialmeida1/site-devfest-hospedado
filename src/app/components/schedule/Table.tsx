import TableLine from "./TableLine";
import styles from './Table.module.css'

export default function Table() {
  return (
    <table className="w-full table-auto border-collapse border">
      <thead className={`${styles["sticky_header"]}`}>
        <tr>
          <th className="py-4 px-2 text-left">Início</th>
          <th className="py-4 px-2 text-left hidden md:table-cell">Trilha Dev</th>
          <th className="py-4 px-2 text-left hidden md:table-cell">Trilha IA</th>
          <th className="py-4 px-2 text-left hidden md:table-cell">Sala Carreira</th>
          <th className="py-4 px-2 text-left hidden md:table-cell">Workshop</th>
          <th className="py-4 px-2 text-left md:hidden" colSpan={4}>Evento</th>
        </tr>
      </thead>
      <tbody className="">
        <TableLine/>
      </tbody>
    </table>
  );
}
