import * as React from "react";
import styled from "styled-components";
// import { StatelessPage } from "../interfaces";
import classNames from "classnames";
// import fetch from "isomorphic-unfetch";
// import CSS from 'csstype'

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
  ::-webkit-inner-spin-button {
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
      transform: translateY(900px);
    }
    to {
      transform: translateY(0);
    }
  }
`;
// const inputTel: CSS.Properties = {
//   display: none
// }

const PaymentForm = ({ ...attrs }) => {
  const classes = classNames("input", "className");
  const [numberValue, setNumber] = React.useState();
  const [amountValue, setAmount] = React.useState<string>("");

  const handleNumberChange = (e: any): void => {
    let a = e.target.value;
    let b = a.replace(/\D/g,'').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
    a = !b[3] ? '+7'+ b[2] : '+7' + '(' + b[2] + ') ' + b[3] + (b[4] ? '-' + b[4]: '');
    setNumber(a);
  };

  const handleAmountChange = (e: any): void => {
    let a = e.target.value;
    let b = a.replace(/\D/g,'').match(/(\d{0,4})/);
    a = b[1] > 1000 ? 1000 : b[1];
    setAmount(a);
  };

  const handleFormSubmit = (e: any):void =>{e.target}

  return (
    <Div>
      <Form>
        <label className="inputLabel">Номер</label>
        <span className="inputRequired"></span>
        <Input
          type='tel'
          placeholder="+7 (999) 999-9999"
          required
          value={numberValue}
          onChange={handleNumberChange}
        />
        <span className="inputError"></span>
        <Input
          type='number'
          className={classes}
          value={amountValue}
          onChange={handleAmountChange}
          {...attrs}
        ></Input>
        <Button type="submit" onSubmit={handleFormSubmit}>Оплатить</Button>
      </Form>
    </Div>
  );
};

//  PaymentForm.getInitialProps = async function() {
//    const res = await fetch('../pages/api');
//    const data = await res.json();

//    console.log("s");

//    return {};
//  };

export default PaymentForm;
