import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>To Do List</h1>
    </header>
  );
}
const headerStyle = {
  background: "#135fa1",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
  margin: "10px auto",
};
export default Header;
