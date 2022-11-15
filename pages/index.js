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
  return (
    <>
      <CSSReset />
        <StyledHomePage>
          <Menu />
          <Header />
          <TimeLine playlists={config.playlists}>Conteúdo</TimeLine>
          <Favorites favorites={config.favorites}/>
        </StyledHomePage>
    </>
  );
}

export default HomePage;