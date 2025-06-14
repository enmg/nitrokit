import { SVGProps } from 'react';

export function VkIcon(props: SVGProps<SVGSVGElement> & { color?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" {...props}>
            <path
                fill="#fff"
                d="M0 14.4C0 7.6 0 4.2 2.1 2.1 4.2 0 7.6 0 14.4 0h1.2c6.8 0 10.2 0 12.3 2.1C30 4.2 30 7.6 30 14.4v1.2c0 6.8 0 10.2-2.1 12.3C25.8 30 22.4 30 15.6 30h-1.2c-6.8 0-10.2 0-12.3-2.1C0 25.8 0 22.4 0 15.6v-1.2Z"
            />
            <path
                fill={props.color || '#07F'}
                d="M16 21.6C9 21.6 5.2 17 5 9.1h3.5c.1 5.7 2.6 8.2 4.6 8.7V9h3.3v5c2-.2 4-2.5 4.7-5h3.2a9.5 9.5 0 0 1-4.4 6.3 9.9 9.9 0 0 1 5.2 6.2h-3.6a6.2 6.2 0 0 0-5.1-4.5v4.5H16Z"
            />
        </svg>
    );
}
