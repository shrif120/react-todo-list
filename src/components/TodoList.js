import React, { Component } from "react";
import TodoItem from "./TodoItem.js";
export default class TodoList extends Component {
  render() {
    const { handleDelete, clearList, items, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map((item) => {
          return (
            <TodoItem
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
              key={item.id}
              title={item.title}
            />
          );
        })}
        <button
          onClick={clearList}
          type="button"
          className="btn btn-block btn-danger mt-5"
        >
          clear list
        </button>
      </ul>
    );
  }
}
