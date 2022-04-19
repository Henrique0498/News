import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  padding: 90px 20px;
  background-color: ${({theme}) => theme.colors.gray[200]};
`