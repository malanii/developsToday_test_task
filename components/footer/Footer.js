import styled from 'styled-components';
//
// const FooterWrapper = styled.div`
// position:absolute;
// bottom:0;
// background-color: #DAC9F2;
// text-align:center;
// width:100%;
// clear: both;
// `;
const FooterTitle = styled.p`
color:#6C6378;
font-size: 1.2rem;
font-weight: bold;
`;
const ExtendedFooterTitle = styled(FooterTitle)`
font-size:0.8rem;
`;
export default function Footer() {
    return (
        <>
            <FooterTitle>DevelopsToday</FooterTitle>
            <FooterTitle>Next.js + React + Redux + TypeScript</FooterTitle>
            <ExtendedFooterTitle>by junior frontend developer Yana Ignatova</ExtendedFooterTitle>
        </>
    )
}