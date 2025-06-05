import Button from './Button' // компонент кнопка
import { useState, useRef } from 'react'

export default function FeedbackSection() {
    const [name, setName] = useState('') // следить за изменением в форме ИМЯ
    const [hasError, setHasError] = useState(false) // чтобы сразу пользователю не выводилась ошибка в инпут полях, что там пусто
    const refInput = useRef(null) // ссылка на второй input

    // функция для изменения значения в имени
    function handlerNameChange(event) {
        setName(event.target.value)
        setHasError(event.target.value.trim().length === 0)
    }

    return (
        <section>
            <h3>Обратная связь</h3>

            <form action="">
                <label htmlFor="name">Ваше имя:</label>
                <input
                    type="text"
                    id="name"
                    className="control"
                    value={name}
                    onChange={handlerNameChange}
                    style={{
                        border: hasError ? '2px solid red' : null,
                        backgroundColor: hasError ? '#fdcfcf' : null,
                    }}
                />

                <label htmlFor="reason">Причина</label>
                <select id="reason" className="control">
                    <option value="error">Ошибка</option>
                    <option value="notError">НЕ ошибка</option>
                </select>

                <div>
                    <h3>Какой-то текст: {refInput.current?.value}</h3>
                    <input ref={refInput} type="text" className="control" />
                </div>

                {/* disabled это кастомный пропс, которого нет в Button */}
                <Button
                    disabled={hasError}
                    title={hasError ? 'В вашей форме есть ошибки!' : null}
                    isActive={!hasError}
                >
                    Отправить форму
                </Button>
            </form>
        </section>
    )
}
