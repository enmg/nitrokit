import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function handleSessionTracking(request: NextRequest) {
    try {
        const token = await getToken({
            req: request,
            secret: process.env.NEXT_SECRET,
        });

        if (token?.sub) {
            const sessionToken =
                request.cookies.get('authjs.session-token')?.value ||
                request.cookies.get('__Secure-authjs.session-token')?.value;

            if (sessionToken) {
                fetch(new URL('/api/internal/session-update', request.url), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${sessionToken}`,
                    },
                    body: JSON.stringify({
                        sessionToken,
                        userAgent: request.headers.get('user-agent'),
                        ip:
                            request.headers.get('x-forwarded-for') ||
                            request.headers.get('x-real-ip') ||
                            'unknown',
                    }),
                }).catch(() => {});
            }
        }
    } catch (error) {
        console.error('Middleware session tracking error:', error);
    }
}

export async function checkAuthentication(request: NextRequest) {
    const token = await getToken({
        req: request,
        secret: process.env.AUTH_SECRET,
    });

    if (!token) {
        return NextResponse.redirect(new URL('/signin', request.url));
    }

    return null;
}
