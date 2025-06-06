import logo from '../assets/react.svg';
import { useEffect, useState } from 'react'; // это хук для динамики состояний элементов

export default function Header() {
    // обновление времени 
    const [timeNow, setTime] = useState(new Date());

    useEffect(
        () => {
            // обновлять каждую секунду переменную timeNow
            const interval = setInterval(() => setTime(new Date()), 1000)

            // очищать интервал для оптимизации
            return () => clearInterval(interval)
        },
        [] // здесь пусто
    )

    return (
        <header>
            <h1>Hello!</h1>
            <p>Твоё время: {timeNow.toLocaleTimeString()}</p>
            <img src={logo} alt="" />
        </header>
    );
}
