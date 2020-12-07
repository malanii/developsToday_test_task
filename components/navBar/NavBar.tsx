import styled from "styled-components";
import NavLink from "./navLink/NavLink";
const Nav = styled.ul`
  margin: 0;
  padding: 1rem 3rem;
  background-color: #dac9f2;
  display: flex;
  justify-content: space-between;
`;
const NavItem = styled.li`
  list-style-type: none;
`;
export default function NavBar() {
  return (
    <Nav>
      <NavItem>
        <NavLink path={"/"} linkName={"Posts"} />
      </NavItem>
      <NavItem>
        <NavLink path={"/posts/new"} linkName={"Add post"} />
      </NavItem>
    </Nav>
  );
}
