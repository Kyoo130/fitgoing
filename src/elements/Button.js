import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    name,
    text,
    _onClick,
    is_float,
    margin,
    width,
    padding,
    bg,
    hover_bg,
    children,
  } = props;
  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    bg: bg,
    hover_bg: hover_bg,
  };

  if (is_float) {
    return (
      <>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </>
    );
  }

  return (
    <>
      <ElButton name={name} {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </>
  );
};

Button.defaultProps = {
  children: null,
  name: null,
  text: false,
  is_float: false,
  margin: false,
  width: "100%",
  padding: "12px 0",
  bg: "#21BF48",
  hover_bg: false,
  _onClick: () => {},
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => props.bg};
  border: none;
  cursor: pointer;
  padding: ${(props) => props.padding};

  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  :hover {
    ${(props) => (props.hover_bg ? `background-color: #1ea942;` : "")}
  }
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #f9d749;
  color: #222831;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50%;
`;

export default Button;
