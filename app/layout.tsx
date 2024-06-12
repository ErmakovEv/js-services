import React from 'react';
import type { Metadata } from 'next';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

export const metadata: Metadata = {
  title: 'JS-сервисы',
  description: 'Тестовое задание',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" title="JS-сервисы">
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
