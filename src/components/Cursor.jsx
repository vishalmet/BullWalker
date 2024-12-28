import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.innerHTML = `
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle class="cursor-ring" cx="16" cy="16" r="15" stroke="rgba(34, 211, 238, 0.5)" stroke-width="0.5"/>
        <circle class="cursor-ring-internal" cx="16" cy="16" r="7" stroke="rgba(34, 211, 238, 0.8)" stroke-width="1"/>
        <circle class="cursor-dot" cx="16" cy="16" r="2" fill="rgb(34, 211, 238)"/>
        <g class="cursor-ticks">
          <line x1="16" y1="2" x2="16" y2="4" stroke="rgba(34, 211, 238, 0.5)" />
          <line x1="16" y1="28" x2="16" y2="30" stroke="rgba(34, 211, 238, 0.5)" />
          <line x1="2" y1="16" x2="4" y2="16" stroke="rgba(34, 211, 238, 0.5)" />
          <line x1="28" y1="16" x2="30" y2="16" stroke="rgba(34, 211, 238, 0.5)" />
        </g>
      </svg>
    `;
    
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      requestAnimationFrame(() => {
        cursor.style.left = e.clientX - 16 + 'px';
        cursor.style.top = e.clientY - 16 + 'px';
        
        const target = e.target;
        if (target.tagName.toLowerCase() === 'button') {
          cursor.classList.add('cursor-hover');
        } else {
          cursor.classList.remove('cursor-hover');
        }
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      if (cursor && document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  return (
    <style>
      {`
        .custom-cursor {
          width: 32px;
          height: 32px;
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: screen;
        }

        .custom-cursor svg {
          filter: drop-shadow(0 0 5px rgba(34, 211, 238, 0.2));
        }

        .cursor-ring {
          transition: all 0.15s ease-out;
          opacity: 0.7;
        }

        .cursor-ring-internal {
          transition: all 0.15s ease-out;
          opacity: 0.8;
        }

        .cursor-dot {
          transition: all 0.1s ease-out;
        }

        .cursor-ticks {
          opacity: 0.5;
        }

        .cursor-hover {
          transform: scale(1.3);
        }

        .cursor-hover .cursor-ring {
          animation: ring-pulse 2s ease-out infinite;
        }

        .cursor-hover .cursor-ring-internal {
          animation: internal-pulse 1s ease-out infinite;
        }

        .cursor-hover .cursor-dot {
          r: 3;
        }

        @keyframes ring-pulse {
          0% { 
            stroke-width: 0.5;
            opacity: 0.7;
          }
          50% { 
            stroke-width: 1;
            opacity: 0.9;
          }
          100% { 
            stroke-width: 0.5;
            opacity: 0.7;
          }
        }

        @keyframes internal-pulse {
          0% { 
            stroke-width: 1;
            opacity: 0.8;
          }
          50% { 
            stroke-width: 1.5;
            opacity: 1;
          }
          100% { 
            stroke-width: 1;
            opacity: 0.8;
          }
        }

        * {
          cursor: none !important;
        }
      `}
    </style>
  );
};

export default CustomCursor;