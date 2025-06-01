import logo from '../assets/react.svg'

let a = 0;

export default function Header() {
    return (
        <header>
        <h3>Hello!</h3>
        <p>Твоё время: {a+1}</p>
        <img src={logo} alt="" />
        </header>
    );
}
