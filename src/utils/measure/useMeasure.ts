import {useCallback, useRef} from 'react';
import {useStats} from '../../context/Stats';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();
export const useMeasure = () => {
  const start = useRef(0);
  const duration = useRef(0);

  const [state, set] = useStats(state => state);
  const measureRenderTime = useCallback(
    (variant: keyof typeof state) => () => {
      if (start.current !== 0) {
        duration.current = new Date().getTime() - start.current;
        set({
          [variant]: state?.[variant]?.add(duration.current),
        });
      }
    },
    [set, state],
  );

  const startRenderMeasurement = useCallback(() => {
    start.current = new Date().getTime();
  }, []);

  return {
    measureRenderTime,
    startRenderMeasurement,
  };
};
