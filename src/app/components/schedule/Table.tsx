import TableLine from "./TableLine";
import styles from './Table.module.css'

export default function Table() {
  return (
    <table className="w-full table-auto border-collapse border">
      <thead className={`${styles["sticky_header"]}`}>
        <tr>
          <th className="py-4 px-2 text-left">Início</th>
          <th className="py-4 px-2 text-left">Trilha Dev</th>
          <th className="py-4 px-2 text-left">Trilha IA</th>
          <th className="py-4 px-2 text-left">Sala Carreira</th>
          <th className="py-4 px-2 text-left">Workshop</th>
        </tr>
      </thead>
      <tbody>
        <TableLine />
      </tbody>
    </table>
  );
}
