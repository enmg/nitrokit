import { getTranslations } from 'next-intl/server';

import Loading from '@/components/shared/loading';

export default async function ResetPasswordSentLoading() {
    const t = await getTranslations('common');
    return <Loading text={t('loading')} className="h-[400px]" />;
}
