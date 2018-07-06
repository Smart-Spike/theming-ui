import React from 'react';
import styled from 'styled-components';

const BookImage = styled.img`
  max-height: 200px;
  max-width: 200px;
`;

const Info = styled.div`
  border: 1px solid #ddd;
  width: 250px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

const BookInfo = props => {
  const { imageSrc, title, rating } = props;
  return (
    <Info>
      <BookImage src={imageSrc} />
      <p>Title {title}</p>
      <p>Rating {rating}</p>
    </Info>
  );
};

BookInfo.propTypes = {};

export default BookInfo;
