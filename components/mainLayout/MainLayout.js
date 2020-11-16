import Head from "next/head";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
// import styled from 'styled-components';

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
            <main>
                {children}
            </main>
            <footer >
              <Footer/>
            </footer>
        </>
    )

}