import React, { Component } from "react";
import { StatisticContainer } from "./Statistics.styled";

class Statistics extends Component {
    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad
      }


     render() {
        const ArrayState = Object.keys(this.state);
         
        return (
            <StatisticContainer>
                    <ul>
                    {ArrayState.map(elem => {
                    return <li key={elem}>{elem}  <span>{this.props[elem]}</span></li>
                    })}
                    </ul>
                    <p>Total  <span>{this.props.total()}</span></p>
                    <p>Posotove feedback  <span>{this.props.positivePercentage()}%</span></p>
            </StatisticContainer>
        )
         
     }
}

export default Statistics