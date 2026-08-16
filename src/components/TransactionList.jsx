function TransactionList({ transactions }) {
  return (
    <ul>
      {transactions.map((transaction, index) => (
        <li key={index}>
          {transaction.type} - Rs. {transaction.amount}
        </li>
      ))}
    </ul>
  );
}

export default TransactionList;