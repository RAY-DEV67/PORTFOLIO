import { Col } from "react-bootstrap";

export const Main = ({ title, stack, imgUrl, live , git }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt=""/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{stack}</p>
          <div className="code">
            <a href={git} target="_blank" rel="noreferrer" className="git">Git-hub</a>
            <button className="about">About App</button>
            <a href={live} target="_blank" rel="noreferrer" className="live">Live Site</a>
          </div>
        </div>
      </div>
    </Col>
  );
};