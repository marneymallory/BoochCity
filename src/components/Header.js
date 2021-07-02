import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <h1>
              🌇 Welcome to Booch City: handcrafted kombucha from our heart and soul to
              yours 💜
            </h1>
          </Col>
          <Col>
            <NavigationDropdown />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Header;
