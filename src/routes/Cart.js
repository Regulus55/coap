import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAge, changeName } from "../store/userSlice";

const Cart = () => {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <Table>
      {state.user.name}의 장바구니
      {state.user.age}나이
      <button
        onClick={() => {
          dispatch(changeAge(100));
        }}
      >
        나이추가
      </button>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {state.cart.map((x, i) => (
          <>
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{x.name}</td>
              <td>{x.count}</td>
              <td>안녕</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(changeName());
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          </>
        ))}

        {/* <tr>
          <td>1</td>
          <td>{state.cart[0].name}</td>
          <td>{state.cart[0].count}</td>
          <td>안녕</td>
        </tr>
        <tr>
          <td>1</td>
          <td>{state.cart[1].name}</td>
          <td>{state.cart[1].count}</td>
          <td>안녕</td>
        </tr> */}
      </tbody>
    </Table>
  );
};

export default Cart;
