function AccountTable({ accounts, onAccountSelect}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Account Number</th>
          <th>Balance</th>
        </tr>
      </thead>

      <tbody>
        {accounts.map((account, index) => (
          <tr key={account.accountNumber}
            onClick={() => onAccountSelect(index)}
          >  
            <td>{account.name}</td>
            <td>{account.accountNumber}</td>
            <td>Rs. {account.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AccountTable;