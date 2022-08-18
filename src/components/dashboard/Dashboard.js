// Function
import { getKelvinToCelcius } from "../../modules/Converter";

// Node Modules
import styled from "styled-components";
import {
  UilWind,
  UilWater,
  UilTemperatureQuarter,
  UilTear,
  UilExternalLinkAlt,
  UilAngleDown
} from "@iconscout/react-unicons";

// Components
import WeatherCard from "./WeatherCard";
import HeadingSection from "./HeadingSection";
import HeaderDashboard from "./HeaderDashboard";
import {
  AreaChart,
  Area,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis
} from "recharts";

// Styled Component
const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 2em;
  box-sizing: border-box;
  padding: 0 2em;
  grid-area: dashboard;
  grid-column: span 5;
  overflow-y: auto;
  overflow-x: hidden;
  @media (max-width: 900px) {
    grid-column: span 10;
    height: 50vh;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #f5f7fc;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #4d65b4;
    border-radius: 10px;
  }
`;

const OverviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1em;
`;

const ChartContainer = styled.div`
  transform: translateX(-30px);
  z-index: 98;
  &,
  & > div.recharts-wrapper,
  & svg {
    width: calc(100% + 12px) !important;
    height: auto !important;
  }
`;

function Dashboard({ setQuery, submitCity, data }) {
  // Format data to use for chart component
  const getChartData = data => {
    return data.map(item => ({
      Temperature: getKelvinToCelcius(item.main.temp).toFixed(0)
    }));
  };

  return (
    <Main>
      <HeaderDashboard setQuery={setQuery} submitCity={submitCity} />
      <HeadingSection heading="Today's Overview" link="More Details" icon={<UilExternalLinkAlt width={16}/>}/>
      <OverviewContainer>
        <WeatherCard
          icon={<UilTemperatureQuarter />}
          heading="Feels like"
          desc={`${Math.floor(
            getKelvinToCelcius(data.list[0].main.feels_like)
          )}℃`}
        />
        <WeatherCard
          icon={<UilWind />}
          heading="Wind Speed"
          desc={`${data.list[0].wind.speed}km/h`}
        />
        <WeatherCard
          icon={<UilTear />}
          heading="Humidity"
          desc={`${data.list[0].main.humidity}%`}
        />
        <WeatherCard
          icon={<UilWater />}
          heading="Pressure"
          desc={`${data.list[0].main.pressure}mb`}
        />
      </OverviewContainer>
      <HeadingSection link={data.city.name} icon={<UilAngleDown width={16}/>}/>
      <ChartContainer>
        <AreaChart width={1000} height={450} data={getChartData(data.list)}>
          <defs>
            <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4D65B4" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4D65B4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Temperature"
            stroke="#4D65B4"
            fill="url(#colorTemp)"
          />
        </AreaChart>
      </ChartContainer>
    </Main>
  );
}

Dashboard.defaultProps = {};

export default Dashboard;
