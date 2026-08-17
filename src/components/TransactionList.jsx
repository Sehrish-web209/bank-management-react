function TransactionList({ transactions }) {
  return (
    <>
    <div className="transaction-section">
    <h2 className="transaction-title">Recent Transactions</h2>
    <ul className="transaction-list">
      {transactions.map((transaction, index) => (
        <li key={index} className={`transaction-item ${transaction.type.toLowerCase()}`}>
          <span>{transaction.date.toLocaleString()}</span>
          <span>{transaction.type}</span>
          <span>{transaction.type === "Credit" ? "+" : "-"}Rs. {transaction.amount.toLocaleString()}</span> 
        </li>
      ))}
    </ul>
    </div>
    </>
  );
}

export default TransactionList;