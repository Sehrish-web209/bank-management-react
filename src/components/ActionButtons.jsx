function ActionButtons({onCredit,onDebit}) {
    return (
        <div>
            <button onClick={onCredit}>Credit</button>
            <button onClick={onDebit}>Debit</button>
            <button>Transactions</button>
        </div>
    );
}
export default ActionButtons;