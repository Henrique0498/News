import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100px;
  background-color: ${({theme})=> theme.colors.gray[50]};
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: ${({theme})=> theme.shadow.xSmall};
`