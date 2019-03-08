import React from "react";
import styled from "styled-components";
import CountIcon from "./countIcon";
import { media } from "../../../Util/StyledComponent/mediaQueryHelper";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.vertical ? "column" : "")};
  align-items: center;
  justify-content: center;
`;

const CountName = styled.div`
  margin-right: ${props => props.right ? '1.5rem' : '0'};
  span {
    font-size: 1.1rem;
    letter-spacing: 0.07rem;
    ${media.lessThan("phone")`
      font-size: 1rem;
      letter-spacing: 0.01rem;
    `};
    a {
      color: #2dbfbe;
    }
  }
`;

const countBox = props => {
  const { name, count, link, text } = props;
  return (
    <Wrapper {...props}>
      <CountName {...props}>
        <span>
          {link && <a href="/companies">{name}</a>}
          {text && name}
        </span>
      </CountName>
      <CountIcon {...props}>
        <span>{count}</span>
      </CountIcon>
    </Wrapper>
  );
};

export default countBox;
