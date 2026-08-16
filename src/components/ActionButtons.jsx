function ActionButtons({onCredit}) {
    return (
        <div>
            <button onClick={onCredit}>Credit</button>
            <button>Debit</button>
            <button>Transactions</button>
        </div>
    );
}

export default ActionButtons;