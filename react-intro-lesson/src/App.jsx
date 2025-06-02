import { useState } from 'react'; // это хук для динамики состояний элементов
import './App.scss';
import { textForList, textForButtons } from './data.js'
import Header from './components/Header'; // компонент Хидер
import Textli from './components/Textli'; // компонент li с текстом
import Button from './components/Button'; // компонент кнопка, куда можно поместить текст

export default function App() {
    const [content, setContent] = useState('loreq'); // динамика контента от кнопок

    // дебаг
    console.log('App render')

    // функция для изменения контента внутри тега p
    function listenClick(type) {
        setContent(type)
    }

    return (
        <>
            <Header />

            <main>
                <section>
                    <h1>Список:</h1>
                    <ul>
                        {/* Вывод всех элемонтов списка */}
                        {textForList.map((item, index) => (
                            <Textli
                                key={index}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </ul>
                </section>

                <Button onClick={() => listenClick(textForButtons.lord)}>
                    Click1
                </Button>

                <Button onClick={() => listenClick(textForButtons.main)}>
                    Click2
                </Button>

                <Button onClick={() => listenClick(textForButtons.adviser)}>
                    Click3
                </Button>

                <p>{content}</p>
            </main>
        </>
    )
}