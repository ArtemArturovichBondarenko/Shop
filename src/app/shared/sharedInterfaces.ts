export interface Breadcrumb {
  label: string;
  url: string;
}

export type Theme = 'light' | 'dark' | 'system';

export interface Category {
  createdAt: Date;
  id: number;
  image: string;
  title: string;
  updatedAt: Date;
}
