import React from 'react';

function Border() {
    return (
        <div style={{ border: '2px solid black', padding: '10px', display: 'inline-block' }}>
            <img 
                src="/banner.png" 
                alt="Banner Treneese Johnson" 
                style={{ width: '100%', height: 'auto' }} 
            />
        </div>
    );
}

export default Border;