import Button from './Button' // компонент кнопка, куда можно поместить текст

export default function TabsSection({ active, onChange }) {
    return (
        <section className="container-nav-buttons">
            <Button
                onClick={() => onChange('main')}
                isActive={active == 'main'}
            >
                Главная
            </Button>
            <Button
                onClick={() => onChange('feedback')}
                isActive={active == 'feedback'}
            >
                Обратная связь
            </Button>
        </section>
    )
}
