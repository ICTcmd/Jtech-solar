'use client';

import React from 'react';

interface EnergyFlowPathProps {
  d: string; // SVG path definition
  active: boolean;
}

export function EnergyFlowPath({ d, active }: EnergyFlowPathProps) {
  if (!active) {
    return (
      <path
        d={d}
        stroke="#475569"
        strokeWidth="3"
        fill="none"
        opacity="0.3"
      />
    );
  }

  return (
    <g>
      {/* Base path (glow effect) */}
      <path
        d={d}
        stroke="#10b981"
        strokeWidth="6"
        fill="none"
        opacity="0.2"
        filter="url(#glow)"
      />
      
      {/* Main path */}
      <path
        d={d}
        stroke="#10b981"
        strokeWidth="3"
        fill="none"
        strokeDasharray="0"
      />
      
      {/* Animated particles */}
      <g>
        {/* Particle 1 */}
        <circle r="6" fill="#10b981" filter="url(#glow)">
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            path={d}
          >
            <mpath href={`#path-${d.replace(/\s/g, '')}`} />
          </animateMotion>
        </circle>
        
        {/* Particle 2 (delayed) */}
        <circle r="5" fill="#34d399" filter="url(#glow)">
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            begin="0.4s"
            path={d}
          >
            <mpath href={`#path-${d.replace(/\s/g, '')}`} />
          </animateMotion>
        </circle>
        
        {/* Particle 3 (delayed) */}
        <circle r="4" fill="#6ee7b7" filter="url(#glow)">
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            begin="0.8s"
            path={d}
          >
            <mpath href={`#path-${d.replace(/\s/g, '')}`} />
          </animateMotion>
        </circle>

        {/* Particle 4 (delayed) */}
        <circle r="5" fill="#10b981" filter="url(#glow)">
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            begin="1.2s"
            path={d}
          >
            <mpath href={`#path-${d.replace(/\s/g, '')}`} />
          </animateMotion>
        </circle>

        {/* Particle 5 (delayed) */}
        <circle r="4" fill="#34d399" filter="url(#glow)">
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            begin="1.6s"
            path={d}
          >
            <mpath href={`#path-${d.replace(/\s/g, '')}`} />
          </animateMotion>
        </circle>
      </g>

      {/* Pulsing glow effect */}
      <path
        d={d}
        stroke="#10b981"
        strokeWidth="8"
        fill="none"
        opacity="0.3"
        filter="url(#glow)"
      >
        <animate
          attributeName="opacity"
          values="0.1;0.4;0.1"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>

      {/* Hidden path for animation reference */}
      <path
        id={`path-${d.replace(/\s/g, '')}`}
        d={d}
        fill="none"
        stroke="none"
      />
    </g>
  );
}
