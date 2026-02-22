import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { componentsData } from '../lib/componentsData';
import './intro.css';

export default function Intro() {
  const navigate = useNavigate();
  const data = componentsData.intro;

  const componentList = Object.entries(componentsData).filter(([key]) => key !== 'intro');

  const categories = [
    { name: "Components", items: ["inversion-nav", "Glass Surface"] },
  ];

  return (
    <div className="layout-root">
      <aside className="sidebar">
        {categories.map((cat) => (
          <div key={cat.name} className="sidebar-group">
            <h4 className="sidebar-label">{cat.name}</h4>
            <div className="sidebar-line-wrapper">
              {cat.items.map((itemKey) => (
                <Link
                  key={itemKey}
                  to={`/preview/${itemKey}`}
                  className="sidebar-item"
                >
                  {componentsData[itemKey]?.title || itemKey}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </aside>


      <main className="slug-container">
        <div className="bg-gradient-overlay" />
        
        <header className="intro-header">
          <span className="badge-zinc">Introduction</span>
          <h1 className="main-title">
            Component Index
          </h1>
          <p className="sub-description">{data.description}</p>
        </header>

        <div className="preview-grid-container">
          <h2 className="grid-label">Available Components</h2>
          <div className="mini-preview-grid">
            {componentList.map(([key, item]) => (
              <div 
                key={key} 
                className="preview-card" 
                onClick={() => navigate(`/preview/${key}`)}
              >
                <div className="preview-img-box">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="preview-info">
                  <h4>{item.title}</h4>
                  <span className="preview-cat">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}