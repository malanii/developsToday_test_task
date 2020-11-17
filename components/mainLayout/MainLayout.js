import Head from "next/head";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import styled from 'styled-components';

const VerticalCenter = styled.main`
height: 76vh;
display:flex;
justify-content: center;
 flex-direction:column;
`;
const FooterWrapper = styled.footer`
position:absolute;
bottom:0;
background-color: #DAC9F2;
text-align:center;
width:100%;
clear: both;
`;
export default function MainLayout({children, title = 'Home'}) {
    return (
        <>
            <Head>
                <title>{title} | DevelopsToday</title>
                <meta name="keywords" content="next, javascript"/>
                <meta name="description" content="I practice here to write ssr app"/>
                <meta charSet='utf-8' />
            </Head>

            <nav>
                <NavBar/>
            </nav>
            <VerticalCenter>
                  {children}
            </VerticalCenter>
            <FooterWrapper>
              <Footer/>
            </FooterWrapper>

        </>
    )

}