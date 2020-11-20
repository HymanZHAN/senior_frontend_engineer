//暗号：钟阿姨
import { Component, createRef } from "react";

export class MessageCard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isEditing: false,
      updatedMessage: props.message,
    };
  }

  editText = createRef();

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isEditing && this.state.isEditing) {
      this.editText.current.focus();
    }
  }

  render() {
    const {
      id,
      message,
      nickname,
      selected,
      removeCard,
      toggleSelectCard,
      updateMessage,
    } = this.props;

    const { isEditing, updatedMessage } = this.state;

    return (
      <li className={isEditing ? "editing" : ""}>
        <h3>{nickname}</h3>
        <input
          type="checkbox"
          checked={selected}
          onChange={({ target }) => {
            toggleSelectCard(id);
          }}
        />
        <p
          onDoubleClick={() => {
            this.setState({
              isEditing: true,
            });
          }}
        >
          {message}
        </p>
        <textarea
          value={updatedMessage}
          ref={this.editText}
          onChange={({ target }) => {
            this.setState({
              updatedMessage: target.value,
            });
          }}
          onBlur={() => {
            if (updatedMessage.trim()) {
              updateMessage(id, updatedMessage);
            } else {
              this.setState({
                updatedMessage: message,
              });
            }
            this.setState({
              isEditing: false,
            });
          }}
        ></textarea>
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
