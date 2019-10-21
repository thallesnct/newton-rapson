import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  background-color: #F2F4F6;
  height: 100%;
  padding: 36px 15vw;
  display: flex;
  justify-content: space-between;
`;

export const Form = styled.form`
  height: fit-content;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 16px;
  padding: 2rem;
  box-shadow: 0 0 0.3rem rgba(0,0,0,.1);
  background-color: #FFFFFF;

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