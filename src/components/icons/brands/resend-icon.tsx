import { SVGProps } from 'react';

export function ResendIcon(props: SVGProps<SVGSVGElement> & { color?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...props}>
            <g fill={props.color || '#000000'} transform="matrix(.1 0 0 -.1 0 400)">
                <path d="M0 2000V0h4000v4000H0V2000zm2269 1069c254-41 455-188 550-402 87-196 70-457-41-645-45-76-161-192-230-232-32-17-58-37-58-42 0-6 71-133 157-282s185-319 219-377c33-59 68-117 78-130 9-13 16-27 16-31 0-5-134-7-297-6l-297 3-31 55c-18 30-114 200-214 378l-183 322h-268V920h-500v2160h518c312 0 543-4 581-11z" />
                <path d="M1670 2361v-281h233c269 0 311 8 372 67 60 58 80 112 80 218 0 80-3 95-28 137-28 48-64 81-127 114-31 17-64 19-282 22l-248 4v-281z" />
            </g>
        </svg>
    );
}
