import { IOptions, TOrderBy } from '@ts/common';

export const getArrow = (headVal: string, orderBy: TOrderBy): string => {
  if (orderBy.key === headVal) {
    return orderBy.value === 'desc' ? '↑' : '↓';
  }
  return '';
};

export const getCorrectOpt = (opt: IOptions[], val: string): string | null => {
  const filtered = opt.filter(item => item.value === val) || [];
  if (filtered.length > 0) {
    return filtered[0].label || null;
  }
  return null;
};
