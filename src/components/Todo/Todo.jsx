import React, { Component } from "react";
import { TodoElement } from './StyleItem';
import { PinnedIcon } from './StyleItem';
import { Checkbox } from './StyleItem';
import { Input } from './StyleItem';
import { Icons } from './StyleItem';
import { Icon } from './StyleItem';


class Todo extends Component {
  handleKeyPress = (e) => {
    if(e.key === 'Enter')
    {
      this.props.onEdited(e.target.value);
    }
  }
  render() {
    return (
      <>

        <TodoElement
          crossed={this.props.crossed}
        >
          <PinnedIcon
            onClick={this.props.onPinButton}
            icon="thumbtack"
            pinned={this.props.pin}
          />
          <Checkbox >
            <Input onChange={this.props.onClick} type="checkbox" name="todo" checked={this.props.crossed} />
            {this.props.edit ? <input defaultValue={this.props.todo}  onKeyPress={this.handleKeyPress}/> : <label htmlFor="todo" onClick={this.props.onEdit}>
              {this.props.todo}
            </label>}
          </Checkbox>
          <Icons >
            <Icon
              onClick={this.props.onDeleteClick}
              icon="trash-alt"
            />
            <Icon
              onClick={this.props.onPinButton}
              icon="thumbtack"
            />
          </Icons>
        </TodoElement>
      </>
    );
  }
}




export default Todo;
