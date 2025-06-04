import { useState } from 'react'; // это хук для динамики состояний элементов
import './App.scss';
import { textForList, textForButtons } from './data.js'
import Header from './components/Header'; // компонент Хидер
import Footer from './components/Footer'; // компонент футер
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
                        {/* Автоматизация создания элементов списка */}
                        {textForList.map((i, index) => (
                            <Textli
                                key={index}
                                title={i.title}
                                description={i.description}
                            />
                        ))}
                    </ul>
                </section>

                {/* Автоматизация создания кнопок */}
                {textForButtons.map((i, index) => (
                    <Button
                        key={index}
                        isActive={contentType == i.contentText}
                        onClick={() => listenClick(i.contentText)}
                    >
                        {i.nameButton}
                    </Button>
                ))}

                <p>{contentType}</p>
            </main>

            <Footer/>
        </>
    )
}