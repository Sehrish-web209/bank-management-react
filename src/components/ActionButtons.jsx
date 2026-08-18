function ActionButtons({onCredit,onDebit,onTransactions}) {
    return (
        <div className="action-buttons">
            <button onClick={onCredit}>Credit</button>
            <button onClick={onDebit}>Debit</button>
            <button onClick={onTransactions}>Transactions</button>
        </div>
    );
}
export default ActionButtons;