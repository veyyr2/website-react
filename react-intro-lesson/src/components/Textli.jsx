export default function Textli({ title, description }) {
    return (
        <li>
            <p>
                <strong>{title}</strong> {description}
            </p>
        </li>
    )
}