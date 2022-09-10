import FeedbackOptions from './FeedBack/FeedbackOptions/FeedbackOptions';
import { useState } from 'react';
import Statistics from './FeedBack/statistics/Statistics';
import Section from './FeedBack/section/Section';
import Notification from './FeedBack/notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = feetback => {
    switch (feetback) {
      case 'good':
        setGood(prevstate => prevstate + 1);
        break;
      case 'neutral':
        setNeutral(prevstate => prevstate + 1);
        break;
      case 'bad':
        setBad(prevstate => prevstate + 1);
        break;
      default:
        console.log('error');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return good ? Math.round((good / countTotalFeedback()) * 100) : 0;
  };

  const ArrayState = ['good', 'neutral', 'bad'];

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={ArrayState}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title={'Section'}>
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification massage={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};
