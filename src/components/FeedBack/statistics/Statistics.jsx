import { StatisticContainer } from './Statistics.styled';

import propTypes from 'prop-types';

const Statistics = ({ total, positivePercentage, good, neutral, bad }) => {
  return (
    <StatisticContainer>
      <ul>
        <li>
          good<span> {good}</span>
        </li>
        <li>
          neutral<span> {neutral}</span>
        </li>
        <li>
          bad<span> {bad}</span>
        </li>
      </ul>
      <p>
        Total <span>{total()}</span>
      </p>
      <p>
        Positive feedback <span>{positivePercentage()}%</span>
      </p>
    </StatisticContainer>
  );
};

export default Statistics;

Statistics.propTypes = {
  total: propTypes.func.isRequired,
  positivePercentage: propTypes.func.isRequired,
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
};
