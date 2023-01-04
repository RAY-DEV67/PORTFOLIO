import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import bitmoji from "../images/profile.webp";
import { useInView } from "react-intersection-observer";

export function Banner() {
  const { ref: headRef, inView: myheadIsVisible } = useInView();
  const { ref: profileRef, inView: profileIsVisible } = useInView();

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <span ref={headRef} className={myheadIsVisible ? "showtag tagline" : "tag"} >Welcome to my Portfolio</span>
               <h1  ref={headRef} className={myheadIsVisible ? "showcontent" : "content"}>{`Hi i'm Henry`}</h1>
                  <h1  ref={headRef} className={myheadIsVisible ? "showdev" : ""}>A Frontend <span className="deve">Developer</span></h1>
                  <p  ref={profileRef} className={profileIsVisible ? " showhead" : "head"}>
                    Customer-focused software developer with superior
                    communication skills and expertise in various technical
                    platforms. Understands and meets both client and employer
                    needs and develops highly functional, and easy-to-use
                    applications.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    lets connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={bitmoji} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
