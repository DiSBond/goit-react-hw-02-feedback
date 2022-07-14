
import { StatisticContainer } from "./Statistics.styled";

import propTypes from 'prop-types';

const Statistics = ({total, positivePercentage, good, neutral, bad}) => {
    return (
        <StatisticContainer>
                <ul>
                    <li>good<span> {good}</span></li>
                    <li>neutral<span> {neutral}</span></li>
                    <li>bad<span> {bad}</span></li>
                </ul>
                <p>Total  <span>{total()}</span></p>
                <p>Posotove feedback  <span>{positivePercentage()}%</span></p>
        </StatisticContainer>
    )
}

export default Statistics

Statistics.propTypes = {
    ArrayState: propTypes.arrayOf(propTypes.string),
    total: propTypes.func,
    positivePercentage: propTypes.func,
    MainState: propTypes.objectOf(propTypes.number)
}