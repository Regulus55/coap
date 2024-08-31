import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { createContext, useState } from "react";
import data from "./data.js";
import {
  Routes,
  Route,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Event from "./routes/Event.js";
import axios from "axios";
import Cart from "./routes/Cart.js";

export let Context1 = createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [재고] = useState([10, 11, 12]);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className="topnav">
            SHOP
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate(-1);
              }}
            >
              뒤로가기
            </Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              event
            </Nav.Link>

            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>

              <div className="container">
                <div className="row">
                  <Row>
                    {shoes.map((shoe, i) => (
                      <Col key={i} xs={4}>
                        <Nav.Link href={`/detail/${shoe.id}`}>
                          <Items shoes={shoes[i]} i={i} />
                        </Nav.Link>
                      </Col>
                    ))}
                  </Row>

                  {/* <Row>
                    {sdata == undefined
                      ? null
                      : sdata.map((data, i) => (
                          <Col>
                            <Nav.Link href={`/detail/${data.id}`}>
                              <Items2 data={data} />
                            </Nav.Link>
                          </Col>
                        ))}
                  </Row> */}
                </div>
              </div>
              <button
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((res) => {
                      let copy = [...shoes, ...res.data];
                      // copy.push(...res.data);
                      setShoes(copy);
                    })
                    .catch(() => {
                      console.log("실패");
                    });
                }}
              >
                버튼
              </button>
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
          {/* /about/member    /about/location 들가면 <About 페이지 보여줌 */}
        </Route>
        <Route path="event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        <Route path="*" element={<div>없는페이지</div>} />
      </Routes>
    </>
  );
}

export default App;

const About = () => {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
      {/* outlet 있어야 /about/member 들어갔을때 둘다 보여줌 */}
    </div>
  );
};

const Items = (props) => {
  return (
    <div>
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
};

const Items2 = (props) => {
  return (
    <div>
      <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width="80%" />
      <h4>{props.data.title}</h4>
      <p>{props.data.content}</p>
      <p>{props.data.price}</p>
    </div>
  );
};
