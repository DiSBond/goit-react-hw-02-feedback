import { FBOContainer } from "./FeedBackOptions.styled";

import propTypes from 'prop-types';


const FeedbackOptions = ({options, onLeaveFeedback}) => {

    return (

        <FBOContainer>
        {options.map(item => {
        return <button key={item} onClick={onLeaveFeedback}>{item}</button>
      })}
        </FBOContainer>
    
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  option: propTypes.objectOf(propTypes.string),
  onLeaveFeedback: propTypes.func,
}