// docusaurus.config.js
module.exports = {
    title: 'Jutsu Documentation',
    tagline: 'Comprehensive Web3 Development',
    url: 'https://your-github-username.github.io',
    baseUrl: '/jutsu-docs/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'jutsuai',
    projectName: 'jutsu-docs',
    themeConfig: {
        navbar: {
            title: 'Jutsu',
            logo: {
                alt: 'Jutsu Logo',
                src: 'img/logo.svg',
            },
            items: [
                {to: 'docs/', label: 'Docs', position: 'left'},
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Documentation',
                            to: 'docs/',
                        },
                    ],
                },
            ],
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
