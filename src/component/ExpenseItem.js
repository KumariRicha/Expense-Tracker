import React from "react";
import "./ExpenseItem.css";
function ExpenseItem() {
  //it must return one root element everything should be enclosed within this.
  return (
    <div className="expense-item" >
      <div>Date</div>
      <div className="expense-item__description">
        <h2>Title</h2>
        <div className="expense-item__price">Amount</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
