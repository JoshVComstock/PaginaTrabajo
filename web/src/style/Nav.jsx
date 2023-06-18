import styled from "styled-components";
import colors from "./colors";
import {Link} from "react-router-dom";

    const Nav = styled.nav`
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: ${colors.primarybac};
      padding: 10px;
    `;
    const Navimg = styled.img`
      width: 50px;
      height: 50px;
      border-radius: 70%;
    `;
    const Navdiv = styled.div`
      display: flex;
      gap: 20px;
    `;
const Nava=styled.Link


