import React, { Component } from "react";
import ListItems from "../ListItems/listitems";
import { Container } from './Style';
import { Table } from './Style';
import { InputBox } from './Style';
import { Icon } from './Style';
import { Line } from './Style';
import { Header } from './Style';
import  Timer  from "../Timer/timer";
import { DayData } from '../main/Style';


class Main extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      inputVal: "",
      todos: [
        { text: "test 1", crossed: false, pin: false },
        { text: "test 2", crossed: false, pin: false}
      ],
    };

    this.updateVal = this.updateVal.bind(this);
    this.enterClicked = this.enterClicked.bind(this);
  }

  updateVal = e => {

    this.setState({
      inputVal: e.target.value
    });
  };

  enterClicked(e) {
    if (e.key === "Enter") {
      if (this.state.inputVal !== "") {
        this.setState({
          todos: [
            ...this.state.todos,
            { text: e.target.value, crossed: false, pin: false }
          ],
          inputVal: ""
        });
      }
    }
  }
  
  render() {
    const pinnedItems = this.state.todos
      .filter(el => el.pinned);
    const notPinnedItems = this.state.todos
      .filter(el => !el.pinned && !el.crossed);
    const crossedItems = this.state.todos
      .filter(el => el.crossed && !el.pinned);
    return (
      <>
        <Container>
        <Header>
          <span>✔</span>
          <span> to-do list </span>
        </Header>
          <Table >
            <DayData>
              <Timer />
            </DayData>
           
            <InputBox>
              <Icon icon="align-left" />
              <input
                ref={this.inputRef}
                type="text"
                name="todo-item"
                placeholder="Add a task..."
                value={this.state.inputVal}
                onChange={e => this.updateVal(e)}
                onKeyPress={this.enterClicked}
                onMouseEnter={() => {
                 this.inputRef.current.focus()
                }}
              />
            </InputBox>
            <ListItems items={pinnedItems} onCrossItem={this.crossItem} onPinButton={this.onPinButton} onDeleteButton={this.onDeleteButton}/>
            <Line />
            <ListItems items={notPinnedItems} onCrossItem={this.crossItem} onPinButton={this.onPinButton} onDeleteButton={this.onDeleteButton} />
            <ListItems items={crossedItems} onCrossItem={this.crossItem} onPinButton={this.onPinButton} onDeleteButton={this.onDeleteButton} />
          </Table>
        </Container>
      </>
    );
  }
 
    
 
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
    
   
  };
}


export default Main;


