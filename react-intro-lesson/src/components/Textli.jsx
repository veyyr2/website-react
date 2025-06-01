export default function Textli(props) {
    return (
        <li>
            <p>
                <strong>{props.title}</strong> {props.description}
            </p>
        </li>
    )
}