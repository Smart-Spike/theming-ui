import React from 'react';
import styled from 'styled-components';

const BookImage = styled.img`
  max-height: 200px;
  max-width: 200px;
`;

const Info = styled.div`
  width: 250px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: ${_ => _.theme.boxShadow.shadowX} ${_ => _.theme.boxShadow.shadowY}
    ${_ => _.theme.boxShadow.spread} ${_ => _.theme.boxShadow.shadowColor};
   background-color: ${_ => _.theme.backgroundColor};
   
`;

Info.defaultProps = {
  theme: {
    boxShadow: {
      shadowX: '2px',
      shadowY: '2px',
      spread: '5px',
      shadowColor: 'red',
    },
    backgrounColor: '#fff',
  },
};

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
