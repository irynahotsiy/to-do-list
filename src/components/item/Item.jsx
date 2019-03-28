import React, { Component } from "react";
import { TodoElement } from './style';
import { PinnedIcon } from './style';
import { Checkbox } from './style';
import { Input } from './style';
import { Icons } from './style';
import { Icon } from './style';


class Item extends Component {
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
            <Input onChange={this.props.onClick} type="checkbox" name="todo"  checked={this.props.crossed} />
            <label htmlFor="todo" >
              {this.props.todo}
            </label>
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




export default Item;
