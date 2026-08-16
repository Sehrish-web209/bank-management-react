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
    },
  ]);

  const handleCredit = () => {
    setAccounts(
    accounts.map((account, index) => {
      if (index === selectedAccountIndex) {
        return{...account,
          balance: account.balance+5000,
      };
    }
    return account;
    })
  );
};
  const transactions = [
    {
      type: "Credit",
      amount: 5000,
    },
    {
      type: "Debit",
      amount: 3000,
    },
  ];

  return (
    <>
      <Header />

      <AccountCard account={accounts[selectedAccountIndex]} />

      <AccountTable 
        accounts={accounts} 
        onAccountSelect={setSelectedAccountIndex}
      />  
      <TransactionList transactions={transactions} />

      <ActionButtons onCredit={handleCredit} />
    </>
  );
}

export default App;