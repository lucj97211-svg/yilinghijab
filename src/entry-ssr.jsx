import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppShell from './AppShell';

export function render(route) {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter initialEntries={[route]}>
        <AppShell />
      </MemoryRouter>
    </HelmetProvider>
  );
  const { helmet } = helmetContext;
  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ].filter(Boolean).join('\n    ')
    : '';
  return { html, head };
}
