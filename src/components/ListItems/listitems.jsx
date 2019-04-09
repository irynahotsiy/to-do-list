import React, { Component } from "react";
import Item from '../item/Todo';


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
            e.stopPropagation();
            this.props.onPinButton(el);
          }}
          edit = {el.editable}
          onEdit = { e => {
            e.stopPropagation();
            this.props.onClickEdit(el);
          }}
          onEdited = { value => {
            this.props.onEdited(el, value);
          }}    
           />
      ));
    }
  }
  export default ListItmes;