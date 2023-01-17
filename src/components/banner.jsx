import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import bitmoji from "../images/profile.webp";
import { useInView } from "react-intersection-observer";

export function Banner() {
  const { ref: headRef, inView: myheadIsVisible } = useInView();


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <span className="tagline">Welcome to my Portfolio</span>
               <h1  ref={headRef} className={myheadIsVisible ? "showcontent" : "content"}>{`Hi I'm Henry`}</h1>
                  <h1  ref={headRef} className={myheadIsVisible ? "showdev" : ""}>A Frontend <span className="deve">Developer</span></h1>
                  <p>
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
