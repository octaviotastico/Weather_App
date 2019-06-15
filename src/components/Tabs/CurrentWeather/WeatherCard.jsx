import PropTypes from "prop-types";
import React from "react";
import { Grid, Image, Statistic, Tab } from "semantic-ui-react";
import {
  getTemp,
  getIconName,
  unixToHoursMedium,
  getWindDir
} from "../../../helpers/index.ts";
import { Cell } from "../../Modular/index.ts";

const WeatherCard = props => {
  const {
    state,
    iconName,
    temp,
    humidity,
    pressure,
    minTemp,
    maxTemp,
    windSpeed,
    windDir,
    clouds,
    sunrise,
    sunset,
    unit,
    theme
  } = props;
  return (
    <Tab.Pane attached={false}>
      <Grid columns={3} divided stackable>
        <Grid.Row stretched>
          <Grid.Column stretched>
            <Grid.Row>
              <h3 style={{ fontSize: 25 }}>State</h3>
            </Grid.Row>
            <Grid.Row>
              {
                <Image
                  src={getIconName(iconName, theme)}
                  size="medium"
                  verticalAlign="middle"
                />
              }
            </Grid.Row>
            <Grid.Row>
              <Statistic>
                <Statistic.Label
                  style={{ paddingTop: "40%", fontWeight: "bold" }}
                >
                  {state}
                </Statistic.Label>
              </Statistic>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <Cell
              image="039-thermometer.png"
              title="Temperature"
              content={getTemp(temp, unit)}
              theme={theme}
            />

            <Cell
              image="018-high temperature.png"
              title="Max Temperature"
              content={getTemp(maxTemp, unit)}
              theme={theme}
            />

            <Cell
              image="022-low temperature.png"
              title="Min Temperature"
              content={getTemp(minTemp, unit)}
              theme={theme}
            />

            <Cell
              image="004-clouds.png"
              title="Clouds"
              content={`${clouds.toString()} %`}
              theme={theme}
            />

            <Cell
              image="048-wind.png"
              title="Wind Speed"
              content={`${windSpeed.toString()} M/s`}
              theme={theme}
            />
          </Grid.Column>
          <Grid.Column>
            <Cell
              image="012-dawn.png"
              title="Sunrise"
              content={`${unixToHoursMedium(sunrise)} Hs`}
              theme={theme}
            />

            <Cell
              image="037-sunset.png"
              title="Sunset"
              content={`${unixToHoursMedium(sunset)} Hs`}
              theme={theme}
            />

            <Cell
              image="019-humidity.png"
              title="Humidity"
              content={`${humidity.toString()}%`}
              theme={theme}
            />

            <Cell
              image="026-pressure.png"
              title="Preassure"
              content={`${pressure.toString()} hPa`}
              theme={theme}
            />

            <Cell
              image="047-weathercock.png"
              title="Wind Direction"
              content={getWindDir(windDir)}
              theme={theme}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Tab.Pane>
  );
};

export default WeatherCard;

WeatherCard.propTypes = {
  state: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDir: PropTypes.number.isRequired,
  clouds: PropTypes.number.isRequired,
  sunrise: PropTypes.number.isRequired,
  sunset: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  theme: PropTypes.number.isRequired
};
