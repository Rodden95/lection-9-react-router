import Container from "../Components/Container/Container";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/houses">Houses</Link>
      <Outlet />
    </Container>
  )
}