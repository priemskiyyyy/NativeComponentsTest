import React, {FC} from 'react';
import {
  NativeText as Text,
  NativeVirtualText,
} from 'react-native/Libraries/Text/TextNativeComponent';
import {LONG_TEXT} from '../../../App';
import {useMeasure} from '../../utils/measure/useMeasure';
const NativeText: FC = () => {
  const {startRenderMeasurement, measureRenderTime} = useMeasure();

  startRenderMeasurement();

  return (
    <>
      <Text onLayout={measureRenderTime('nativeText')}>
        <NativeVirtualText>{LONG_TEXT}</NativeVirtualText>
      </Text>
    </>
  );
};

NativeText.displayName = 'SCREENS_NATIVE_TEXT';

export default NativeText;
