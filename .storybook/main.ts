import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
    stories: [
        '../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
        '../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    ],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
        '@storybook/addon-themes',
        'storybook-dark-mode',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    staticDirs: [],
    typescript: {
        check: false,
        reactDocgen: 'react-docgen-typescript',
    },
};

export default config;
