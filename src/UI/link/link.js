import React from "react";
import styled from "styled-components";

const Link = styled.a``;

const tableLink = props => {
  const { children, href } = props;
  return <Link href={href}>{children}</Link>;
};

export default tableLink;
