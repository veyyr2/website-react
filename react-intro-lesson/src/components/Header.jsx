import logo from '../assets/react.svg';
import { useState } from 'react'; // это хук для динамики состояний элементов

export default function Header() {
    // обновление времени 
    const [timeNow, setTime] = useState(new Date());

    // обновлять каждую секунду переменную timeNow
    setInterval(() => setTime(new Date()), 1000);

    return (
        <header>
            <h1>Hello!</h1>
            <p>Твоё время: {timeNow.toLocaleTimeString()}</p>
            <img src={logo} alt="" />
        </header>
    );
}
