// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';
import ReactHelmet from 'https://dev.jspm.io/react-helmet@6.1.0';
const { Helmet } = ReactHelmet;

import { PagicLayout } from '../../Pagic.ts';

const Head: PagicLayout<{
  isDark: boolean;
}> = ({ config, title, ga, outputPath, isDark }) => {
  return (
    <head>
      {ga}
      {config.head}
      <Helmet>
        <title>{outputPath !== 'index.html' ? `${title} · ${config.title}` : title}</title>
        <meta charSet="utf-8" />

        <link rel="stylesheet" href={`${config.base}assets/index.css`} />
        <link
          id="prismTheme"
          rel="stylesheet"
          href={isDark ? `${config.base}assets/prism_tomorrow.css` : `${config.base}assets/prism.css`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
let shouldSetIsDark = document.cookie.includes('is_dark=1') ? true : document.cookie.includes('is_dark=0') ? false : window.matchMedia('(prefers-color-scheme: dark)').matches
if (shouldSetIsDark) {
document.documentElement.classList.add('is_dark');
document.getElementById('prismTheme').href = "${config.base}assets/prism_tomorrow.css";
}
`
          }}
        />
      </Helmet>
    </head>
  );
};

export default Head;
