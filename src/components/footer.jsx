import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
// import logo from "../images/logo.svg";
import navIcon1 from "../images/nav-icon1.svg";
import navIcon2 from "../images/nav-icon2.svg";
import navIcon3 from "../images/Twitter-logo.svg.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <p>Ray_Dev</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ekene-elebor-57ba38206/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://twitter.com/Ray_dev67" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}