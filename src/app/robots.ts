import { getBaseUrl } from '@/utils/helpers';

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: '*',
                allow: '/api/og',
            },
        ],
        sitemap: `${getBaseUrl()}/sitemap.xml`,
    };
}
