// 暗号：海哥真帅
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
    postedMessages.push({ id, nickname, message });
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
    this.setState({ postedMessages: newMessages });
  };

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
          {postedMessages.map(({ id, nickname, message }, index) => {
            return (
              <MessageCard
                id={id}
                nickname={nickname}
                message={message}
                removeCard={this.removeMessage}
                key={index}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}
