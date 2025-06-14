import { Metadata } from 'next';

import { generatePageMetadata } from '@/lib';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export async function generateMetadata(): Promise<Metadata> {
    return await generatePageMetadata({
        params: Promise.resolve({
            title: 'Support',
            description: 'This is the support page',
        }),
    });
}

export default async function Page() {
    return (
        <div className="flex h-full flex-col">
            <ScrollArea className="h-full">
                <div className="px-4 py-6 lg:px-6">
                    <Suspense
                        fallback={
                            <div className="space-y-4">
                                <Skeleton className="h-8 w-48" />
                                <Skeleton className="h-96 w-full" />
                            </div>
                        }
                    >
                        Support
                    </Suspense>
                </div>
            </ScrollArea>
        </div>
    );
}
