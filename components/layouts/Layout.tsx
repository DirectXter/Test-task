import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import { Props } from "../../interfaces";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    overflow: hidden;
    background: linear-gradient(30deg, #260138, #03031B);
    font-family: monospace;
    height: 100vh;
    color: white;
    margin:0;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

const Header = styled.header`
  background-color: deepskyblue;
  text-decoration: none;
  height: 45px;
`;
const Nav = styled.nav`
  text-decoration: none;
  padding: 15px;
`;



const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Home"
}) => {


  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <Header>
        <Nav>
          <Link href="/">
            <a>Главный экран</a>
          </Link>
        </Nav>
      </Header>
      {children}
    </div>
  );
};

export default Layout;
