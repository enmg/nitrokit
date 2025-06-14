import { SVGProps } from 'react';

export function PasskeyIcon(props: SVGProps<SVGSVGElement> & { color?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            data-name="Isolation Mode"
            viewBox="0 0 100 100"
            {...props}
        >
            <defs>
                <path
                    id="passkey-path"
                    d="M60.9 18.2h-24c-12.8 0-23 10.5-23 23.4V66a23.2 23.2 0 0 0 23 23.4h24c12.7 0 23-10.5 23-23.4V41.6c0-13-10.3-23.4-23-23.4Z"
                />
            </defs>
            <use xlinkHref="#passkey-path" fill={props.color || '#ebac21'} strokeWidth="0" />
            <g mask="url(#mask)">
                <use xlinkHref="#passkey-path" strokeWidth="0" opacity=".1" />
            </g>
            <path
                fill={props.color || '#353535'}
                fillRule="evenodd"
                d="M73.2 50.8c0 4.6-2.8 8.5-6.7 9.9l2.3 4-3.5 4.2 3.5 4.3-5.6 7.5-4-4.2V60.4c-3.6-1.6-6-5.3-6-9.6 0-5.8 4.4-10.5 10-10.5s10 4.7 10 10.5Zm-10 1.6c1.3 0 2.4-1.1 2.4-2.5s-1-2.6-2.4-2.6-2.4 1.2-2.4 2.6 1 2.5 2.4 2.5Z"
            />
            <path
                fillRule="evenodd"
                d="M73.2 50.8c0 4.6-2.7 8.4-6.5 9.9l2.1 4-3.2 4.2 3.2 4.3-5.6 7.6V52.4c1.3 0 2.4-1.1 2.4-2.5s-1-2.6-2.4-2.6v-7c5.5 0 10 4.7 10 10.5Z"
            />
            <path
                fillRule="evenodd"
                d="M56 62.3a14 14 0 0 1-5.8-11.4H32.8c-3.6 0-6.5 3-6.5 6.7V66c0 1.8 1.4 3.3 3.2 3.3h23.1c1.8 0 3.3-1.5 3.3-3.3v-3.7Z"
            />
            <path
                fill={props.color || '#141313'}
                d="m40.3 49-2.4-.7a8.2 8.2 0 0 1-5-6.6c-.4-2.1-.3-4.2.6-6.2a8 8 0 0 1 6.4-5c1.7-.3 3.4-.2 5.1.4a8 8 0 0 1 5 5.4c.8 2.7.7 5.3-.5 7.9a8.1 8.1 0 0 1-6.1 4.6l-.7.1h-2.4Z"
            />
        </svg>
    );
}
