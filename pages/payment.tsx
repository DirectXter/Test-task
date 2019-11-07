import * as React from "react";
import Layout from "../components/layouts/Layout";
import Link from "next/link";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaymentPage = () => {
  return (
    <>
      <Layout>
        <Div>
          <h1>Выберите оператора</h1>
          <Link href="/">
            <a>Вернуться</a>
          </Link>
        </Div>
      </Layout>
    </>
  );
};

export default PaymentPage;
