import { HoroscopeData } from "../types/HoroscopeType";
import { ZodiacSign } from "../types/ZodiacType";
  
const MOCK_RESPONSES: Record<ZodiacSign, HoroscopeData & { asset: string }> = {
  aries: {
    date: '2025-08-15',
    sign: 'Aries',
    description: 'Today is a great day to reflect and write in your journal.',
    mood: 'Reflective',
    lucky_number: '7',
    lucky_color: 'Blue',
    asset: '♈️',
  },
  taurus: {
    date: '2025-08-15',
    sign: 'Taurus',
    description: 'Patience will lead you to new opportunities.',
    mood: 'Calm',
    lucky_number: '4',
    lucky_color: 'Green',
    asset: '♉️',
  },
  gemini: {
    date: '2025-08-15',
    sign: 'Gemini',
    description: 'Conversations spark unexpected ideas today. Keep an open mind.',
    mood: 'Curious',
    lucky_number: '3',
    lucky_color: 'Yellow',
    asset: '♊️',
  },
  cancer: {
    date: '2025-08-15',
    sign: 'Cancer',
    description: 'Focus on home and family will bring you comfort.',
    mood: 'Nurturing',
    lucky_number: '6',
    lucky_color: 'Silver',
    asset: '♋️',
  },
  leo: {
    date: '2025-08-15',
    sign: 'Leo',
    description: 'Your confidence will attract the right kind of attention.',
    mood: 'Bold',
    lucky_number: '1',
    lucky_color: 'Gold',
    asset: '♌️',
  },
  virgo: {
    date: '2025-08-15',
    sign: 'Virgo',
    description: 'Pay attention to the details — they hold the key to success.',
    mood: 'Practical',
    lucky_number: '5',
    lucky_color: 'Beige',
    asset: '♍️',
  },
  libra: {
    date: '2025-08-15',
    sign: 'Libra',
    description: 'Balance is your best friend today. Avoid extreme choices.',
    mood: 'Harmonious',
    lucky_number: '2',
    lucky_color: 'Pink',
    asset: '♎️',
  },
  scorpio: {
    date: '2025-08-15',
    sign: 'Scorpio',
    description: 'Secrets may come to light — use them wisely.',
    mood: 'Intense',
    lucky_number: '9',
    lucky_color: 'Maroon',
    asset: '♏️',
  },
  sagittarius: {
    date: '2025-08-15',
    sign: 'Sagittarius',
    description: 'Adventure calls, even in small ways — answer it.',
    mood: 'Optimistic',
    lucky_number: '8',
    lucky_color: 'Purple',
    asset: '♐️',
  },
  capricorn: {
    date: '2025-08-15',
    sign: 'Capricorn',
    description: 'Your discipline today lays the foundation for future rewards.',
    mood: 'Ambitious',
    lucky_number: '10',
    lucky_color: 'Brown',
    asset: '♑️',
  },
  aquarius: {
    date: '2025-08-15',
    sign: 'Aquarius',
    description: 'Innovation flows easily — share your unique vision.',
    mood: 'Inventive',
    lucky_number: '11',
    lucky_color: 'Turquoise',
    asset: '♒️',
  },
  pisces: {
    date: '2025-08-15',
    sign: 'Pisces',
    description: 'Your intuition is strong — trust it in all matters.',
    mood: 'Dreamy',
    lucky_number: '12',
    lucky_color: 'Sea Green',
    asset: '♓️',
  },
};


export const fetchHoroscope = async (
  sign: ZodiacSign,
  day: 'today' | 'tomorrow' | 'yesterday' = 'today'
): Promise<HoroscopeData> => {
  const data = MOCK_RESPONSES[sign.toLowerCase() as keyof typeof MOCK_RESPONSES];

  if (!data) {
    throw new Error(`No mock data found for sign: ${sign}`);
  }

  return {
    ...data,
    // Always return today's date
    date: new Date().toISOString().slice(0, 10),
  };
};