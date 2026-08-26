/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  author: string;
  content: string;
  isBreaking?: boolean;
}

export type Category = 'Home' | 'Spiritual' | 'Ethiopia' | 'Multimedia' | 'Podcast' | 'Social' | 'Arts';

export type Language = 'en' | 'am' | 'ti' | 'or';

export interface TranslationSchema {
  nav: { [key: string]: string };
  ui: { [key: string]: string };
  categories: { [key in Category]: string };
}
