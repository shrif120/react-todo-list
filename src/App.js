import React, { Component } from "react";
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";
import { v4 as uuidv4 } from "uuid";
export default class App extends Component {
  state = {
    items: [],
    item: "",
    id: uuidv4(),
    editItem: false,
  };

  getInputValue = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      id: uuidv4(),
      item: "",
      editItem: false,
    });
    // localStorage.setItem("items", this.state.items);
    // console.log(newItem);
  };

  clearList = () => {
    this.setState({ items: [] });
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: filteredItems });
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              getInputValue={this.getInputValue}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              handleDelete={this.handleDelete}
              items={this.state.items}
              clearList={this.clearList}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
