
function ExpenseItem({ item }) {
    return (
        <>
            <td>{item.expenseName}</td>
            <td>{item.amount} PHP</td>
            <td>{item.category}</td>
            <td>{item.date}</td>
        </>
    )
}


export default ExpenseItem;