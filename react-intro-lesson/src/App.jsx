import './App.scss'; // стили
import { useState } from 'react';
import Header from './components/Header'; // компонент Хидер
import Footer from './components/Footer'; // компонент футер
import TabsSection from './components/TabsSection'; // компонент с кнопками переключения страниц
import MainSection from './components/MainSection'; // главная страница
import FeedbackSection from './components/FeedbackSection'; // страница фидбека
import EffectSection from './components/EffectSection'; // страница эффектов

export default function App() {
    const [tab, setTab] = useState('feedback');

    return (
        <>
            <Header />
            <TabsSection active={tab} onChange={(current) => setTab(current)} />

            <main>
                {/* если нажали главная страница */}
                {tab === 'main' && <MainSection />}
                {/* если нажали обратная связь */}
                {tab === 'feedback' && <FeedbackSection />}
                {/* если нажали обратная связь */}
                {tab === 'effect' && <EffectSection />}
            </main>

            <Footer />
        </>
    )
}