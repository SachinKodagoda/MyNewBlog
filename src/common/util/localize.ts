import en from '@translations/english';
import si from '@translations/sinhala';
import { TTranslations } from '@ts/localize';
import { useRouter } from 'next/router';

export const Translations = (): TTranslations => {
  const router = useRouter();
  switch (router.locale) {
    case 'en':
      return en;
    case 'si':
      return si;
    default:
      return en;
  }
};

export { en as english, si as sinhala };
