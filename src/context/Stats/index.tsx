import createFastContext from '../../utils/context/createFastContext';

export const {useStore: useStats, Provider: StatsProvider} = createFastContext({
  baseView: new Set(),
  nativeView: new Set(),
  baseTextInput: new Set(),
  nativeTextInput: new Set(),
  baseText: new Set(),
  nativeText: new Set(),
});
