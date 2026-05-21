'use client';

import React from 'react';

interface LiquidToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const LiquidToggle: React.FC<LiquidToggleProps> = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="liquid-toggle"
      aria-label={label || 'Toggle switch'}
    >
      <span className="thumb"></span>
    </button>
  );
};

export default LiquidToggle;
