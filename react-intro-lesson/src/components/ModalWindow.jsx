import { createPortal } from 'react-dom' // для модальных окон
import { useRef, useEffect } from 'react' // референс для dialog

export default function ModalWindow({ children, open }) {
    const thisDialog = useRef() // ссылка на dialog

    // для исправления бага с useRef, а иначе он undefined
    useEffect(
        // функция, когда будет выполняться, когда выполнится эффект
        () => {
            // проверка на открытие окна
            if (open) {
                thisDialog.current.showModal() // показать окно
            } else {
                thisDialog.current.close() // спрятать окно
            }
        },
        [open] // массив для указания от чего зависит эффект
    )


    return createPortal(
        <dialog ref={thisDialog}>
            {children}
        </dialog>,
        document.getElementById('forModal') // параметр, где нужно будет рендерить модалку (в index.html)
    ) 
}
