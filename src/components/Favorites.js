import styled from "styled-components";

export default function Favorites(props) {
  const favorites = props.favorites;
  //   Statement
  //   Retorno por expressão
  return (
    <StyledFavorites key={favorites}>
      <h2>AluraTubes Favoritos</h2>
      {favorites.map((favorite) => {
        return (
          <section className="user_info">
            <img src={`${favorite.pic}`} />
            <div key={favorite.name}>
              <a href={`https://www.youtube.com/c/${favorite.channel}`} target="">
                @{favorite.name}
              </a>
            </div>
          </section>
        );
      })}
    </StyledFavorites>
  );
}

const StyledFavorites = styled.div`
  gap: 16px;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
    margin-left: 16px;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  
  .user_info {
    display: flex;
    align-items: center;
    padding: 16px 32px;
    gap: 16px;
    overflow: hidden;
    float: left;
  }
 
  .user_info p {
    font-size: 16px;
    color: #666;
  }
  section {
    /* div {
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
    } */
  }
`;
