import * as React from "react";
import Layout from "../components/layouts/Layout";
import PaymentForm from "../components/Payment";
import CSS from "csstype";
// import { Props } from "../interfaces";

const h1Styles: CSS.Properties = {
  display: "flex",
  justifyContent: "center"
};
const h2Styles: CSS.Properties = {
  display: "flex",
  justifyContent: "center"
};
const wrapperStyle: CSS.Properties = {
  padding: "30px"
};

export default class PaymentPage extends React.Component<{settedOperator: String}> {
  static async getInitialProps({ query }: any) {
    console.log(query);
    const settedOperator = query.name;
    return { settedOperator };
  }
  render() {
    return (
      <div>
        <Layout title="Оплата">
          
          <div style={wrapperStyle}>
            <h1 style={h1Styles}>Оплата Мобильного</h1>
            <h2 style={h2Styles}>{this.props.settedOperator}</h2>
            <PaymentForm />
          </div>
        </Layout>
      </div>
    );
  }
}
