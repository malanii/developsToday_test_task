import Head from "next/head";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import styled from 'styled-components';
const Wrapper = styled.div`
position: relative;
min-height: 100vh;
`;
const ContentWrapper = styled.main`
padding-bottom: 150px;
`;
const FooterWrapper = styled.footer`
background-color: #DAC9F2;
text-align:center;
width:100%;
height: 150px;
position: absolute;
bottom: 0;
`;
export default function MainLayout({ title = 'Home', children}) {
    return (
        <Wrapper>
            <Head>
                <title>{title} | DevelopsToday</title>
                <meta name="keywords" content="next, javascript"/>
                <meta name="description" content="I practice here to write ssr app"/>
                <meta charSet='utf-8' />
            </Head>
            <nav>
                <NavBar/>
            </nav>
            <main>
                <ContentWrapper>
                    {children}
                </ContentWrapper>
            </main>
            <FooterWrapper>
              <Footer/>
            </FooterWrapper>
        </Wrapper>
    )

}