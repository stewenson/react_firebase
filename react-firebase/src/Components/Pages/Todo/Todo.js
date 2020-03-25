import React from "react";
import ListTodo from "./ListTodo";
import AddTodoForm from "./Form/AddTodoForm";
import '../../../Styles/TodoStyle/AddTodoStyle.scss';


function Todo() {

    return (
        <div >
            <h1 style={{ textAlign: 'center'}}>Todo App</h1>
            <div className="Todo">
                <div className="TextField">
                    <AddTodoForm />
                </div>
            </div>
            <div>
                <ListTodo/>
            </div>
        </div>
    )
}
export default Todo;