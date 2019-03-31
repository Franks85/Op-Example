import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  width: 4.5rem;
  height: 2.8rem;
  position: relative;
  background-color: ${props => props.link ? "#2dbfbe" : props.text ? "#fad548" : props.bg};
  border-radius: 5px;
  text-align: center;
  &:before {
    content: "";
    position: absolute;
    top: 10px;
    right: ${props => (props.right ? "100%" : "")};
    left: ${props => (props.bLeft ? "100%" : "")};
    border-top: 12px solid transparent;
    border-right: ${props => (props.right ? "15px solid #2dbfbe" : "")};
    border-left: ${props => (props.bLeft ? `15px solid ${props.bg}` : "")};
    border-bottom: 12px solid transparent;
    border-radius: 2px;
    width: 0;
    height: 0;
  }
  span {
    color: #fff;
    line-height: 3rem;
  }
`;

const countIcon = props => {
  return <Icon {...props} />;
};

export default countIcon;
