// Node Modules
import styled from "styled-components";
import {
  UilBell,
  UilUser,
  UilWind,
  UilWater,
  UilSun,
  UilCloudShowersHeavy
} from "@iconscout/react-unicons";

// Components
import WeatherCard from "./WeatherCard";
import HeadingSection from "./HeadingSection";
import HeaderDashboard from "./HeaderDashboard";


// Styled Component 
const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2em;
  box-sizing: border-box;
  margin: 0 2em;
  grid-area: dashboard;
  grid-column: span 5;
  @media (max-width: 900px) {
    grid-column: span 10;
  }
`;

const OverviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1em;
`;

function Dashboard({ setQuery }) {
  return (
    <Main>
      <HeaderDashboard setQuery={setQuery} />
      <HeadingSection heading="Today's Overview" link="More Details"/>
      <OverviewContainer>
        <WeatherCard icon={<UilWind />} heading="Wind Speed" desc="20m" />
        <WeatherCard icon={<UilSun />} heading="UV Index" desc="20m" />
        <WeatherCard icon={<UilWater />} heading="Pressure" desc="20m" />
        <WeatherCard
          icon={<UilCloudShowersHeavy />}
          heading="Rain Chance"
          desc="20m"
        />
      </OverviewContainer>
      <HeadingSection />
    </Main>
  );
}

export default Dashboard;
