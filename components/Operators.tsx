import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

const Div = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  width: 60vw;
  margin: auto;
`;
const H1 = styled.h1`
  display: flex;
  background-color: inherit;
  color: white;
  justify-content: center;
  text-align: center;
`;
const List = styled.ul`
  list-style-type: none;
  cursor: pointer;
  justify-content: center;
  padding: 0;
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-self: center;
  margin: 5px auto 0 auto;
  width: 200px;
  height: 25px;
  align-items: center;
  border: none;
  box-shadow: inset 1px 1px 1px deepskyblue;
  background: #6495ed;
  :first-child {
    border-radius: 10px 10px 0 0;
  }
  :last-child {
    border-radius: 0 0 10px 10px;
  }
  :hover{
    transition-duration: .5s;
    background-color: white;
    color: deepskyblue;
  }
`;
const Form = styled.form`
  margin: auto;
  height: 30px;
  width: 200px;
  display: flex;
`;
const Button = styled.button`
  background: #6495ed;
  border: 1px solid deepskyblue;
  border-radius: 0 10px 10px 0;
  outline: none;
  cursor: pointer;
  :active{
    opacity: 0.9;
  }
  `;
const Input = styled.input`
  border: solid deepskyblue;
  border-width: 1px 0px 1px 1px;
  flex-basis: auto;
  padding-left: 10px;
`;
const A = styled.a`
  color:inherit;
`;

const Operators: React.FunctionComponent = () => {
  const initialValue = ["Мтс", "Мегафон", "Билайн"];
  const [operators, setOperator] = React.useState(initialValue);
  const [inputText, setInput] = React.useState("");

  const handleAddOperator = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): any => {
    e.preventDefault();
    if (inputText != '') {
      setOperator([...operators, inputText]);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <Div>
      <H1>пополнение мобильного</H1>
      <List>
        {operators.map(name => {
          return (
            <Li key={name}>
              <Link href={"/payment/[name]"} as={`/payment/${name}`}>
                <A>{name}</A>
              </Link>
            </Li>
          );
        })}
      </List>
      <Form>
        <Input
          type="text"
          id="text"
          onChange={handleInput}
          placeholder="Добавить оператора"
        ></Input>
        <Button onClick={handleAddOperator}>+</Button>
      </Form>
    </Div>
  );
};

export default Operators;
