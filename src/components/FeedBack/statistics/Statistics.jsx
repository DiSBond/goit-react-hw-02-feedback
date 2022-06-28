
import { StatisticContainer } from "./Statistics.styled";

import propTypes from 'prop-types';

// class Statistics extends Component {
//     state = {
//         good: this.props.good,
//         neutral: this.props.neutral,
//         bad: this.props.bad
//       }


//      render() {
//         const ArrayState = Object.keys(this.state);
         
//         return (
//             <StatisticContainer>
//                     <ul>
//                     {ArrayState.map(elem => {
//                     return <li key={elem}>{elem}  <span>{this.props[elem]}</span></li>
//                     })}
//                     </ul>
//                     <p>Total  <span>{this.props.total()}</span></p>
//                     <p>Posotove feedback  <span>{this.props.positivePercentage()}%</span></p>
//             </StatisticContainer>
//         )
         
//      }
// }



const Statistics = ({ArrayState, total, positivePercentage, MainState}) => {
    return (
        <StatisticContainer>
                <ul>
                {ArrayState.map(elem => {
                return <li key={elem}>{elem}<span> {MainState[elem]}</span></li>
                })}
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