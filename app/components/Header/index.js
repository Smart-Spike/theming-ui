import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 4rem;
  background-color: #ddd;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

function Header() {
  return <StyledHeader>The Book Store</StyledHeader>;
}

Header.propTypes = {};

export default Header;
