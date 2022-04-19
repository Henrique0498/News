import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 64px;
  background-color: ${({theme}) => theme.colors.blue[500]};
  top: -64px;
  z-index: 100;
  display: flex;
  align-items: center;
  transition: all ${({theme})=> theme.animation.duration.xFast};
  box-shadow: ${({theme})=> theme.shadow.xxSmall};
  color: ${({theme}) => theme.colors.gray[50]};
  font-size: 24px;
  font-weight: 700;

  .logo{
    width: 50px;
    height: 50px;
    margin: 0 10px;
  }


  &.active {
    top: 0px;
  }
`