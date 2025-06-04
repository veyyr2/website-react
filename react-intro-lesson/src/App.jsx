import './App.scss'; // стили
import { useState } from 'react';
import Header from './components/Header'; // компонент Хидер
import Footer from './components/Footer'; // компонент футер
import TabsSection from './components/TabsSection';
import MainSection from './components/MainSection'; // компонент контента главной страницы
import FeedbackSection from './components/FeedbackSection'; // компонент контента фидбека

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
            </main>

            <Footer />
        </>
    )
}