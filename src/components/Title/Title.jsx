import PropTypes from "prop-types";
import React from "react";
import { Header, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Title = props => {
  const { size, title, theme } = props;
  return (
    <Header as={size} icon textAlign="center">
      <Image src={`/icons/Theme${theme}/045-weather.png`} />
      <Header.Content>{title}</Header.Content>
    </Header>
  );
};

export default Title;

Title.propTypes = {
  size: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  theme: PropTypes.number.isRequired
};
