import { useState } from 'react'; // это хук для динамики состояний элементов
import './App.scss';
import { textForList, textForButtons } from './data.js'
import Header from './components/Header'; // компонент Хидер
import Textli from './components/Textli'; // компонент li с текстом
import Button from './components/Button'; // компонент кнопка, куда можно поместить текст

export default function App() {
    const [contentType, setContentType] = useState(); // динамика контента от кнопок

    // функция для изменения контента внутри тега p
    function listenClick(type) {
        // изменить переменную contentType
        setContentType(type);
    }

    return (
        <>
            <Header />

            <main>
                <section>
                    <h1>Список:</h1>
                    <ul>
                        {/* Вывод всех элементов списка */}
                        {textForList.map((i, index) => (
                            <Textli
                                key={index}
                                title={i.title}
                                description={i.description}
                            />
                        ))}
                    </ul>
                </section>

                <Button
                    isActive={contentType == textForButtons.lord}
                    onClick={() => listenClick(textForButtons.lord)}
                >
                    Click1
                </Button>

                <Button
                    isActive={contentType == textForButtons.main}
                    onClick={() => listenClick(textForButtons.main)}
                >
                    Click2
                </Button>

                <Button
                    isActive={contentType == textForButtons.adviser}
                    onClick={() => listenClick(textForButtons.adviser)}
                >
                    Click3
                </Button>

                <p>{contentType}</p>
            </main>
        </>
    )
}