export default function Button ({ children, onClick, isActive }) {

    return (
        <button className={isActive ? "button active" : "active"} onClick={onClick}>
            {children}
        </button>
    )
}
