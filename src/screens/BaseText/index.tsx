import React, {FC} from 'react';
import {Text} from 'react-native';
import {LONG_TEXT} from '../../../App';
import {useMeasure} from '../../utils/measure/useMeasure';
const BaseText: FC = () => {
  const {startRenderMeasurement, measureRenderTime} = useMeasure();

  startRenderMeasurement();

  return (
    <>
      <Text onLayout={measureRenderTime('baseText')}>{LONG_TEXT}</Text>
    </>
  );
};

BaseText.displayName = 'SCREENS_BASE_TEXT';

export default BaseText;
