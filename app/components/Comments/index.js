/**
 *
 * Comments
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { range } from 'ramda';
const Comments = styled.div`
  height: 500px;
  background-color: #444;
  padding: 2rem;
`;

const Comment = styled.div`
  height: 5px;
  margin: 10px;
  background-color: #aaa;
`;
Comments.propTypes = {};

const Group = styled.div`
  margin-bottom: 30px;
  border-bottom: 1px solid #666;
`

export default () => (
  <Comments>
    Comments
    {range(1, 5).map(num => (
      <Group key={num}>
        <Comment />
        <Comment />
        <Comment />
      </Group>
    ))}
  </Comments>
);
