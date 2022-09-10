import { FBOContainer } from './FeedBackOptions.styled';

import propTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FBOContainer>
      {options.map(item => {
        return (
          <button
            key={item}
            onClick={() => {
              onLeaveFeedback(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </FBOContainer>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
