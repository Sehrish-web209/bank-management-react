import Header from "./components/Header";
import AccountCard from "./components/AccountCard";
import AccountTable from "./components/AccountTable";
import TransactionList from "./components/TransactionList";
import ActionButtons from "./components/ActionButtons";
import { useState } from "react";
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
        },
      ],
      };
      }
      return account;
    })
  );
  setAmount("");
};
  return (
    <>
      <Header />

      <AccountCard account={accounts[selectedAccountIndex]} />
     
    <input
    type="number"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    placeholder="Enter amount"
    />
    {error && <p>{error}</p>}
      <AccountTable 
      accounts={accounts} 
      onAccountSelect={(index) => {
      setSelectedAccountIndex(index);
      setShowTransactions(false);
  }}
      />  
      
      {showTransactions && (
      <TransactionList 
      transactions={accounts[selectedAccountIndex].transactions} />
      )}

      <ActionButtons
      onCredit={handleCredit} 
      onDebit={handleDebit}
      onTransactions={handleShowTransactions}
      />
    </>
  );
}

export default App;