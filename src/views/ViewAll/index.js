import React from 'react'


export default function ViewAll() {
    return (
        
        <div className="page-content">
                <form>
                    <p className="inputBox">
                        <input type="text" required />
                        <label htmlFor="cardNumber">Search for ToDo</label>
                    </p>
                </form>
            <div id="todos">
                <div className="todo"><span>Hello hello hello hello hello hello hello hello</span></div>
                <div className="todo"><span>Todo 2 </span></div>
                <div className="todo"><span>Todo 3 </span></div>
                <div className="todo"><span>Todo 4 </span></div>
            </div>

        </div>
    )
}
