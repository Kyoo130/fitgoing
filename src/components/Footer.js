import React, { useState } from "react";
import { Grid } from "../elements";
import { Link } from "react-router-dom";

const Footer = () => {
  const [menu, setMenu] = useState([
    { id: 1, name: "홈", link: "/" },
    { id: 2, name: "게시글 작성", link: "/" },
    { id: 3, name: "프로필", link: "/" },
  ]);

  return (
    <footer>
      <Grid footer>
        {menu.map((item) => (
          <li key={item.id}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </Grid>
    </footer>
  );
};

export default Footer;
