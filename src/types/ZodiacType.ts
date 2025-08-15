export type ZodiacSign =
  | 'aries' | 'taurus' | 'gemini' | 'cancer' | 'leo' | 'virgo'
  | 'libra' | 'scorpio' | 'sagittarius' | 'capricorn' | 'aquarius' | 'pisces';

export const ZODIAC_SIGNS: { label: string; value: ZodiacSign }[] = [
    { label: 'Aries', value: 'aries' },
    { label: 'Taurus', value: 'taurus' },
    { label: 'Gemini', value: 'gemini' },
    { label: 'Cancer', value: 'cancer' },
    { label: 'Leo', value: 'leo' },
    { label: 'Virgo', value: 'virgo' },
    { label: 'Libra', value: 'libra' },
    { label: 'Scorpio', value: 'scorpio' },
    { label: 'Sagittarius', value: 'sagittarius' },
    { label: 'Capricorn', value: 'capricorn' },
    { label: 'Aquarius', value: 'aquarius' },
    { label: 'Pisces', value: 'pisces' },
  ];