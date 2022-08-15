import FeedbackOptions from './FeedBack/FeedbackOptions/FeedbackOptions';
import React, { Component } from 'react';
import Statistics from './FeedBack/statistics/Statistics';
import Section from './FeedBack/section/Section';
import Notification from './FeedBack/notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

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

    return sumWithInitial;
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const ArrayState = Object.keys(this.state);

    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={ArrayState}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title={'Section'}>
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification massage={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}
