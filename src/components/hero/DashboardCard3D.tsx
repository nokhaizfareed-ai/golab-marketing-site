'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export const DashboardCard3D: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement>(null);

  const xValue = useMotionValue(0);
  const yValue = useMotionValue(0);

  // max +-3.5 degrees rotation
  const rotateY = useTransform(xValue, [-0.5, 0.5], [3.5, -3.5]);
  const rotateX = useTransform(yValue, [-0.5, 0.5], [-3.5, 3.5]);
  const scale = useTransform(xValue, (val: number): number => (Math.abs(val) > 0 ? 1.012 : 1.0));

  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const smoothRotateY = useSpring(rotateY, springConfig);
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothScale = useSpring(scale, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const relativeY = (e.clientY - rect.top - rect.height / 2) / rect.height;
    xValue.set(relativeX);
    yValue.set(relativeY);
  };

  const handleMouseLeave = () => {
    xValue.set(0);
    yValue.set(0);
  };

  const bars = [40, 55, 38, 72, 48, 80, 65, 92, 70, 88, 95, 100];

  return (
    <div
      ref={wrapRef}
      className="hero-3d-wrap w-full select-none cursor-default"
      style={{ minHeight: 460 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="hero-3d-card mac-card w-full max-w-[540px] transform-gpu"
        style={{
          rotateY: smoothRotateY,
          rotateX: smoothRotateX,
          scale: smoothScale,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* MacOS Header */}
        <div className="mac-card-header">
          <span className="mac-dot r"></span>
          <span className="mac-dot y"></span>
          <span className="mac-dot g"></span>
          <span className="mac-card-title">dashboard.golab</span>
        </div>

        {/* Content Body */}
        <div className="p-7">
          <div className="flex justify-between items-end mb-[18px]">
            <div>
              <div className="eyebrow mb-1.5 text-[10px]">Pipeline value</div>
              <div className="font-display text-[44px] font-bold tracking-tight leading-none text-fg-1">
                $284,710
              </div>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="chip chip-red text-[9px] px-2 py-0.5">▲ 47.2%</span>
                <span className="subtle text-[13px] text-fg-3">vs last 30d</span>
              </div>
            </div>
            <div className="chip flex items-center gap-1.5">
              <span className="pulse-dot"></span> live
            </div>
          </div>

          {/* Bar Graph */}
          <div className="flex items-end gap-2 h-[130px] mt-7">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-[6px] transition-all duration-500"
                style={{
                  height: `${h}%`,
                  background: i >= 9 ? 'linear-gradient(180deg, #FF3D4F, #B8131F)' : 'rgba(255,255,255,0.10)',
                  boxShadow: i >= 9 ? '0 4px 16px var(--brand-red-glow)' : undefined,
                }}
              />
            ))}
          </div>

          {/* Core metrics strip */}
          <div className="grid grid-cols-3 gap-4 mt-7 pt-5 border-t border-hairline">
            <div>
              <div className="eyebrow text-[10px] opacity-75">Booked</div>
              <div className="font-display text-[22px] font-bold text-fg-1">312</div>
            </div>
            <div>
              <div className="eyebrow text-[10px] opacity-75">Showed</div>
              <div className="font-display text-[22px] font-bold text-fg-1">284</div>
            </div>
            <div>
              <div className="eyebrow text-[10px] opacity-75">Closed</div>
              <div className="font-display text-[22px] font-bold text-brand-red-soft">97</div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="wf-float wf-float-tl">
          <div className="chip chip-red flex items-center gap-1.5 backdrop-blur-md">
            <span className="pulse-dot bg-brand-red-soft"></span> automation triggered
          </div>
        </div>
        <div className="wf-float wf-float-br">
          <div className="chip backdrop-blur-md text-fg-2 font-medium">Saved 14h this week</div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardCard3D;
