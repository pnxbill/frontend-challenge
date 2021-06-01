import styled from 'styled-components';

export const StyleSearchInput = styled.input`
  margin: auto;
  min-height: 50px;
  min-width: 400px;
  border-radius: 20px;
  border: none;
  box-shadow: 1px 1px 6px #9a9a9a;
  font-size: 1.2rem;
  padding: 15px 25px;
  transition: 200ms ease-in;
  margin-top: ${({ haveResults }) => haveResults ? '60px' : '200px'};
  margin-bottom: ${({ haveResults }) => haveResults ? '40px' : 'auto'};

  :focus { 
    box-shadow: 1px 1px 16px #9a9a9a;
  }
`;

export const StyleArtistContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 10px;
`;

export const StyleArtistCard = styled.div`
  display: flex;
  margin-bottom: 8px;
  font-weight: 600;
  border-radius: 15px;
  box-shadow: 1px 1px 5px 1px #655aa3;
  transition: 150ms ease-in-out;
  cursor: pointer;
  align-items: center;

  span {
    margin-left: 15px;
  }

  img {
    width: 70px;
    margin: 8px 15px 8px auto;
    height: 70px;
    border-radius: 50%;
    box-shadow: 1px 1px 9px 1px #1f1a3a;
  }

  :hover { 
    background: #1f1a3a;
    color: white;
  }
`;