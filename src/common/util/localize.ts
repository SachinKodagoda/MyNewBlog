import { useRouter } from 'next/router';

import en from '@translations/english';
import de from '@translations/german';
import { TTranslations } from '@ts/localize';

export const Translations = (): TTranslations => {
  const router = useRouter();
  switch (router.locale) {
    case 'en':
      return en;
    case 'de': // German
      return de;
    default:
      return en;
  }
};

export { en as english, de as german };
