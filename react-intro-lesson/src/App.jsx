import { useState } from 'react'; // это хук для динамики состояний элементов
import './App.scss';
import { textForList } from './data.js'; // переменная-список со значениями для Textli
import { textForButtons } from './data.js'; // переменная-объект с текстом для кнопок
import Header from './components/Header'; // компонент Хидер
import Textli from './components/Textli'; // компонент li с текстом
import Button from './components/Button'; // компонент кнопка, куда можно поместить текст

export default function App() {
    const [content, setContent] = useState('loreq');

	function countClick(type) {
		setContent(type);
	}

    return (
        <>
            <Header />

            <main>
                <section>
                    <h1>Список:</h1>

                    <ul>
                        {textForList.map((item, index) => (
                            <Textli
                                key={index}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </ul>
                </section>
                <Button onClick={() => countClick('lord')}> Click1 </Button>
                <Button onClick={() => countClick('main')}>Click2</Button>
                <Button onClick={() => countClick('adviser')}>Click3</Button>
                <p>{content}</p>
            </main>
        </>
    )
}