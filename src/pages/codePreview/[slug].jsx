import { useParams, Link, useNavigate } from "react-router-dom";
import { componentsData } from "../../lib/componentsData";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import NaeFound from "../../components/404";
import { useState } from "react";
import './style.css';

export default function SlugPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = componentsData[slug];
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!data) return <NaeFound />;

  const handleCopy = () => {
    navigator.clipboard.writeText(data.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categories = [
    { name: "Components", items: ["inversion-nav", "Glass Surface"] },
  ];

  return (
    <div className="layout-root">
      <button id="back-button" onClick={() => navigate('/intro')}>back</button>
      <aside className="sidebar">
        {categories.map((cat) => (
          <div key={cat.name} className="sidebar-group">
            <h4 className="sidebar-label">{cat.name}</h4>
            <div className="sidebar-line-wrapper">
              {cat.items.map((itemKey) => (
                <Link
                  key={itemKey}
                  to={`/preview/${itemKey}`}
                  className={`sidebar-item ${slug === itemKey ? "active" : ""}`}
                >
                  {componentsData[itemKey]?.title || itemKey}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </aside>
      <main className="slug-container">
        <header className="header-wrapper">
          <h1 className="main-title">{data.title}</h1>
          <p className="sub-description">{data.description}</p>
        </header>

        <div className="button-row">
          <div className="toggle-pill-container">
            <button
              className={`pill-btn ${!showCode ? "active" : ""}`}
              onClick={() => setShowCode(false)}
            >
               Preview
            </button>
            <button
              className={`pill-btn ${showCode ? "active" : ""}`}
              onClick={() => setShowCode(true)}
            >
              {"</>"} Code
            </button>
          </div>
        </div>

        <div className="box glass-frame">
          <button className="copy-floating-btn" onClick={handleCopy}>
            {copied ? "✓ Copied" : "Copy"}
          </button>

          <div className="content-area">
            {showCode ? (
              <SyntaxHighlighter
                language="html"
                style={oneDark}
                customStyle={{
                  margin: 0,
                  background: "transparent",
                  padding: "40px",
                  fontSize: "0.95rem",
                  lineHeight: "1.7",
                  overflowX: "hidden",
                }}
                codeTagProps={{ style: { backgroundColor: "transparent", } }}
              >
                {data.code}
              </SyntaxHighlighter>
            ) : (
              <div className="preview-mode">
                <img src={data.image} alt={data.title} className="preview-img" />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
