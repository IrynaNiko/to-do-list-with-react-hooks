import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    width: 400px;
  }
  & button {
    width: 100%;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
  }
  input {
    box-sizing:border-box;
    margin-bottom: 10px;
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s;
  }
`;
export const ToDoContainer = styled.div`
  width: 400px;
`;
export const ToDoItem = styled.div`
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  text-decoration: ${(props: { complete?: boolean }) =>
    props.complete ? "line-through" : "none"};
`;
export const JokeContainer = styled.div`
  padding: 25px;
  text-align: center;
`;
export const Header = styled.h4`
  font-size: x-large;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: bold;
  text-align: center;
  margin: 25px 0;
`;
export const Input = styled.input`
  box-sizing:border-box;
  margin-bottom: 20px;
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s;
`;
