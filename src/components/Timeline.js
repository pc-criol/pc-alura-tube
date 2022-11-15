import styled from "styled-components";

export default function TimeLine({searchValue, ...props}) {
  const playlistNames = Object.keys(props.playlists);
  //   Statement
  //   Retorno por expressão

  console.log(props.searchValue);

  return playlistNames.map((playlist) => {
    const videos = props.playlists[playlist];
    return (
      <StyledTimeline key={playlist}>
        <section key={videos}>
          <h2>{playlist}</h2>
          <div key={videos}>
            {videos
              .filter((video) => {
                const videoTitleNormalized = video.title.toLowerCase();
                const searchValueNormalized = searchValue.toLowerCase();
                return ( videoTitleNormalized.includes(searchValueNormalized));
              })
              .map((video) => {
                return (
                  <a href={video.url} key={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            s
          </div>
        </section>
      </StyledTimeline>
    );
  });
}

const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;
