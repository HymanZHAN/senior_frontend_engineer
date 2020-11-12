import { Component } from "react";

export class MessageCard extends Component {
  render() {
    const { id, message, nickname, removeCard } = this.props;

    return (
      <li>
        <h3>{nickname}</h3>
        <p>{message}</p>
        <button
          onClick={() => {
            removeCard(id);
          }}
        >
          删除
        </button>
      </li>
    );
  }
}
