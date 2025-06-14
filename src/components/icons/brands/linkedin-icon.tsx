import { SVGProps } from 'react';

export function LinkedinIcon(props: SVGProps<SVGSVGElement> & { color?: string }) {
    const { color, ...rest } = props;
    const fillColor = color || '#0A66C2';

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            preserveAspectRatio="xMidYMid"
            {...rest}
        >
            <path
                fill={fillColor}
                d="M218.1 218.1h-38v-59.4c0-14.1-.2-32.4-19.6-32.4-19.8 0-22.8 15.5-22.8 31.4V218h-38V96h36.5v16.7h.5a40 40 0 0 1 36-19.8c38.4 0 45.4 25.3 45.4 58.2v67ZM57 79.3a22 22 0 1 1 0-44 22 22 0 0 1 0 44M76 218H38V96h38v122ZM237 .1H19A18.7 18.7 0 0 0 0 18.4v219A18.7 18.7 0 0 0 18.9 256H237c10.4.1 18.9-8.1 19-18.5v-219A18.7 18.7 0 0 0 237 0"
            />
        </svg>
    );
}
