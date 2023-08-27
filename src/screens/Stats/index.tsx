import React, {FC, useMemo} from 'react';
import {useStats} from '../../context/Stats';
import {SafeAreaView, Text, View} from 'react-native';
import {getAverage, getPercentageDifference} from '../../utils/measure/helpers';
import {styles} from '../../styles';
const Stats: FC = () => {
  const [data, set] = useStats(state => state);

  const baseView = useMemo(() => getAverage(data.baseView), [data.baseView]);
  const nativeView = useMemo(
    () => getAverage(data.nativeView),
    [data.nativeView],
  );
  const baseTextInput = useMemo(
    () => getAverage(data.baseTextInput),
    [data.baseTextInput],
  );
  const nativeTextInput = useMemo(
    () => getAverage(data.nativeTextInput),
    [data.nativeTextInput],
  );
  const baseText = useMemo(() => getAverage(data.baseText), [data.baseText]);
  const nativeText = useMemo(
    () => getAverage(data.nativeText),
    [data.nativeText],
  );
  const differenceBetweenText = useMemo(
    () => getPercentageDifference(baseText, nativeText),
    [baseText, nativeText],
  );
  const differenceBetweenViews = useMemo(
    () => getPercentageDifference(nativeView, baseView),
    [nativeView, baseView],
  );
  const differenceBetweenInputs = useMemo(
    () => getPercentageDifference(nativeTextInput, baseTextInput),
    [nativeTextInput, baseTextInput],
  );
  return (
    <SafeAreaView style={styles.container}>
      {/*Views*/}
      <Text style={styles.title}>Base Views (Imported from React-Native)</Text>
      <Text>Average render time: {baseView}</Text>
      <Text style={styles.title}>Native Views (Imported Directly)</Text>
      <Text>Average render time: {nativeView}</Text>
      <Text style={styles.title}>Native faster by:</Text>
      <Text style={styles.difference}>{differenceBetweenViews}%</Text>
      <View style={styles.divider} />
      {/*Views*/}

      {/*Inputs*/}
      <Text style={styles.title}>Base Inputs (Imported from React-Native)</Text>
      <Text>Average render time: {baseTextInput}</Text>
      <Text style={styles.title}>Native Inputs (Imported Directly)</Text>
      <Text>Average render time: {nativeTextInput}</Text>
      <Text style={styles.title}>Native faster by:</Text>
      <Text style={styles.difference}>{differenceBetweenInputs}%</Text>
      <View style={styles.divider} />
      {/*Inputs*/}

      {/*Text*/}
      <Text style={styles.title}>Base Text (Imported from React-Native)</Text>
      <Text>Average render time: {baseText}</Text>
      <Text style={styles.title}>Native Text (Imported Directly)</Text>
      <Text>Average render time: {nativeText}</Text>
      <Text style={styles.title}>Native faster by:</Text>
      <Text style={styles.difference}>{differenceBetweenText}%</Text>
      <View style={styles.divider} />
      {/*Text*/}
    </SafeAreaView>
  );
};

Stats.displayName = 'SCREENS_STATS';

export default Stats;
