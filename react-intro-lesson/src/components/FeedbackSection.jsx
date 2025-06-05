import Button from "./Button" // компонент кнопка

export default function FeedbackSection() {

    return (
        <section>
            <h3>Обратная связь</h3>

            <form action="">
                <label htmlFor="name">Ваше имя:</label>
                <input type="text" id="name" className="control" />

                <label htmlFor="reason">Причина</label>
                <select id="reason" className="control">
                    <option value="error">Ошибка</option>
                    <option value="notError">НЕ ошибка</option>
                </select>

                <Button>
                    Отправить форму
                </Button>
            </form>
        </section>
    )
}