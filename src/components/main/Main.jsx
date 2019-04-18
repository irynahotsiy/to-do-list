import React, { Component } from "react";
import ListItems from "../ListItems/Listitems";
import UpdateSettings from "../Update/Update";
import { Container } from "./Style";
import { Table } from "./Style";
import { InputBox } from "./Style";
import { Icon } from "./Style";
import { Line } from "./Style";
import { Header } from "./Style";
import { DayData } from "./Style";

class Main extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      newItem: "",
      todos: [
        { text: "test 1", crossed: false, pin: false, editable: false },
        { text: "test 2", crossed: false, pin: false, editable: false }
      ]
    };
  }

  updateVal = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  enterClicked = e => {
    if (e.key === "Enter") {
      if (this.state.newItem !== "") {
        this.setState({
          todos: [
            ...this.state.todos,
            {
              text: e.target.value,
              crossed: false,
              pin: false,
              editable: false
            }
          ],
          newItem: ""
        });
      }
    }
  };
  
  componentDidMount() {
    this.hydrateStateWithLocalStorage();
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  hydrateStateWithLocalStorage() {
    if (localStorage.hasOwnProperty("todos")) {
      let value = localStorage.getItem("todos");
      value = JSON.parse(value);
      this.setState({ todos: value });
    }
  }

  saveStateToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  render() {
    const pinnedItems = this.state.todos.filter(el => el.pinned);
    const notPinnedItems = this.state.todos.filter(
      el => !el.pinned && !el.crossed
    );
    const crossedItems = this.state.todos.filter(
      el => el.crossed && !el.pinned
    );
    return (
      <>
        <Container>
          <Header>
            <span>✔</span>
            <span> to-do list </span>
          </Header>
          <Table>
            <DayData>
              <UpdateSettings />
            </DayData>

            <InputBox>
              <Icon icon="align-left" />
              <input
                ref={this.inputRef}
                type="text"
                name="todo-item"
                placeholder="Add a task..."
                value={this.state.newItem}
                onChange={this.updateVal}
                onKeyPress={this.enterClicked}
                onMouseEnter={() => {
                  this.inputRef.current.focus();
                }}
              />
            </InputBox>
            <ListItems
              items={pinnedItems}
              onCrossItem={this.crossItem}
              onPinButton={this.onPinButton}
              onDeleteButton={this.onDeleteButton}
              onClickEdit={this.onEdit}
              onEdited={this.onEdited}
            />
            <Line />
            <ListItems
              items={notPinnedItems}
              onCrossItem={this.crossItem}
              onPinButton={this.onPinButton}
              onDeleteButton={this.onDeleteButton}
              onClickEdit={this.onEdit}
              onEdited={this.onEdited}
            />
            <ListItems
              items={crossedItems}
              onCrossItem={this.crossItem}
              onPinButton={this.onPinButton}
              onDeleteButton={this.onDeleteButton}
              onClickEdit={this.onEdit}
              onEdited={this.onEdited}
            />
          </Table>
        </Container>
      </>
    );
  }

  onEdit = el => {
    const idx = this.state.todos.indexOf(el);
    const editArr = this.state.todos.slice();
    editArr[idx].editable = !editArr[idx].editable;
    this.setState({
      todos: editArr
    });
  };

  onEdited = (el, value) => {
    const idx = this.state.todos.indexOf(el);
    const editArr = this.state.todos.slice();
    editArr[idx].editable = false;
    editArr[idx].text = value;
    this.setState({
      todos: editArr
    });
  };

  crossItem = el => {
    const idx = this.state.todos.indexOf(el);
    const todosCopy = this.state.todos.slice();
    todosCopy[idx].crossed = !todosCopy[idx].crossed;
    this.setState({
      todos: todosCopy
    });
  };

  onPinButton = el => {
    const idx = this.state.todos.indexOf(el);
    const arrayCopy = this.state.todos.slice();
    arrayCopy[idx].pinned = !arrayCopy[idx].pinned;
    this.setState({
      todos: arrayCopy
    });
  };

  onDeleteButton = el => {
    const idx = this.state.todos.indexOf(el);
    let todoDelete = this.state.todos.filter((el, index) => {
      return index !== idx;
    });
    this.setState({
      todos: todoDelete
    });
    localStorage.setItem("todos", JSON.stringify(todoDelete));
  };
}

export default Main;
