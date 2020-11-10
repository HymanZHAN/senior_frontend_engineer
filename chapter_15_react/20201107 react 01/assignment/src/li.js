//暗号：我是MT
import { Component } from "react";

export class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.toggleGroup = this.toggleGroup.bind(this);
  }

  state = {
    isShowing: false,
  };

  toggleGroup() {
    const { isShowing } = this.state;
    this.setState({ isShowing: !isShowing }, () => {
      console.log(this.state);
    });
  }

  render() {
    const { group } = this.props;
    const { groupName, members } = group;
    const { isShowing } = this.state;

    return (
      <dl
        className={`friend-group ${isShowing ? "expanded" : ""}`}
        onClick={this.toggleGroup}
      >
        <dt>{groupName}</dt>
        {members.map((member, index) => {
          return <dd key={index}>{member}</dd>;
        })}
      </dl>
    );
  }
}

export default FriendsList;
