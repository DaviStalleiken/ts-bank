interface ICard {
    id: number,
    paragraph: string,
    details: string
}

export const Card = ({ id, paragraph, details }: ICard) => {
    return (
        <div>
            <h1>Card Component {id}</h1>
            <p>{paragraph}</p>

            <p>Card details</p>

            <p>{details}</p>
        </div>
    )
}