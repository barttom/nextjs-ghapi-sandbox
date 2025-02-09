import { Provider } from '@/components/ui/provider';
import { render as rtlRender } from '@testing-library/react';
import React from 'react';

export * from '@testing-library/react';
export function renderWithTheme(ui: React.ReactNode) {
  return rtlRender(ui, {
    wrapper: (props: React.PropsWithChildren) => (
      <Provider>{props.children}</Provider>
    ),
  });
}
