import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        {/* <User name={"Ankita Jain using function component"}/> */}
        <UserClass
          name={"Ankita Jain using class component"}
          location={"Indore"}
        />
      </div>
    );
}

export default About;