function TransactionList({ transactions }) {
  return (
    <ul className="transaction-list">
      {transactions.map((transaction, index) => (
        <li key={index} className="transaction-item">
          <span>{transaction.type}</span> - <span>Rs. {transaction.amount}</span> 
        </li>
      ))}
    </ul>
  );
}

export default TransactionList;