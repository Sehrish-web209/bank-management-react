import Header from "./components/Header";
import AccountCard from "./components/AccountCard";
import AccountTable from "./components/AccountTable";
import TransactionList from "./components/TransactionList";
import ActionButtons from "./components/ActionButtons";
import { useState } from "react";
import "./style.css";
function App() {
  const [selectedAccountIndex, setSelectedAccountIndex] = useState(0);
  const [accounts, setAccounts] = useState([
    {
      name: "Sehrish",
      accountNumber: "100001",
      balance: 100000,
      bankBranch: "Main",
      accountType: "Savings",
      IBAN: "PK-BR001-100001",
      status: "Active",
      currency: "Rupees",
      transactions: [],
    },
    {
      name: "Mehwish",
      accountNumber: "100002",
      balance: 200000,
      bankBranch: "Main",
      accountType: "Savings",
      IBAN: "PK-BR001-100002",
      status: "Active",
      currency: "Rupees",
      transactions: [],
    },
    {
    name: "Ali",
    accountNumber: "100003",
    balance: 150000,
    bankBranch: "Main",
    accountType: "Savings",
    IBAN: "PK-BR001-100003",
    status: "Active",
    currency: "Rupees",
    transactions: [],
  },
    {
      name: "Ayesha",
      accountNumber: "100004",
      balance: 250000,
       bankBranch: "Main",
      accountType: "Savings",
      IBAN: "PK-BR001-100004",
      status: "Active",
      currency: "Rupees",
      transactions: [],
    },
  ]);
  const [showTransactions, setShowTransactions] = useState(false);
  const handleShowTransactions = () => {
    setShowTransactions(true);
  };
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [transferTo, setTransferTo] = useState("");

    const handleCredit = () => {
    if (!amount || Number(amount) <= 0) {
    setError("Please enter a valid amount");
    return;
    }
    setError("");

    setAccounts(
    accounts.map((account, index) => {
      if (index === selectedAccountIndex) {
        return{...account,
        balance: account.balance+Number(amount),
        transactions: [
      ...account.transactions,
      {
        type: "Credit",
        amount: Number(amount),
        date: new Date(),
      },
      ], 
    };
  }
     return account;
    })
  );
  setAmount("");
};
  const handleDebit = () => {
  if (!amount || Number(amount) <= 0) {
  setError("Please enter a valid amount");
  return;
  }
  setError("");
  if (Number(amount) > accounts[selectedAccountIndex].balance) {
  setError("Insufficient balance");
  return;
  }
  setAccounts(
    accounts.map((account, index) => {
      if (index === selectedAccountIndex) {
        return {
        ...account,
        balance: account.balance-Number(amount),
        transactions: [
        ...account.transactions,
        {
          type: "Debit",
          amount: Number(amount),
          date: new Date(),
        },
      ],
      };
      }
      return account;
    })
  );
  setAmount("");
};
  const handleTransfer = () => {
  if (!transferTo) {
    setError("Please select an account to transfer to");
    return;
  }

  if (!amount || Number(amount) <= 0) {
    setError("Please enter a valid amount");
    return;
  }

  if (Number(amount) > accounts[selectedAccountIndex].balance) {
    setError("Insufficient balance");
    return;
  }

  const transferAmount = Number(amount);
  const receiverIndex = Number(transferTo);

  setAccounts(
    accounts.map((account, index) => {
      if (index === selectedAccountIndex) {
        return {
          ...account,
          balance: account.balance - transferAmount,
          transactions: [
            ...account.transactions,
            {
              type: "Transfer Sent",
              amount: transferAmount,
              date: new Date(),
            },
          ],
        };
      }

      if (index === receiverIndex) {
        return {
          ...account,
          balance: account.balance + transferAmount,
          transactions: [
            ...account.transactions,
            {
              type: "Transfer Received",
              amount: transferAmount,
              date: new Date(),
            },
          ],
        };
      }

      return account;
    })
  );

  setAmount("");
  setTransferTo("");
  setError("");
};
  return (
    <>
    <Header />

  <AccountCard account={accounts[selectedAccountIndex]} />
  <div className="accounts-heading">
  <div>
    <h2>Accounts Overview</h2>
    <p>Manage and view your accounts</p>
  </div>
  </div>
  <AccountTable 
  accounts={accounts} 
  onAccountSelect={(index) => {
  setSelectedAccountIndex(index);
  setShowTransactions(false);
  setTransferTo("");
  }}
  />  

  <div className="quick-actions">
    <h2>Quick Actions</h2> 
    <div className="transfer-section">
    <label>Transfer To</label>

    <select
      value={transferTo}
      onChange={(e) => setTransferTo(e.target.value)} >
      <option value="">Select Account</option>

      {accounts.map((account, index) => (
        index !== selectedAccountIndex && (
          <option key={account.accountNumber} value={index}>
            {account.name} - {account.accountNumber}
          </option>
        )
      ))}
    </select>
  </div>
    <div className="amount-section">
    <label>Transaction Amount</label>
    <input
    type="number"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    placeholder="Enter amount"
    />
    </div>
    {error && <p>{error}</p>}
    <ActionButtons
    onCredit={handleCredit}
    onDebit={handleDebit}
    onTransfer={handleTransfer}
    onTransactions={handleShowTransactions}
  />
  </div>
      
  {showTransactions && (
  <TransactionList 
  transactions={accounts[selectedAccountIndex].transactions} />
  )}
  </>
  );
}

export default App;