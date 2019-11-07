import * as React from "react";
import styled from "styled-components";
import { Props } from "../interfaces";
import classNames from "classnames";
import InputMask  from 'react-input-mask';
import CSS from 'csstype'

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
  height: 200px;
  width: 250px;
  border: solid 1px white;
`;

const Input = styled.input`
  height: 20px;
  width: 200px;
  margin: 10px auto 0 auto;
  padding: 5px;
  outline: none;
  border: solid 1px white;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Button = styled.button`
  width: 60%;
  height: 30px;
  margin: 30px auto 0 auto;
  outline: none;
  border: solid 2px white;
  background: white;
  color: black;
  :hover {
    animation: 2s ease-in 1s;
    border: solid 2px purple;
  }
`;

const Div = styled.div`
  height: 70vh;
  overflow: hidden;
  animation: 0.5s ease-out 0s 1 normal appear;
  @keyframes appear {
    from {
      transform: translateX(-900px);
    }
    to {
      transform: translateX(0);
    }
  }
`;
const mask: CSS.Properties = {
  
} 


const PaymentForm: React.FunctionComponent<Props> = ({
  id,
  className,
  label,
  error,
  ...attrs
}) => {
  const classes = classNames("input", "className", { error });
  const [numberValue, setNumber] = React.useState();
  const [amountValue, setAmount] = React.useState<string>('');
  
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setNumber(value);
  }
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setAmount(value);
  };
  

  return (
    <Div>
      <Form>
        {label && (
          <label className="inputLabel" htmlFor={id}>
            {label}
          </label>
        )}
        {attrs && <span className="inputRequired"></span>}
        
        <InputMask mask={"+7\999 999 9999"} required value={numberValue} onChange={handleNumberChange}/>
        
        
          {error && <span className="inputError">{error}</span>}
        
        <Input 
        type="number"
        className={classes}
        value={amountValue}
        onChange={handleAmountChange}
        {...attrs}
        >
        </Input>

        <Button type="submit">Оплатить</Button>
      </Form>
    </Div>
  );
};

export default PaymentForm;
