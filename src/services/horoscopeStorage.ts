import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_PREFIX = '@astro/horoscope/';

const buildKey = (key: string) => `${STORAGE_PREFIX}/${key}`;

// Save data to async storage
export const saveHoroscopeDataToStorage = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(buildKey(key), JSON.stringify(value));
  } catch (e) {
    console.error('Error saving data to async storage', e);
  }
};

// Get data from async storage
export const getHoroscopeDataFromStorage = async <T>(key: string): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(buildKey(key));
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error reading data from async storage', e);
    return null;
  }
};

// Delete data from async storage
export const deleteHoroscopeDataFromStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(buildKey(key));
  } catch (e) {
    console.error('Error deleting data from async storage', e);
  }
};
