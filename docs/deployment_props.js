import projectConfig from '/pagic.config.js';
import Ga from '/_ga.js';
var _a, _b;
export default {
    'prev': {
        "text": "Internationalization",
        "link": "docs/i18n.html"
    },
    'next': {
        "text": "Demos",
        "link": "docs/demos.html"
    },
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['en'], branch: 'master' },
    'pagePath': "docs/deployment.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "docs/deployment.html",
    'title': "Deployment",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Deployment</h1>\n<p>The output <code>dist</code> directory can be deployed to your server as a website. We strongly recommend to use CI to automate the deployment process. Here are a few common deployment methods:</p>\n<h2 id="github-pages">GitHub Pages<a class="anchor" href="#github-pages">§</a></h2>\n<p>GitHub Pages is the most common service for hosting static websites. Through the official CI tool <a href="https://github.com/features/actions">GitHub Actions</a> provided by GitHub, we can automatically build and deploy the website.</p>\n<p>It is very simple to automatically build and deploy the website to GitHub Pages. You only need to create a <code>.github/workflows/ci.yml</code> file in your GitHub project with the following content:</p>\n<pre class="language-yml"><code class="language-yml"><span class="token key atrule">name</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages\n\n<span class="token key atrule">on</span><span class="token punctuation">:</span>\n  <span class="token key atrule">push</span><span class="token punctuation">:</span>\n    <span class="token key atrule">branches</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> master\n\n<span class="token key atrule">jobs</span><span class="token punctuation">:</span>\n  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span><span class="token number">18.04</span>\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2\n\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup deno\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> denolib/setup<span class="token punctuation">-</span>deno@v2\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">deno-version</span><span class="token punctuation">:</span> v1.6.0\n\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build gh<span class="token punctuation">-</span>pages\n        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>\n          deno --version\n          deno install --unstable --allow-read --allow-write --allow-net --allow-run --name=pagic https://deno.land/x/pagic@v1.0.0-beta.3/mod.ts\n          <span>pagic build</span>\n\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy gh<span class="token punctuation">-</span>pages\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peaceiris/actions<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages@v3\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>\n          <span class="token key atrule">publish_dir</span><span class="token punctuation">:</span> ./dist\n          <span class="token key atrule">cname</span><span class="token punctuation">:</span> ts.xcatliu.com\n</code></pre><p>Be sure to replace <code>ts.xcatliu.com</code> in the last line with your own domain.</p>\n<p>If you don\'t have your own domain, you can also use the free domain <code>xxx.github.io</code> provided by GitHub, just delete the last line. Note that you may need to modify the <code>root</code> configuration in <code>pagic.config.ts</code> to support sub-paths. For details, please refer to the <a href="./config.html#root">Config</a> chapter.</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-45256157-16" }),
        React.createElement(React.Fragment, { key: ".1" },
            React.createElement(React.Fragment, { key: ".0" },
                React.createElement("script", { src: "/i18n.js", type: "module" })),
            React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" }))),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'language': {
        "code": "en",
        "name": "English",
        "root": "/"
    },
    'contentTitle': React.createElement("h1", { key: "0" }, "Deployment"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>The output <code>dist</code> directory can be deployed to your server as a website. We strongly recommend to use CI to automate the deployment process. Here are a few common deployment methods:</p>\n<h2 id="github-pages">GitHub Pages<a class="anchor" href="#github-pages">§</a></h2>\n<p>GitHub Pages is the most common service for hosting static websites. Through the official CI tool <a href="https://github.com/features/actions">GitHub Actions</a> provided by GitHub, we can automatically build and deploy the website.</p>\n<p>It is very simple to automatically build and deploy the website to GitHub Pages. You only need to create a <code>.github/workflows/ci.yml</code> file in your GitHub project with the following content:</p>\n<pre class="language-yml"><code class="language-yml"><span class="token key atrule">name</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages\n\n<span class="token key atrule">on</span><span class="token punctuation">:</span>\n  <span class="token key atrule">push</span><span class="token punctuation">:</span>\n    <span class="token key atrule">branches</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> master\n\n<span class="token key atrule">jobs</span><span class="token punctuation">:</span>\n  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span><span class="token number">18.04</span>\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2\n\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup deno\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> denolib/setup<span class="token punctuation">-</span>deno@v2\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">deno-version</span><span class="token punctuation">:</span> v1.6.0\n\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build gh<span class="token punctuation">-</span>pages\n        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>\n          deno --version\n          deno install --unstable --allow-read --allow-write --allow-net --allow-run --name=pagic https://deno.land/x/pagic@v1.0.0-beta.3/mod.ts\n          <span>pagic build</span>\n\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy gh<span class="token punctuation">-</span>pages\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peaceiris/actions<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages@v3\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>\n          <span class="token key atrule">publish_dir</span><span class="token punctuation">:</span> ./dist\n          <span class="token key atrule">cname</span><span class="token punctuation">:</span> ts.xcatliu.com\n</code></pre><p>Be sure to replace <code>ts.xcatliu.com</code> in the last line with your own domain.</p>\n<p>If you don\'t have your own domain, you can also use the free domain <code>xxx.github.io</code> provided by GitHub, just delete the last line. Note that you may need to modify the <code>root</code> configuration in <code>pagic.config.ts</code> to support sub-paths. For details, please refer to the <a href="./config.html#root">Config</a> chapter.</p>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#github-pages">GitHub Pages</a></li></ol></nav>'
        } }),
    'author': "xcatliu",
    'contributors': [
        "xcatliu",
        "自然醒"
    ],
    'date': "2020-08-10T04:25:19.000Z",
    'updated': "2020-12-11T13:58:39.000Z",
    'excerpt': "The output dist directory can be deployed to your server as a website. We strongly recommend to use CI to automate the deployment process. Here are a few common deployment methods: GitHub Pages GitHub Pages is ...",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "blog/design_pagic_config_ts.md",
                "title": "Design pagic.config.ts",
                "link": "blog/design_pagic_config_ts.html",
                "date": "2020-07-12T00:00:00.000Z",
                "updated": "2020-12-05T13:42:50.000Z",
                "author": "xcatliu",
                "contributors": [
                    "xcatliu"
                ],
                "excerpt": "As a senior blogger, I am passionate about to develop blog systems and have written many blog themes. Finally, I couldn't be satisfied with writing themes, and I started writing a blog system. Or in a more gene..."
            }
        ],
        "categories": [],
        "tags": []
    },
    'sidebar': [
        {
            "text": "Introduction",
            "link": "docs/introduction.html",
            "pagePath": "docs/introduction.md"
        },
        {
            "text": "Usage",
            "link": "docs/usage.html",
            "pagePath": "docs/usage.md"
        },
        {
            "text": "Config",
            "link": "docs/config.html",
            "pagePath": "docs/config.md"
        },
        {
            "text": "Content",
            "link": "docs/content.html",
            "pagePath": "docs/content.md"
        },
        {
            "text": "_layout.tsx",
            "link": "docs/layout.html",
            "pagePath": "docs/layout.md"
        },
        {
            "text": "Themes",
            "link": "docs/themes.html",
            "pagePath": "docs/themes.md"
        },
        {
            "text": "Plugins",
            "link": "docs/plugins.html",
            "pagePath": "docs/plugins.md"
        },
        {
            "text": "Blog",
            "link": "docs/blog.html",
            "pagePath": "docs/blog.md"
        },
        {
            "text": "Internationalization",
            "link": "docs/i18n.html",
            "pagePath": "docs/i18n.md"
        },
        {
            "text": "Deployment",
            "link": "docs/deployment.html",
            "pagePath": "docs/deployment.md"
        },
        {
            "text": "Demos",
            "link": "docs/demos.html",
            "pagePath": "docs/demos.md"
        },
        {
            "text": "Limitations",
            "link": "docs/limitations.html",
            "pagePath": "docs/limitations.md"
        }
    ]
};
