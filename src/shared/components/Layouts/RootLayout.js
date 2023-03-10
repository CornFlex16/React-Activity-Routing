import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
import { Link } from "react-router-dom";

const RootLayout = ({ children }) => {
  return (
    <div className="root-main">
      <Header></Header>
      <Link to="/">Home Page</Link> &nbsp;
      <Link to="/about">About Page</Link> &nbsp;
      <Link to="/students">Students Page</Link> &nbsp;
      <Link to="/student/1">Student 1</Link> &nbsp;
      <Link to="/student/2">Student 2</Link> &nbsp;
      <Link to="/student/3">Student 3</Link> &nbsp;
      <Link to="/student/add">Add Student 3</Link> &nbsp;
      {children}
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
