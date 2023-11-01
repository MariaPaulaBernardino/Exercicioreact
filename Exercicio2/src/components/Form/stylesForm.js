import styled from "styled-components";

export const FormWrapper = styled.div`
  background-color: #b0c4de;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  padding: 20px;
  border: 1px solid #4682b4;
  border-radius: 5px;
  margin-bottom: 20px;

  h2 {
    font-size: 40px;
    text-align: center;
    margin: 0;
    margin-bottom: 20px;
    background: linear-gradient(to right, #1c1c1c, #00bfff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const FormInput = styled.input`
  background-color: #e0ffff;
  margin: 10px;
  padding: 10px;
  border: 2px solid #4682b4;

  #check-box input[type=checkbox]:checked{
    color: green;
    height: 20px;

  }

`;

export const FormButton = styled.button`
  background-color: #2e8b57;
  color: #fff;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  margin: 5px;
  margin-left: 20px;
  cursor: pointer;
`;

export const ClearButton = styled.button`
  background-color: #e0ffff;
  color: #2e8b57;
  padding: 10px 30px;
  border: 2px solid #2e8b57;
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
