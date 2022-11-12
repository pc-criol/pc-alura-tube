import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";


function HomePage() {
  return (
    <>
      <CSSReset />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <Menu />
          <Header />
          <TimeLine playlists={config.playlists}>Conteúdo</TimeLine>
        </div>
      
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user_info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  .user_info h2 {
    font-size: 24px;
  }
  .user_info p {
    font-size: 16px;
    color: #666;
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner.jpg" /> */}
      <section className="user_info">
        <img src={`https://github.com/${config.github}.png`} />
        <div key={config.github}>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function TimeLine(props) {
  const playlistNames = Object.keys(props.playlists);
  //   Statement
  //   Retorno por expressão
  return playlistNames.map((playlist) => {
    const videos = props.playlists[playlist];
    console.log(videos);
    return (
      <StyledTimeline key={playlist}>
        <section>
          <h2>{playlist}</h2>
          <div>
            {videos.map((video) => {
              return (
                <a href={video.url} key={video.url}>
                  <img src={video.thumb} />
                  <span>{video.title}</span>
                </a>
              );
            })}
          </div>
        </section>
      </StyledTimeline>
    );
  });
}
