import styled from "styled-components";

export const Container = styled.a`
  width: 100%;
  height: 160px;
  margin: 10px auto;
  background-color: ${({theme}) => theme.colors.gray[50]};
  display: flex;
  padding: 10px 4px;
  box-shadow: ${({theme}) => theme.shadow.xSmall} ;
  border-radius: 6px;
  text-decoration: none;
  color: ${({theme}) => theme.colors.gray[800]};

  &.mobile {
    flex-direction: column;
    height: auto;

    .image {
      margin-bottom: 10px;
    }
  }
`


export const Photo = styled.div`
  padding: 12px 0;
  display: flex;
  justify-content: center;

  .image {
    width: 200px;
    height: 110px;
    background-color: ${({theme}) => theme.colors.gray[400]};
    transform: rotate(6deg);
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    border-radius: 4px;

    ::before {
      content: '';
      width: 210px;
      height: 110px;
      background-color: ${({theme}) => theme.colors.red[500]};
      transform: rotate(-12deg);
      position: absolute;
      box-shadow: ${({theme}) => theme.shadow.xxSmall};
      border-radius: 4px;
    }
  }

  img {
    width: 200px;
    height: 100px;
    object-fit: cover;
    transform: rotate(-6deg);
    border-radius: 4px;
      box-shadow: ${({theme}) => theme.shadow.xxSmall};
  }
`

export const Text = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  padding: 0 20px;
  gap: 4px;

  .title {
    font-size: 18px;
  }


  &.mobile {
    gap: 10px;
  }
`