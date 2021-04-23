import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { handleSubmit, getInputValue, item, editItem } = this.props;
    // console.log(item);
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text text-white bg-primary">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              onChange={getInputValue}
              value={item}
              type="text"
              className="form-control"
            ></input>
          </div>
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-block btn-success mt-2 text-capitalize"
                : "btn btn-block btn-primary mt-2 text-capitalize"
            }
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
