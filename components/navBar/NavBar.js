import styled from 'styled-components';
import NavLink from "./navLink/NavLink";

const Nav = styled.ul`
margin: 0;
padding:15px;
background-color:#DAC9F2;
display:flex;
justify-content:space-between;
`;
const NavItem = styled.li`
list-style-type: none;
width:20%
`;

export default function NavBar() {
    return (
        <Nav>
                <NavItem><NavLink path={'/'} linkName={'Develops Today'}/></NavItem>
                <NavItem><NavLink path={'/'} linkName={'Posts'}/></NavItem>
                <NavItem><NavLink path={'/posts/new'} linkName={'Add post'}/></NavItem>
        </Nav>
    )
}