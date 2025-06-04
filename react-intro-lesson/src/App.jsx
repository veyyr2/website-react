import './App.scss'; // стили
import Header from './components/Header'; // компонент Хидер
import Footer from './components/Footer'; // компонент футер
// import TabsSection from './components/TabsSection'; // компонент секция с кнопками переключения страниц
import MainSection from './components/MainSection'; // компонент контента главной страницы
import FeedbackSection from './components/FeedbackSection'; // компонент контента фидбека

export default function App() {
    

    return (
        <>
            <Header />

            <main>
                <MainSection/>
            </main>

            <Footer/>
        </>
    )
}