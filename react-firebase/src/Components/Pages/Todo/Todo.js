import React from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

function Todo() {

    return (
        <div >
            <h1 style={{ textAlign: 'center'}}>Todo App</h1>
            <div>
                <AddTodo/>
            </div>
            <div>
                <ListTodo/>
            </div>
        </div>
    )
}
export default Todo;