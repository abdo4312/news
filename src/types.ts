export type Tab = 'home' | 'weather' | 'news' | 'saved' | 'settings';

export interface Author {
  name: string;
  avatarUrl: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  source: string;
  author: Author;
  timestamp: string;
  readTime: string;
  content: string[];
  quote?: string;
  tags: string[];
}

export interface WeatherCondition {
  temp: number;
  condition: string;
  icon: 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'partly';
  high?: number;
  low?: number;
}

export interface HourlyForecast {
  time: string;
  temp: number;
  heightPercent: number;
}

export interface DailyForecast {
  day: string;
  icon: 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'partly';
  high: number;
  low: number;
}
