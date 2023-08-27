import React, {FC} from 'react';
import {LONG_TEXT} from '../../../App';
import {useMeasure} from '../../utils/measure/useMeasure';
import TextInput from 'react-native/Libraries/Components/TextInput/RCTMultilineTextInputNativeComponent';
const NativeTextInput: FC = () => {
  const {startRenderMeasurement, measureRenderTime} = useMeasure();

  startRenderMeasurement();

  return (
    <>
      <TextInput onLayout={measureRenderTime('nativeTextInput')}>
        {LONG_TEXT}
      </TextInput>
    </>
  );
};

NativeTextInput.displayName = 'SCREENS_NATIVE_TEXTINPUT';

export default NativeTextInput;
