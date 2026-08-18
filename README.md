# 🏦 Bank Management System

A responsive **Bank Management System dashboard built with React.js**. The application allows users to manage multiple bank accounts, perform credit and debit transactions, transfer funds between accounts, and view recent transaction history through a clean and interactive dashboard.

This project was developed as a React.js assignment with a focus on **component-based development, state management, props, event handling, responsive UI, and dynamic account operations**.

## ✨ Features

* Clean and responsive banking dashboard
* Multiple bank accounts with individual details
* Dynamic account balance display
* Credit funds into an account
* Debit funds from an account
* Transfer money between accounts
* Recent transaction history
* Accounts overview using an HTML table
* Selectable accounts with dynamically updated details
* Validation for invalid amounts and insufficient balance
* Reusable React components
* Interactive buttons and form controls
* Responsive layout for different screen sizes
* Hover effects and polished dashboard styling

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **Vite**
* **HTML5**
* **CSS3**
* **React Hooks**
* **Git & GitHub**
* **GitHub Pages**

## 🖥️ Dashboard Overview

The dashboard is organized into several sections:

### Account Details

Displays the currently selected account along with important information such as:

* Account holder name
* Account number
* Current balance
* Bank branch
* Account type
* IBAN
* Account status
* Currency

### Accounts Overview

An HTML table displays all available accounts. Selecting an account updates the account details shown in the dashboard.

### Quick Actions

The Quick Actions section provides the main banking operations:

* **Credit**
* **Transfer**
* **Debit**
* **Transactions**

For transfers, the user can select the destination account from a dropdown before entering the transaction amount.

### Recent Transactions

Transactions are stored dynamically for each account and displayed with:

* Date and time
* Transaction type
* Transaction amount

Credit transactions and outgoing transactions are visually distinguished to make the history easier to read.

---

## ⚙️ How the Application Works

The main account data is maintained in `App.jsx` using React state.

Each account contains its own information and transaction history. When an action is performed, the relevant account state is updated and the interface automatically reflects the new data.

For example:

* Selecting an account changes the active account.
* Credit increases the selected account's balance.
* Debit decreases the selected account's balance.
* Transfer decreases the sender's balance and increases the receiver's balance.
* Every successful transaction is added to the corresponding transaction history.

## 🔄 Account Operations

### Credit

The Credit operation adds the entered amount to the currently selected account.

Before processing the transaction, the application checks that:

* An amount has been entered.
* The amount is greater than zero.

After a successful credit:

1. The account balance is increased.
2. A credit transaction is recorded.
3. The amount field is cleared.
4. The updated balance appears immediately.

### Debit

The Debit operation removes money from the selected account.

The application validates the entered amount and checks the available balance before processing the operation.

If the requested amount exceeds the available balance, an **Insufficient balance** message is displayed.

### Transfer

The Transfer feature allows money to move from one account to another.

The user:

1. Selects the destination account.
2. Enters the transfer amount.
3. Clicks **Transfer**.

The application then:

* Deducts the amount from the sender.
* Adds the amount to the receiver.
* Records a **Transfer Sent** transaction.
* Records a **Transfer Received** transaction.
* Clears the transfer fields after completion.

### Transaction History

Each account has its own transaction history.

Transactions are stored with their type, amount, and date/time and are displayed in the **Recent Transactions** section when requested.

---

## 🧩 React Components

The project is divided into reusable components to keep the application organized and maintainable.

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── AccountCard.jsx
│   ├── AccountTable.jsx
│   ├── ActionButtons.jsx
│   └── TransactionList.jsx
│
├── App.jsx
└── style.css
```

### Component Responsibilities

**Header**
Displays the main dashboard title and introductory text.

**AccountCard**
Shows detailed information about the currently selected bank account.

**AccountTable**
Displays all available accounts and allows the user to select an account.

**ActionButtons**
Contains the buttons used for credit, transfer, debit, and transaction history actions.

**TransactionList**
Displays the recent transactions belonging to the selected account.

## 🧠 React Concepts Demonstrated

This project demonstrates several important React concepts:

* Functional components
* `useState` Hook
* Component state management
* Passing data through props
* Passing callback functions through props
* Controlled form inputs
* Conditional rendering
* Array `.map()` for dynamic UI generation
* Updating nested account data
* Event handling
* Dynamic rendering based on state

## 📁 Project Structure

```text
bank-management-react/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── AccountCard.jsx
│   │   ├── AccountTable.jsx
│   │   ├── ActionButtons.jsx
│   │   └── TransactionList.jsx
│   │
│   ├── App.jsx
│   ├── style.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the Repository

Clone this repository to your local machine using Git.

```bash
git clone <your-repository-url>
```

### 2. Open the Project

```bash
cd bank-management-react
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will then be available through the local development URL provided by Vite.


## 📦 Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

The project is intended to be deployed using **GitHub Pages** so that the completed banking dashboard can be accessed online.

After configuring GitHub Pages for the repository, the generated production build can be published and used as the live version of the project.

**Live Demo:**
Add your GitHub Pages deployment link here after deployment.

## 🔍 SEO & Search Visibility

The project is prepared for web deployment and can include essential search-engine information such as:

* Page title
* Meta description
* Relevant page metadata
* Structured data where required

These elements help search engines understand the purpose and content of the application.

> **Note:** Search-engine rich results are controlled by Google and cannot be guaranteed simply by adding structured data.


## 🎨 UI & Design

The interface follows a modern banking-dashboard style with:

* Blue banking-themed color palette
* Card-based layout
* Clean typography
* Rounded containers
* Subtle shadows
* Interactive hover effects
* Clear transaction status colors
* Responsive spacing and sizing

The UI was designed for this project rather than copying another project's source code.

## 📱 Responsive Design

The dashboard has been styled to remain usable across different screen sizes, including:

* Desktop screens
* Laptops
* Tablets
* Mobile devices

Tables, cards, forms, and action buttons adjust according to the available screen width.

## 🎯 Assignment Requirements Covered

The project demonstrates the required concepts through:

* Detailed project documentation
* React-based implementation
* Multiple bank accounts
* Multiple account properties
* Credit and debit actions
* Transaction history
* Account-to-account transfers
* HTML table
* Transaction list
* Interactive buttons
* Props between components
* React state using `useState`
* Multiple event handlers
* Reusable React components
* Responsive dashboard UI
* Git-based development history

## 📚 References

The project was developed using official documentation and learning resources for React, JavaScript, HTML, CSS, Vite, and GitHub Pages.


## 👩‍💻 Author

**Sehrish Maqbool**

BS Information Technology Student

**GitHub:** `Sehrish-web209`
