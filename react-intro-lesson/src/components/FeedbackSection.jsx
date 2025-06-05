import Button from './Button' // компонент кнопка
import { useState } from 'react'

export default function FeedbackSection() {
    const [name, setName] = useState('') // следить за изменением в форме ИМЯ
    const [reason, setReason] = useState('notError') // следить за изменением в форме ПРИЧИНА

    // функция для изменения значения в имени
    function handlerNameChange(event) {
        setName(event.target.value)
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
                />

                <label htmlFor="reason">Причина</label>
                <select
                    id="reason"
                    className="control"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                >
                    <option value="error">Ошибка</option>
                    <option value="notError">НЕ ошибка</option>
                </select>

                <Button>Отправить форму</Button>
            </form>
        </section>
    )
}
