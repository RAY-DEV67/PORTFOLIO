import { Col } from "react-bootstrap";

export function OthersCard({ title, git, live, stack, imgUrl }) {
    return ( 
        <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            {/* <span className="desp">{description}</span> */}
            <p>{stack}</p>
            <div className="code">
            <a href={git} target="_blank" className="git">Git-hub</a>
            <a className="about">About App</a>
            <a href={live} target="_blank" className="live">Live Site</a>
            </div>
          </div>
        </div>
      </Col>
     );
}

