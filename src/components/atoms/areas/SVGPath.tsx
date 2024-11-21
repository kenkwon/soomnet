'use client';

import React, { useState, useEffect, useRef } from 'react';

const commonPathProps: React.SVGProps<SVGPathElement> = {
  opacity: 1,
  stroke: '#2e2f30',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: 3,
};

type SVGPathProps = {
  id: string; // path id
  name: string; // path name
  d: string; // path data
  isSelected?: boolean;
};

const SVGPath: React.FC<SVGPathProps> = ({ id, name, d }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const pathRef = useRef<SVGPathElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (pathRef.current) {
      const bbox = pathRef.current.getBBox();
      setCenter({ x: bbox.x + bbox.width / 2, y: bbox.y + bbox.height / 2 });
    }
  }, [pathRef]);

  return (
    <>
      <path
        ref={pathRef}
        id={id}
        name={name}
        d={d}
        fill={isHovered ? '#ffa500' : '#1f1f1f'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'fill 0.3s ease' }}
        {...commonPathProps}
      />
      <text
        x={center.x}
        y={center.y}
        textAnchor="middle"
        alignmentBaseline="middle"
        fill={isHovered ? '#ffffff' : '#ffffff6a'} //
        fontSize="24"
        pointerEvents="none"
      >
        {name}
      </text>
    </>
  );
};

export default SVGPath;
