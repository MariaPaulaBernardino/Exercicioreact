import styled from 'styled-components';

export const ListWrapper = styled.div`
  background-color: #B0C4DE;
  padding: 20px;
  border: 1px solid #4682B4;
  border-radius: 5px;
  margin-top: 20px;
  text-align: left; 

  h2 {
    font-size: 40px;
    text-align: center; 
    margin: 0; 
    margin-bottom: 20px; 
    background: linear-gradient(to right, #1C1C1C, #00BFFF); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
  }
`;

export const ListItem = styled.div`
  background-color: #E0FFFF;
  border: 1px solid #4682B4;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const ListButton = styled.button`
  background-color: #B22222;
  color: #fff;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 20px;
  margin-top: 20px;
`;
