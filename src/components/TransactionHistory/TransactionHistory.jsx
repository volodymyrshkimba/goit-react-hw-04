import clsx from "clsx";
import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={clsx(css.table)}>
      <thead className={clsx(css.tableHead)}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={clsx(css.tableBody)}>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
