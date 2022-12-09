import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../redux/actions";

export default function Todos() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDesc, setUpdatedDesc] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);

  const todos = useSelector((state) => state.todos.items);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="form">
        <input
          type="text"
          value={title}
          placeholder="Write todo title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={desc}
          placeholder="Write todo description"
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(
              addTodo({ id: todos.length + 1, title: title, desc: desc })
            );
            setTitle("");
            setDesc("");
          }}
        >
          Add todo
        </button>
      </div>
      <div className="todos">
        {todos.length > 0
          ? todos.map((todo) => (
              <div key={todo.id} className="todo">
                <h2>{todo.title}</h2>
                <p>{todo.desc}</p>
                <button
                  onClick={() => {
                    setIsEdit(true);
                    setId(todo.id);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                  Delete
                </button>
                <br />

                {isEdit && id === todo.id && (
                  <div>
                    <input
                      type="text"
                      placeholder="updated Title"
                      onChange={(e) => setUpdatedTitle(e.target.value)}
                    />

                    <input
                      type="text"
                      placeholder="updated Desc"
                      onChange={(e) => setUpdatedDesc(e.target.value)}
                    />
                    <button
                      onClick={() => {
                        dispatch(
                          updateTodo({
                            id: todo.id,
                            title: updatedTitle,
                            desc: updatedDesc,
                          })
                        );
                        setIsEdit(false);
                      }}
                    >
                      Update
                    </button>
                  </div>
                )}
              </div>
            ))
          : "There is no todos"}
      </div>
    </div>
  );
}
