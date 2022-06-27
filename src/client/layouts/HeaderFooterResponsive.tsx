import React, { ReactNode } from 'react';
import { SITE_TITLE, SITE_OWNER, YEAR } from '@shared/constants';

interface HFRProps {
  children: ReactNode;
  title?: string;
}

export default function HeaderFooterResponsive({ children, title }: HFRProps) {
  const headerTitle = title ?? SITE_TITLE;
  return (
    // Basic HTML body Wrapper
    <div className="mx-auto max-w-3xl px-0 xl:max-w-5xl xl:px-0">
      {/* Vertical flexbox to split header, main content, and footer */}
      <div className="h-screen flex flex-col justify-between">
        <header className="">
          <h1>{headerTitle}</h1>
        </header>
        {/* Main content */}
        <main className="flex-grow overflow-auto px-4 sm:px-6">{children}</main>
        <footer>
          <div className="mt-16 flex flex-col items-center">
            {/* vertical sections for footer */}
            <div className="mb-2 f lex space-x-2 text-sm text-gray-500">
              <div>{SITE_OWNER}</div>
              <div>{YEAR}</div>
              <div>{SITE_TITLE}</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
