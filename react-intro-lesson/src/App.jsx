import { useState } from 'react';
import './App.scss';
import { textForList } from './data.js'; // переменная-список со значениями для Textli
import Header from './components/Header'; // компонент Хидер
import Textli from './components/Textli'; // компонент li с текстом
import Button from './components/Button'; // кнопка, куда можно поместить текст

export default function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header/>

            <main>
                <section>
                    <h1>Список:</h1>

                    <ul>
                        {textForList.map((item, index) => (
                            <Textli
                                key={index}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </ul>
                </section>
                <Button>Click</Button>
            </main>
        </>
    )
}