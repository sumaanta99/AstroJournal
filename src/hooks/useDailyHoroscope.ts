import { useState, useEffect } from 'react';
import { fetchHoroscope } from '../services/astrologyApi';
import { getHoroscopeDataFromStorage, saveHoroscopeDataToStorage } from '../services/horoscopeStorage';
import { HoroscopeData as HoroscopeDataTypes } from '../types/HoroscopeType';
import { ZodiacSign } from '../types/ZodiacType';

// returns horoscope data from astrologyApi
// uses offline cache first approach
// then gets data from API if nothing in storage
export const useDailyHoroscope = (sign: ZodiacSign, date: string) => {
  const [data, setData] = useState<HoroscopeDataTypes | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadHoroscope = async () => {
      setLoading(true);
      const cacheKey = `horoscope/${sign}/${date}`;
      // checks async storage
      const cached = await getHoroscopeDataFromStorage<HoroscopeDataTypes>(cacheKey);

      if (cached) {
        // if data in storage, return
        setData(cached);
        setLoading(false);
      } else {
        // call astrologyAPI
        const freshData = await fetchHoroscope(sign, 'today');
        if (mounted) {
          setData(freshData);
          saveHoroscopeDataToStorage(cacheKey, freshData);
          setLoading(false);
        }
      }
    };

    loadHoroscope();
    return () => {
      mounted = false;
    };
  }, [sign, date]);

  // returns horoscope data and loading to manage 
  // loading states
  return { data, loading };
};
