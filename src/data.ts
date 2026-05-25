import { Article, DailyForecast, HourlyForecast, WeatherCondition } from './types';

export const CURRENT_WEATHER: WeatherCondition = {
  temp: 22,
  condition: 'Mostly Sunny',
  icon: 'sunny',
  high: 25,
  low: 18
};

export const HOURLY_FORECAST: HourlyForecast[] = [
  { time: 'Now', temp: 22, heightPercent: 60 },
  { time: '1PM', temp: 24, heightPercent: 75 },
  { time: '2PM', temp: 25, heightPercent: 85 },
  { time: '3PM', temp: 25, heightPercent: 82 },
  { time: '4PM', temp: 23, heightPercent: 70 },
  { time: '5PM', temp: 21, heightPercent: 55 },
];

export const DAILY_FORECAST: DailyForecast[] = [
  { day: 'Mon', icon: 'sunny', high: 25, low: 18 },
  { day: 'Tue', icon: 'partly', high: 23, low: 16 },
  { day: 'Wed', icon: 'cloudy', high: 21, low: 15 },
  { day: 'Thu', icon: 'rainy', high: 19, low: 14 },
  { day: 'Fri', icon: 'sunny', high: 22, low: 16 },
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Future of Generative AI in Mobile Apps',
    category: 'TECH',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT1fcvzrgTtSYMOsqH3top5AC0or9o_cgqt3DXOPYW9AKyUwmFYbm54xeJtYgqwmhNI6VwyX0Y3fSi6582e-FwKSN2FK6cbVUzOJhSx3F7rMss-vEpl0QVCCrNddExgwc0flpcg6CnLYwngByEAUx2nUHmQEhzu5TQ5F4JJ8rpkgLMkxrhOQZYf_Bi4XEXuTz23FdM9MPZUEa-X6HehmRmlhr7DsyiYyr0H1elpD8dvwHA0R5BtXEOfYFhd1LKb5mPH2DqHkeczf_F',
    source: 'Atmosphere Tech',
    author: {
      name: 'Sarah Jenkins',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBF8kKAdvao6J_UkIAu1FSFFu_tSIjq-zwUvpAusjwdpHQDS6FmvRJKtLK2a95OjQbQ6MOHEYmXsjDFS5ISfK_EZ2qY8mwmLoOnD734iImTLgcqpxaw28ys5LR-b-ZYA-T-msIQcsfBvhljkfyaULflzPh3YmYlHc5dFgcVKHXiqp0eQBI0YsK5zRFcSr9wUz6gnsn-ZG3JmiEcETs6LTVRdxow4XDJBeBNNQ00Pg98FABn1feihsMa0FyNsre-rRun1d3i7vG_Q6b'
    },
    timestamp: 'Oct 24, 2023',
    readTime: '8 min read',
    quote: '"We are moving from an era of tools that we command to companions that anticipate our needs before we even articulate them."',
    content: [
      'The landscape of mobile technology is shifting rapidly as generative artificial intelligence moves from cloud-based experimentation to on-device reality. For years, mobile apps have relied on static logic and predefined user flows, but the integration of large language models (LLMs) directly into our handheld hardware is poised to dismantle these traditional paradigms.',
      'Industry leaders at this year\'s global summit emphasized that the "AI-first" mobile experience is not just about chatbots. Instead, it is about contextual awareness—apps that understand the user\'s intent through multimodal inputs like camera feeds, voice cadence, and real-time biometric data.',
      'Hardware manufacturers are responding with specialized neural processing units (NPUs) capable of running trillions of operations per second while maintaining thermal efficiency. This localized processing power means data privacy is significantly enhanced, as sensitive interactions no longer need to traverse the open internet to a remote server.',
      'As we look toward 2024, the primary challenge remains the user interface. How do designers maintain the minimalist clarity that users crave while surfacing the infinite possibilities that generative engines provide? The answer likely lies in "invisible UI"—interfaces that appear only when necessary and fade away during deep focus.'
    ],
    tags: ['Artificial Intelligence', 'Mobile Design', 'Future Tech']
  },
  {
    id: '2',
    title: 'Apple Announces New AI Features',
    category: 'TECH',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3IObrNz3xFDJgJ1wU96ZfDlvgEal0RRinFA84JRoXYpxJsU9pEdmfC2hT5dBwcjZVevHQ30d6uG7wDLj7S0InwPnvYsx2UwFKUd1nAuzqPpl_EEHVLENlo_d7e6hFUWzKFG1iMQzto5fJtGdTR2xBzPZ1RgLxMK299nSsTNKNm12LCZSsorJg2NwhKQgmv6lgxgjYsVWRDaYS5DgCmqZDP7shUQWqKJEahqKhyJzInUMhcFDgm-NM5kiNDMeOd2BHa2GT80ELIHGl',
    source: 'TechCrunch',
    author: { name: 'Alex Rivera', avatarUrl: '' },
    timestamp: '2h ago',
    readTime: '4 min read',
    content: ['Full article content coming soon...'],
    tags: ['Apple', 'AI']
  },
  {
    id: '3',
    title: 'The Future of Urban Intelligence',
    category: 'GLOBAL',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxL5qvv47Yjrg8C1t21jx_ICrD9TSKQMjvkyyjsHg-hVwxrcuR7IvQf4A8pNzz5KVJS8_NUUpF8ioKBsxJxWNaNoCW4T3EuenlbnVyatTi7geYQMqG0LSp16FbOklV7McShzYfOzoomnQi0TC0fdv5NN2IK_YmqYvcRSscIsjh_FVuu21Xh3y8lfl1wLXSL9yIFxi4tF091b7nSsH1k2HpE983oR7KXEPtugLSoz7EsTY-z4DOb7XyLAQm4Xc8GvDTkXys2qeLffCk',
    source: 'Wired',
    author: { name: 'Elena Rost', avatarUrl: '' },
    timestamp: '4h ago',
    readTime: '6 min read',
    content: ['Full article content coming soon...'],
    tags: ['Cities', 'Infrastructure']
  },
  {
    id: '4',
    title: 'Global Markets Reach Record Highs Amid Tech Surge',
    category: 'ECONOMY',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAICuMYz3HLP04O2MgtIj82kAXwTBKg3IVPLdwrQmbVLlBFgIh3KB7vjBH0JxRLAEX7vs1qDff4mu8q-_ZkhdfVMq38qLZhR3jxr9mRiP5JepYwU0NUIqiV7vv7vEom_ylUDi-n5UYoRKq-xKO0_NJRScm6Ip9BBqR-xIucQu0L7qQxrrkfaG2RwPDi3quSCGe0oDBYMtuKWfjXe-ddua__1kOmb-nQM-OLdm4JpWs_c_wJPhY-cjEWrxrTqzuTC9W8RAF2zJzr0KHQ',
    source: 'Reuters',
    author: { name: 'Marcus Vance', avatarUrl: '' },
    timestamp: '1h ago',
    readTime: '5 min read',
    content: ['Full article content coming soon...'],
    tags: ['Economy', 'Markets']
  },
  {
    id: '5',
    title: 'How Satellites are Mapping the Invisible Climate',
    category: 'DATA',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6cTg2M12NCt6locDer34BlE7Y4S0Ail0n8dLbNnQYrlbbKiB0zqr3unSH1jULWFEU1yi3KA40i4K7IBbp9baLBfmx27djWzfy-9sflZvbXTORLiu7OlhhYxg1E-EIwbGZkKRMDcLJUgaQrQogauElWldJZOwnan0GpQ_nWyj7DUCx0L2mi-2aHBMkDDS37xGINwIyQfC1BBoA6hn0H0LV676fW22evTHIYROXUZ19hGYG0zEbF4PovmJDlBQX9J0qh3NU5N6I8sgJ',
    source: 'Science Daily',
    author: { name: 'Dr. R. Vance', avatarUrl: '' },
    timestamp: '5h ago',
    readTime: '9 min read',
    content: ['Full article content coming soon...'],
    tags: ['Climate', 'Satellites']
  }
];
