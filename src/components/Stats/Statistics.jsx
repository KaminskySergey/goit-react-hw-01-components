import {Title, StatsList, ItemStats, LabelFormat,  } from "./Stats.styled";

import PropTypes from 'prop-types';
import Box from 'components/box/Box';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export function Statistics({title, stats}){
    return (
        <Box as="section" display="flex" justifyContent="space-between" m={32} alignItems="center" flexDirection="column"  bg="rgb(114, 15, 220)"   boxShadow="0 1px 4px rgb(0 0 0), -23px 0 20px -23px rgb(0 0 0 / 80%), 23px 0 20px -23px rgb(0 0 0 / 80%), 0 0 40px rgb(0 0 0 / 10%) inset" >
  <Title>{title}</Title>

  <StatsList>
    {stats.map(el => (
      <ItemStats  key={el.id} backgroundColor={getRandomHexColor()}>
      <LabelFormat>{el.label}</LabelFormat>
      <span className="percentage">{el.percentage}%</span>
    </ItemStats>
    ))}
    
    
  </StatsList>
</Box>
    )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
}