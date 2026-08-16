function AccountCard({ account }) {
  return (
    <div>
      <h2>{account.name}</h2>
      <p>Account No: {account.accountNumber}</p>
      <p>Balance: Rs. {account.balance}</p>
      <p>Bank Branch: {account.bankBranch}</p>
      <p>Account Type: {account.accountType}</p>
      <p>IBAN: {account.IBAN}</p>
      <p>Status: {account.status}</p>
      <p>Currency: {account.currency}</p>
    </div>
  );
}

export default AccountCard;