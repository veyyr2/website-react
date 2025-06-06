import { useState } from "react";
import Button from "./Button"; // кнопка кастомная
import ModalWindow from "./ModalWindow";


export default function EffectSection() {
    const [modal, setModal] = useState(false) // показать/выключить модальное окно

    // открыть модальное окно
    function openModal () {

    }

    return(
        <section>
            <h3>Effects</h3>
            <Button onClick={() => openModal()}>Открыть информацию</Button>

            <ModalWindow open={modal}>
                <h3>Здесь есть текст</h3>
                <p>Тут будут разные эффекты!!!</p>
            </ModalWindow>
        </section>
    )
}