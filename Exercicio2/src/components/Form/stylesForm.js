import styled from 'styled-components';

export const FormWrapper = styled.div`
  background-color: #B0C4DE;
  padding: 20px;
  border: 1px solid #4682B4;
  border-radius: 5px;
  margin-bottom: 20px;

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

export const FormInput = styled.input`
  background-color: #E0FFFF;
  margin: 10px;
  padding: 10px;
  border: 2px solid #4682B4;
`;

export const FormButton = styled.button`
  background-color: #2E8B57;
  color: #fff;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
`;

export const ClearButton = styled.button`
background-color: #0000FF;
  color: #fff;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
`;

export const ListText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ListLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ListValue = styled.div`
  text-align: left;
`;
