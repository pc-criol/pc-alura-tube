import React from "react";
import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import TimeLine from "../src/components/Timeline";
import Favorites from "../src/components/Favorites";
import Header from "../src/components/Header";
import styled from "styled-components";


const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

function HomePage() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <>
      <CSSReset />
        <StyledHomePage>
          <Menu searchValue={searchValue} setSearchValue={setSearchValue} />
          <Header />
          <TimeLine searchValue={searchValue} playlists={config.playlists}>Conteúdo</TimeLine>
          <Favorites favorites={config.favorites}/>
        </StyledHomePage>
    </>
  );
}

export default HomePage;