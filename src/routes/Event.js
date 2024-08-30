import React from "react";
import { Outlet } from "react-router-dom";

const Event = () => {
  return (
    <>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "5rem 0 1rem 0",
        }}
      >
        오늘의 이벤트
      </h2>
      <Outlet />
    </>
  );
};

export default Event;
