import { useParams } from "react-router-dom";
import shoes0 from "../img/shoes0.jpg";
import shoes1 from "../img/shoes1.jpg";
import shoes2 from "../img/shoes2.jpg";
import styled from "styled-components";
import { useEffect, useState } from "react";

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
  // console.log("found", found);

  const [sale, setSale] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSale(false);
    }, 2000);
    // return ()=>{
    //   코드  => useEffect 동작전에 실행되는 ㅎ마수
    // }
  }, []);

  const images = {
    0: shoes0,
    1: shoes1,
    2: shoes2,
  };

  const [nan, setNan] = useState("");
  const isn = isNaN(123);

  return found === undefined ? (
    <div>없는상품임</div>
  ) : (
    <div className="container">
      <div className="row">
        {sale == true ? (
          <div className="alert alert-warning">2초이내 구매시 할인</div>
        ) : null}

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
    </div>
  );
};

export default Detail;

// Lifecycle과 useEffect 1 들을차례
