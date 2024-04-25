import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // to initailise state
    this.state = {
      userInfo: {
        name: "dummy",
        location: "dum",
      },
    };
    console.log("constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SAUMYA-SINGH-BISHT");
    const json = await data.json();
    console.log("componenet did mount");
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component Updated");
  }

  componentWillUnmount() {
    console.log("compont Will update done");
  }
  render() {
    console.log("render");
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url}></img>
        <h2> Name: {this.state.userInfo.name} (classbased)</h2>
        <h2>Location :Columbia(class )</h2>
        <h3>contact: abcd</h3>
        <h3>Age:{this.props.age}</h3>
      </div>
    );
  }
}
export default UserClass;
