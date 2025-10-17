import React from 'react';
import './StateDiagram.css';

const StateDiagram = ({ svgContent, title, description }) => {
    return (
        <div className="diagram-container">
            <div className="diagram-header">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="diagram-canvas" dangerouslySetInnerHTML={{ __html: svgContent }} />
        </div>
    );
};

export default StateDiagram;

