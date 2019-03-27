import React, { Component } from "react";
import Item from '../item/Item';


class ListItmes extends Component {
    render() {
      return this.props.items.map((el, idx) => (
        <Item
          key={idx}
          todo={el.text}
          onClick={e => {
            this.props.onCrossItem(el);
          }}
          crossed={el.crossed}
          onDeleteClick={e => {
            e.stopPropagation();
            this.props.onDeleteButton(el);
          }}
          pin={el.pinned}
          onPinButton={e => {
            debugger;
            e.stopPropagation();
            this.props.onPinButton(el);
          }}
        />
      ));
    }
  }
  export default ListItmes;