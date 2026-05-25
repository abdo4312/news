import { CloudRain, CloudSnow, Sun, Cloud, CloudSun } from 'lucide-react';
import React from 'react';

export const WeatherIcon = ({ icon, className }: { icon: string; className?: string }) => {
  switch (icon) {
    case 'sunny':
      return <Sun className={className} />;
    case 'cloudy':
      return <Cloud className={className} />;
    case 'rainy':
      return <CloudRain className={className} />;
    case 'snowy':
      return <CloudSnow className={className} />;
    case 'partly':
      return <CloudSun className={className} />;
    default:
      return <Sun className={className} />;
  }
};
