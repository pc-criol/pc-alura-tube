import styled from "styled-components";
import config from "../../config.json";
import Banner from "./Banner";


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

export default function Header() {
  return (
    <StyledHeader>
      <Banner />
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