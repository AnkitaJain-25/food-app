import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      }
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/AnkitaJain-25");
    const json = await data.json();

    this.setState({
        userInfo: json,
    })
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: ankita.jain25@outlook.com</h4>
      </div>
    );
  }
}

export default UserClass;


/**
 * 
 * --- Mounting ---
 * 
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy>
 * Component Did Mount
 *      <API Call>
 *      <this.setState> -> State Variable is updated
 * 
 * --- UPDATE ---
 * 
 *        render(API Data)
 *        <HTML (new API Data)>
 *        ComponentDidUpdate()
 * 
 * 
 * --- UNMOUNT ---
 * If I move away of the page then component Unmount is called
 *  e.g: moving from about to contact page
 * 
 *         ComponentWillUnmount()
 */