import React, {FC} from 'react';
import {TextInput} from 'react-native';
import {LONG_TEXT} from '../../../App';
import {useMeasure} from '../../utils/measure/useMeasure';
let shouldMeasure = false;
// onLayout beeing called twice
const measureRealLayout =
  (measure = () => {}) =>
  () => {
    if (!shouldMeasure) {
      shouldMeasure = true;
      return;
    }
    measure();
    shouldMeasure = false;
  };
const BaseTextInput: FC = () => {
  const {startRenderMeasurement, measureRenderTime} = useMeasure();

  startRenderMeasurement();

  return (
    <>
      <TextInput
        value={LONG_TEXT}
        onLayout={measureRealLayout(measureRenderTime('baseTextInput'))}
        multiline
      />
    </>
  );
};

BaseTextInput.displayName = 'SCREENS_BASE_TEXT_INPUT';

export default BaseTextInput;
