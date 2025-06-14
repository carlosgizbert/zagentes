import React from 'react';

interface SEOHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SEOHeading({ level, children, className, id }: SEOHeadingProps) {
  const components = {
    1: 'h1',
    2: 'h2', 
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6'
  } as const;
  
  const Tag = components[level];
  
  return React.createElement(
    Tag,
    { 
      className, 
      id,
      itemProp: level === 1 ? 'name' : undefined
    },
    children
  );
} 