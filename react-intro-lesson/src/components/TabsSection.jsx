import Button from './Button'; // компонент кнопка, куда можно поместить текст

export default function TabsSection() {

    return (
        <section className='container-nav-buttons'>
            <Button>Главная</Button>
            <Button>Обратная связь</Button>
        </section>
    )
}