import { useParams } from "react-router-dom";
import shoes0 from "../img/shoes0.jpg";
import shoes1 from "../img/shoes1.jpg";
import shoes2 from "../img/shoes2.jpg";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import "../App.css";
import { Context1 } from "../App.js";

// const YellowBtn = styled.button`
//   background: ${(props) => props.bg};
//   color: ${(props) => (props.bg == "blue" ? "white" : "black")};
//   padding: 10px;
// `;

// const NewBtn = styled.button(YellowBtn)`
//   margin: 100px
// `;

const Detail = (props) => {
  const params = useParams();
  const found = props.shoes.find((x) => x.id == params.id);

  let { 재고, shoes } = useContext(Context1);

  const [sale, setSale] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSale(false);
    }, 2000);
    // return ()=>{
    //   코드  => useEffect 동작전에 실행되는 ㅎ마수
    // }
  }, []);

  const [탭, 탭변경] = useState(0);

  const images = {
    0: shoes0,
    1: shoes1,
    2: shoes2,
  };

  const [nan, setNan] = useState("");
  const isn = isNaN(123);

  const [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("detailend");
    }, 100);
    return () => {
      setFade(0);
    };
  }, []);

  return found === undefined ? (
    <div>없는상품임</div>
  ) : (
    <div className={`container detailstart ${fade}`}>
      <div className="row">
        {sale == true ? (
          <div className="alert alert-warning">2초이내 구매시 할인</div>
        ) : null}
        {재고}
        <div className="col-md-6">
          <img src={images[found.id]} width="100%" />
        </div>
        {isNaN(nan) == false || nan == "" ? null : (
          <div className="alert alert-danger">경고 : 숫자만 입력하세요</div>
        )}
        <input onChange={(e) => setNan(e.target.value)} />
        <div className="col-md-6">
          <h4 className="pt-5">{found.title}</h4>
          <p>{found.content}</p>
          <p>{found.price}</p>
          <button className="btn btn-danger">주문하기</button>
          {/* <YellowBtn bg="orange">버튼</YellowBtn>
          <NewBtn>dd</NewBtn> */}
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} />
    </div>
  );
};

const TabContent = ({ 탭 }) => {
  let [fade, setFade] = useState("");
  // let { 재고 } = useContext(Context1);

  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [탭]);

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
};

export default Detail;
