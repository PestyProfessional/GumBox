'use client';

import { SvgIcon, SvgIconProps } from '@mui/material';

// Bubble Wave SVG for hero background decoration
export function BubbleWave(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 1200 320">
      <defs>
        <linearGradient id="bubbleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF1B8D" stopOpacity={0.3} />
          <stop offset="50%" stopColor="#FFD23F" stopOpacity={0.2} />
          <stop offset="100%" stopColor="#00B4D8" stopOpacity={0.3} />
        </linearGradient>
      </defs>
      <path 
        fill="url(#bubbleGrad)" 
        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
      <circle cx="200" cy="60" r="8" fill="#FFD23F" opacity={0.6} />
      <circle cx="400" cy="40" r="12" fill="#FF1B8D" opacity={0.4} />
      <circle cx="600" cy="80" r="6" fill="#00B4D8" opacity={0.5} />
      <circle cx="800" cy="50" r="10" fill="#6F2DBD" opacity={0.3} />
      <circle cx="1000" cy="70" r="7" fill="#FFD23F" opacity={0.4} />
    </SvgIcon>
  );
}

// Gum Pieces SVG for decorative elements
export function GumPieces(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 200 200">
      <defs>
        <linearGradient id="gumGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4DA1" />
          <stop offset="100%" stopColor="#FFD23F" />
        </linearGradient>
        <linearGradient id="gumGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00B4D8" />
          <stop offset="100%" stopColor="#6F2DBD" />
        </linearGradient>
      </defs>
      
      {/* Circular gum piece */}
      <circle cx="50" cy="50" r="20" fill="url(#gumGrad1)" opacity={0.8} />
      <circle cx="50" cy="50" r="15" fill="none" stroke="white" strokeWidth="2" opacity={0.6} />
      
      {/* Rectangular gum stick */}
      <rect x="120" y="30" width="15" height="40" rx="7" fill="url(#gumGrad2)" opacity={0.8} />
      <rect x="122" y="32" width="11" height="36" rx="5" fill="none" stroke="white" strokeWidth="1" opacity={0.6} />
      
      {/* Square gum piece */}
      <rect x="30" y="120" width="25" height="25" rx="5" fill="#FFD23F" opacity={0.7} />
      <rect x="32" y="122" width="21" height="21" rx="3" fill="none" stroke="white" strokeWidth="1.5" opacity={0.5} />
      
      {/* Oval gum piece */}
      <ellipse cx="150" cy="150" rx="18" ry="12" fill="#FF6B35" opacity={0.8} />
      <ellipse cx="150" cy="150" rx="14" ry="9" fill="none" stroke="white" strokeWidth="1.5" opacity={0.6} />
    </SvgIcon>
  );
}

// Chewing motion bubbles
export function ChewingBubbles(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 100 100">
      <defs>
        <radialGradient id="bubbleGradient" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFD23F" stopOpacity={0.8} />
          <stop offset="70%" stopColor="#FF1B8D" stopOpacity={0.4} />
          <stop offset="100%" stopColor="#00B4D8" stopOpacity={0.2} />
        </radialGradient>
      </defs>
      
      <circle cx="25" cy="25" r="8" fill="url(#bubbleGradient)" />
      <circle cx="60" cy="15" r="6" fill="url(#bubbleGradient)" />
      <circle cx="75" cy="40" r="10" fill="url(#bubbleGradient)" />
      <circle cx="40" cy="60" r="7" fill="url(#bubbleGradient)" />
      <circle cx="70" cy="75" r="5" fill="url(#bubbleGradient)" />
      <circle cx="15" cy="70" r="9" fill="url(#bubbleGradient)" />
      
      {/* Smaller accent bubbles */}
      <circle cx="45" cy="30" r="3" fill="#FFD23F" opacity={0.6} />
      <circle cx="30" cy="45" r="2" fill="#FF1B8D" opacity={0.8} />
      <circle cx="80" cy="60" r="3" fill="#00B4D8" opacity={0.7} />
    </SvgIcon>
  );
}

// Flavor burst icon
export function FlavorBurst(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 120 120">
      <defs>
        <radialGradient id="burstGradient">
          <stop offset="0%" stopColor="#FFD23F" />
          <stop offset="50%" stopColor="#FF1B8D" />
          <stop offset="100%" stopColor="#00B4D8" />
        </radialGradient>
      </defs>
      
      {/* Central burst */}
      <circle cx="60" cy="60" r="15" fill="url(#burstGradient)" opacity={0.9} />
      
      {/* Radiating lines */}
      <g stroke="url(#burstGradient)" strokeWidth="3" strokeLinecap="round" opacity={0.7}>
        <line x1="60" y1="20" x2="60" y2="35" />
        <line x1="60" y1="85" x2="60" y2="100" />
        <line x1="20" y1="60" x2="35" y2="60" />
        <line x1="85" y1="60" x2="100" y2="60" />
        <line x1="35" y1="35" x2="45" y2="45" />
        <line x1="75" y1="75" x2="85" y2="85" />
        <line x1="85" y1="35" x2="75" y2="45" />
        <line x1="45" y1="75" x2="35" y2="85" />
      </g>
      
      {/* Sparkle dots */}
      <circle cx="45" cy="30" r="2" fill="#FFD23F" />
      <circle cx="75" cy="30" r="1.5" fill="#FF1B8D" />
      <circle cx="30" cy="45" r="1.5" fill="#00B4D8" />
      <circle cx="90" cy="45" r="2" fill="#FFD23F" />
      <circle cx="30" cy="75" r="2" fill="#FF1B8D" />
      <circle cx="90" cy="75" r="1.5" fill="#00B4D8" />
      <circle cx="45" cy="90" r="1.5" fill="#FFD23F" />
      <circle cx="75" cy="90" r="2" fill="#FF1B8D" />
    </SvgIcon>
  );
}