export default function ModalWindow({ children, ...props }) {

    return <dialog {...props}>{children}</dialog>
}