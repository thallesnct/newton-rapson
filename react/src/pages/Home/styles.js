import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  background-color: #F2F4F6;
  min-height: 100%;
  padding: 36px 10vw;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (max-width: 1024px) {
    padding: 36px 7.5vw;
  }
`;

export const Graph = styled.div`
  position: relative;
  background-color: #FFFFFF;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: 0 0 0.3rem rgba(0,0,0,.1);

  & > div {
    padding: 16px;
    background-color: #F2F4F6;
    color: #424242;
    margin: 16px 0 24px;
  }

  & > label {
    color: #212121;

    &:not(:first-of-type) {
      margin-top: 16px;
    }
  }
`;

export const Form = styled.form`
  height: fit-content;
  width: 100%;
  display: grid;
  grid-template-columns: 140px 1fr auto;
  grid-column-gap: 16px;
  padding: 2rem;
  box-shadow: 0 0 0.3rem rgba(0,0,0,.1);
  background-color: #FFFFFF;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 16px;
  }

  div {
    display: inline-flex;
    flex-direction: column;
  }
`;

export const Label = styled.label`
  color: #6B48FF;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #F2F4F6;
  color: #212121;
  padding: .4rem .8rem;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #6B48FF;
  border: 1px solid #6B48FF;
  color: #F2F4F6;
  border: none;
  border-radius: 1000vw;
  padding: .4rem 2.4rem;
  height: min-content;
  margin-top: auto;
`;