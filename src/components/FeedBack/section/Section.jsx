import { Title } from "./Section.styled"

import propTypes from 'prop-types';

function Section ({title, children}) {
    return (
        <div>
            <Title>{title}</Title>
            {children}
        </div>
    )
}

export default Section

Section.propTypes = {
    title: propTypes.string
}