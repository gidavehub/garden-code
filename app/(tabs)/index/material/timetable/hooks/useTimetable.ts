// app/material/timetable/hooks/useTimetable.ts
import { TimetableData } from '@/utils/ai/timetableScanScript';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

const TIMETABLE_STORAGE_KEY = 'timetable';

export function useTimetable() {
  const [timetable, setTimetable] = useState<TimetableData | null>(null);
  const [isLoading, setIsLoading] = useState(true); // For initial check
  const [isProcessing, setIsProcessing] = useState(false); // For AI "scan"

  const loadTimetable = useCallback(async () => {
    setIsLoading(true);
    try {
      const jsonValue = await AsyncStorage.getItem(TIMETABLE_STORAGE_KEY);
      setTimetable(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (e) {
      console.error('Failed to load timetable', e);
      setTimetable(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => { loadTimetable(); }, [loadTimetable]);

  const saveTimetable = async (data: TimetableData) => {
    try {
      await AsyncStorage.setItem(TIMETABLE_STORAGE_KEY, JSON.stringify(data));
      setTimetable(data);
    } catch (e) { console.error('Failed to save timetable', e); }
  };

  const clearTimetable = async () => {
    try {
      await AsyncStorage.removeItem(TIMETABLE_STORAGE_KEY);
      setTimetable(null);
    } catch (e) { console.error('Failed to clear timetable', e); }
  };

  return { timetable, isLoading, isProcessing, setIsProcessing, saveTimetable, clearTimetable };
}