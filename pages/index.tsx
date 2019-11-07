import * as React from "react"
import { NextPage } from "next"
import Layout from "../components/layouts/Layout"
import Operators from '../components/Operators'





const IndexPage: NextPage = () => {
  
  return (
    <Layout>
      <Operators/>
    </Layout>
  );
};

export default IndexPage;