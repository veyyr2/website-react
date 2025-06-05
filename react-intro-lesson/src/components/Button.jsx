export default function Button ({ children, isActive, ...props }) {

    return (
        <button className={isActive ? "button active" : "active"} {...props}>
            {children}
        </button>
    )
}