import React, {FC} from 'react';
import {TextInput} from 'react-native';
import {AMOUNT_OF_BLOCKS, LONG_TEXT} from '../../../App';
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
  };
const BaseTextInput: FC = () => {
  const {startRenderMeasurement, measureRenderTime} = useMeasure();

  startRenderMeasurement();

  return (
    <>
      {AMOUNT_OF_BLOCKS.map((_, id) => (
        <TextInput
          key={id}
          value={LONG_TEXT}
          onLayout={measureRealLayout(measureRenderTime('baseTextInput'))}
          multiline
        />
      ))}
    </>
  );
};

BaseTextInput.displayName = 'SCREENS_BASE_TEXT_INPUT';

export default BaseTextInput;
