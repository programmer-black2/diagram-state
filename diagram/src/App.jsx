import { useState } from 'react'
import './App.css'
import StateDiagram from './components/StateDiagram'
import { diagramExamples } from './data/diagramExamples'

function App() {
  const [selectedExample, setSelectedExample] = useState(diagramExamples[0])
  const [searchTerm, setSearchTerm] = useState('')

  // فیلتر مثال‌ها بر اساس جستجو
  const filteredExamples = diagramExamples.filter(example =>
    example.title.includes(searchTerm) || example.description.includes(searchTerm)
  )

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📊 نمودارهای حالت (State Diagrams)</h1>
        <p>"کاری از علی زندی و پرهام عزیزی در دانشگاه شاهد"</p>
      </header>

      <div className="main-content">
        <aside className="sidebar">
          <h2>انتخاب مثال</h2>

          <div className="search-box">
            <input
              type="text"
              placeholder="🔍 جستجو..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="examples-list">
            {filteredExamples.map((example) => (
              <button
                key={example.id}
                className={`example-button ${selectedExample.id === example.id ? 'active' : ''}`}
                onClick={() => setSelectedExample(example)}
              >
                <span className="example-number">{example.id}</span>
                <span className="example-title">{example.title}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className="diagram-area">
          <StateDiagram
            svgContent={selectedExample.svgContent}
            title={selectedExample.title}
            description={selectedExample.description}
          />

          <div className="legend">
            <h3>راهنما:</h3>
            <ul>
              {/* <li><span className="legend-circle blue"></span> حالت عادی (Normal State)</li> */}
              <li><span className="legend-circle green"></span> حالت پایانی - دایره ضخیم (Final/Accept State)</li>
              <li><span className="legend-circle red"></span> حالت مرده (Dead/Reject State)</li>
              <li><span className="legend-arrow">→</span> گذر (Transition)</li>
              <li><span className="legend-epsilon" style={{ color: '#e91e63', fontWeight: 'bold' }}>ε</span> انتقال اپسیلون (Epsilon Transition)</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
