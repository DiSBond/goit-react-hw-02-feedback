import { Title } from "./Section.styled"
function Section ({title, children}) {
    return (
        <div>
            <Title>{title}</Title>
            {children}
        </div>
    )
}

export default Section