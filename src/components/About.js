import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1 className="text-lg font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
      <h2>This is Namaste React Web Series</h2>
      {/* <User name={"Ankita Jain using function component"}/> */}
      <UserClass
        name={"Ankita Jain using class component"}
        location={"Indore"}
      />
    </div>
  );
};

export default About;
