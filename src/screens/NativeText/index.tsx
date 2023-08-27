import React, {FC} from 'react';
import {
  NativeText as Text,
  NativeVirtualText,
} from 'react-native/Libraries/Text/TextNativeComponent';
import {AMOUNT_OF_BLOCKS, LONG_TEXT} from '../../../App';
import {useMeasure} from '../../utils/measure/useMeasure';
const NativeText: FC = () => {
  const {startRenderMeasurement, measureRenderTime} = useMeasure();

  startRenderMeasurement();

  return (
    <>
      {AMOUNT_OF_BLOCKS.map((_, id) => (
        <Text key={id} onLayout={measureRenderTime('nativeText')}>
          <NativeVirtualText>{LONG_TEXT}</NativeVirtualText>
        </Text>
      ))}
    </>
  );
};

NativeText.displayName = 'SCREENS_NATIVE_TEXT';

export default NativeText;
