
function ExpenseItem({ item }) {
    return (
        <>
            <tr>
                <td>{item.expenseName}</td>
                <td>{item.amount} PHP</td>
                <td>{item.category}</td>
                <td>{item.date}</td>
            </tr>
        </>
    )
}


export default ExpenseItem;