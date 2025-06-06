import { useState } from "react";
import Button from "./Button"; // кнопка кастомная
import ModalWindow from "./ModalWindow"; // компонент модальное окно


export default function EffectSection() {
    const [modal, setModal] = useState(false) // показать/выключить модальное окно

    // открыть модальное окно
    function openModal () {
        setModal(true)
    }

    return(
        <section>
            <h3>Effects</h3>
            <Button onClick={() => openModal()}>Открыть информацию</Button>

            <ModalWindow open={modal}>
                <h3>Здесь есть текст</h3>
                <p>Тут будут разные эффекты!!!</p>
                <button onClick={() => setModal(false)}>Закрыть</button>
            </ModalWindow>
        </section>
    )
}
