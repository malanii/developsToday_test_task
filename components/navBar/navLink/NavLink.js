import styled from 'styled-components';
import Link from "next/link";
import React from "react";

const LinkStyle = styled.a`
text-decoration:none;
color:#6C6378;
cursor:pointer;
font-size: 1.5rem;
font-weight: bolder;
`;


export default function NavLink({path, linkName}) {
    return (
        <Link href={`${path}`}><LinkStyle>{linkName}</LinkStyle></Link>
    )
}