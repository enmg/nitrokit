import { SVGProps } from 'react';

export function MastodonIcon(props: SVGProps<SVGSVGElement> & { color?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="none"
            viewBox="0 0 75 79"
            {...props}
        >
            <defs>
                <linearGradient
                    id="mastodon-gradient"
                    x1="37.1"
                    x2="37.1"
                    y1="0"
                    y2="79"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6364FF" />
                    <stop offset="1" stopColor="#563ACC" />
                </linearGradient>
            </defs>
            <path
                fill={props.color ? props.color : 'url(#mastodon-gradient)'}
                d="M73.8 17.5A20.1 20.1 0 0 0 56.5 1c-1.5-.2-7-1-20-1h-.1C23.4 0 20.6.8 19 1A21.5 21.5 0 0 0 1 17a47 47 0 0 0-.9 13c.2 6.2.3 12.3.8 18.5.4 4 1 8.1 2 12 1.8 7.4 9.1 13.6 16.2 16a43.4 43.4 0 0 0 26.3.6c1.9-.6 4.1-1.3 5.8-2.5a.2.2 0 0 0 0-.1v-6a.2.2 0 0 0-.2-.1 66 66 0 0 1-15.3 1.8c-9 0-11.4-4.3-12-6a18.6 18.6 0 0 1-1-4.9.2.2 0 0 1 .1 0c5 1.2 10 1.8 15.2 1.8h3.6c5.1-.2 10.5-.5 15.6-1.4l.3-.1c8-1.5 15.5-6.3 16.3-18.5l.1-5.5c0-1.6.6-12 0-18.2Z"
            />
            <path
                fill="white"
                d="M61.2 27v21.1H53V27.6c0-4.3-1.8-6.5-5.5-6.5-4 0-6 2.6-6 7.8V40h-8.3V28.9c0-5.2-2-7.8-6-7.8-3.6 0-5.5 2.2-5.5 6.5v20.5h-8.3v-21c0-4.4 1-7.8 3.3-10.3 2.3-2.6 5.2-3.9 9-3.9 4.2 0 7.4 1.7 9.6 5l2 3.4 2.2-3.4c2.1-3.3 5.3-5 9.6-5 3.7 0 6.7 1.3 9 3.9 2.2 2.5 3.3 6 3.2 10.2Z"
            />
        </svg>
    );
}
