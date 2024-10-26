import React, { useState, useEffect } from 'react';
import { Cherry, FileText, Search, Users, Moon, Sun } from 'lucide-react';
import '../styles/WikiPage.css';

export default function WikiPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Проверяем сохраненную тему при загрузке
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <div className={`wiki-page ${isDarkMode ? 'dark-theme' : ''}`}>
      {/* Верхняя навигация */}
      <nav className="top-nav">
        <div className="nav-left">
          <a href="/" className="logo">
            <Cherry size={24} className="cherry-icon" />
            <span>Вишневые Аллеи</span>
          </a>
        </div>
        <div className="nav-links">
          <a href="/Pages/" className="nav-link">
            <FileText size={20} />
            <span>Все Статьи Вики</span>
          </a>
          <a href="/category/" className="nav-link">
            <Search size={20} />
            <span>Категории</span>
          </a>
          <a href="/sozdateli/" className="nav-link">
            <Users size={20} />
            <span>Создатели/Редакторы</span>
          </a>
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Основной контент */}
      <main className="main-content">
        <h1>Добро пожаловать на Вишневые Аллеи Вики!</h1>

        <div className="content-box">
          <p>
            Вишневые аллеи - <a href="https://discord.com/invite/wun8gmzdhJ" className="link">Дискорд сервер</a> комьюнити ютуб креатора <a href="https://www.youtube.com/@cherru_" className="link">Cherru (Твинкл)</a>, делает ролики по Сюжетным сезонам Лололошки
          </p>
        </div>

        <div className="content-box">
          <h2>Основная информация о сервере</h2>
          <p>
            Вишнёвые аллеи - <a href="https://discord.gg/xqTMDz7CXK" className="link">дискорд-сервер</a>, который был создан для общения и поддержки автора <a href="/Cherru/" className="link">Cherru</a> (художница/аниматорша). Основная тематика сервера - майнкрафт ютубер MrLololoshka и сама художница. Сервер был создан 24 июля 2022 года, но был открыт 1-го августа 2022-го года. Помощь с созданием сервера художнице (Cherru) предложил Дункан (duncan_reivun), который и заложил первый и значимый фундамент для всего сервера.
          </p>
        </div>
      </main>
    </div>
  );
}