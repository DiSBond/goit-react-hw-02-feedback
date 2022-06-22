import { FBOContainer } from "./FeedBackOptions.styled";
const FeedbackOptions = ({options, onLeaveFeedback}) => {

    const ArrayState = Object.keys(options);

    return (

        <FBOContainer>
        {ArrayState.map(item => {
        return <button key={item} onClick={onLeaveFeedback}>{item}</button>
      })}
        </FBOContainer>
    
    )
}

export default FeedbackOptions;

