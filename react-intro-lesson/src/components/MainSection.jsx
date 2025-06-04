import { useState } from 'react'; // это хук для динамики состояний элементов
import Button from './Button.jsx'; // компонент кнопка
import Textli from './Textli.jsx'; // компонент li для списка с текстом из data.js
import { textForList, textForButtons } from '../data.js'

export default function MainSection() {
    const [contentType, setContentType] = useState(); // динамика контента от кнопок

    // функция для изменения контента внутри тега p
    function listenClick(type) {
        // изменить переменную contentType
        setContentType(type);
    }


    return (
        <>
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

            {/* Вывести контент от нажатой кнопки */}
            <p>{contentType}</p>
        </>
    )
}