import styled from "styled-components";

export const ListWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: #b0c4de;
  padding: 20px;
  border: 1px solid #4682b4;
  border-radius: 5px;
  margin-top: 20px;
  text-align: left;
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

export const ListItem = styled.div`
  background-color: #e0ffff;
  border: 1px solid #4682b4;
  margin-left: 8%;
  margin-right: 8%;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const EditButton = styled.button`
  background-color: #2e8b57;
  color: #fff;
  padding: 10px 30px;
  border: 2px solid #2e8b57;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 20px;
  margin-top: 20px;
`;

export const DelButton = styled.button`
  background-color: #e0ffff;
  color: #b22222;
  padding: 10px 30px;
  border: 2px solid #b22222;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 20px;
  margin-top: 20px;
`;
