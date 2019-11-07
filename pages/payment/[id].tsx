import { useRouter } from 'next/router'
import Layout from '../../components/layouts/Layout'
import PaymentForm from '../../components/Payment'
import CSS from "csstype";

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

export default function Post() {
    const router = useRouter();

    return(
        <div>
        <Layout title="Оплата">      
          <div style={wrapperStyle}>
            <h1 style={h1Styles}>Оплата Мобильного</h1>
            <h2 style={h2Styles}>{router.query.id}</h2>
            <PaymentForm />
          </div>
        </Layout>
      </div>
    );
}
