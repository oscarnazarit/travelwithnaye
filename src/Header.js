import "./App.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <section>
    <Navbar className="header">
      <Container>
        <h1>Explore With Naye</h1>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#footer">Contact me</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  );
}

export default Header;