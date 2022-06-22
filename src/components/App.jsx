import FeedbackOptions from "./FeedBack/FeedbackOptions";
import React, { Component } from "react";
import Statistics from "./FeedBack/Statistics";
import Section from "./FeedBack/Section";
import Notification from "./FeedBack/Notification";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleFeedback = e => {
    const eventName = e.target.textContent.toLowerCase();
    this.setState(prevState => {

      return {
        [eventName]: prevState[eventName] + 1,
      };
    });
  };

  countTotalFeedback = () => {

    const ArrayValuses = Object.values(this.state);

   const sumWithInitial = ArrayValuses.reduce(
     (previousValue, currentValue) => previousValue + currentValue
   );

   return sumWithInitial
 };

 countPositiveFeedbackPercentage = () => {
    
  return this.state.good ? Math.round(this.state.good / this.countTotalFeedback() * 100) : 0      
}

  render() {

    const {good, neutral, bad} = this.state

    return (
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions options={this.state} onLeaveFeedback={this.handleFeedback}/>
        </Section>
        <Section title={"Section"}>
         {this.state.good || this.state.neutral || this.state.bad ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/> : <Notification massage={"There is no feedback"}/>}
        </Section>
      </div>
    )
  }
}
