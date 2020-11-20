//暗号：钟阿姨
import { Component } from "react";
import { MessageCard } from "./MessageCard";

export class App extends Component {
  state = {
    id: 1,
    nickname: "",
    message: "",
    postedMessages: [],
  };

  addNewMessage = () => {
    const { id, nickname, message, postedMessages } = this.state;
    postedMessages.push({ id, nickname, message, selected: false });
    this.setState({
      id: id + 1,
      nickname: "",
      message: "",
      postedMessages: postedMessages,
    });
  };

  removeMessage = (id) => {
    const { postedMessages } = this.state;
    const newMessages = postedMessages.filter((message) => message.id !== id);
    this.setState({
      postedMessages: newMessages,
    });
  };

  toggleSelectMessage = (id) => {
    const { postedMessages } = this.state;
    const selectedMsgIndex = postedMessages.findIndex((msg) => msg.id === id);

    postedMessages[selectedMsgIndex].selected = !postedMessages[
      selectedMsgIndex
    ].selected;

    this.setState({
      postedMessages: [...postedMessages],
    });
  };

  toggleSelectAll = () => {
    const { postedMessages } = this.state;
    const selectedMessages = postedMessages.filter((msg) => msg.selected);

    if (selectedMessages.length === postedMessages.length) {
      postedMessages.forEach((msg) => {
        msg.selected = false;
      });
    } else {
      postedMessages.forEach((msg) => {
        msg.selected = true;
      });
    }

    this.setState({
      postedMessages: [...postedMessages],
    });
  };

  removeSelectedMessage = () => {
    const { postedMessages } = this.state;
    const unselectedMessages = postedMessages.filter((msg) => !msg.selected);

    this.setState({
      postedMessages: [...unselectedMessages],
    });
  };

  updateMessage = (id, message) => {
    const { postedMessages } = this.state;
    const toBeUpdateMsgIndex = postedMessages.findIndex((msg) => msg.id === id);

    postedMessages[toBeUpdateMsgIndex].message = message;

    this.setState({
      postedMessages: [...postedMessages],
    });
  };

  selectedMsgCount() {
    const { postedMessages } = this.state;
    const selectedMessages = postedMessages.filter((msg) => msg.selected);

    return selectedMessages.length;
  }

  isAllSelected() {
    const { postedMessages } = this.state;
    if (postedMessages.length) {
      return this.selectedMsgCount() === postedMessages.length;
    }
    return false;
  }

  render() {
    const { nickname, message, postedMessages } = this.state;

    return (
      <section className="wrap">
        <h2 className="title">留言板</h2>
        <div className="addMessage">
          <input
            type="text"
            placeholder="请输入昵称"
            value={nickname}
            onChange={({ target }) => {
              this.setState({
                nickname: target.value,
              });
            }}
          />
          <textarea
            placeholder="请输入留言"
            value={message}
            onChange={({ target }) => {
              this.setState({
                message: target.value,
              });
            }}
          ></textarea>
          <button onClick={this.addNewMessage}>提交留言</button>
        </div>

        <ul className="messageList">
          {postedMessages.map(({ id, nickname, message, selected }, index) => {
            return (
              <MessageCard
                id={id}
                nickname={nickname}
                message={message}
                selected={selected}
                removeCard={this.removeMessage}
                toggleSelectCard={this.toggleSelectMessage}
                updateMessage={this.updateMessage}
                key={index}
              />
            );
          })}
        </ul>

        <div className="sum">
          <label>
            <input
              type="checkbox"
              checked={this.isAllSelected()}
              onChange={this.toggleSelectAll}
            />
            <span>选中全部</span>
          </label>
          <button
            onClick={this.removeSelectedMessage}
            disabled={this.selectedMsgCount() === 0}
          >
            删除选中项
          </button>
          <p>
            当前选中{this.selectedMsgCount()}项，共 {postedMessages.length}{" "}
            条留言
          </p>
        </div>
      </section>
    );
  }
}
