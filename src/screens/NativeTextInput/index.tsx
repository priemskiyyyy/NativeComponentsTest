import React, {FC} from 'react';
import {AMOUNT_OF_BLOCKS, LONG_TEXT} from '../../../App';
import {useMeasure} from '../../utils/measure/useMeasure';
import TextInput from 'react-native/Libraries/Components/TextInput/RCTMultilineTextInputNativeComponent';
const NativeTextInput: FC = () => {
  const {startRenderMeasurement, measureRenderTime} = useMeasure();

  startRenderMeasurement();

  return (
    <>
      {AMOUNT_OF_BLOCKS.map((_, id) => (
        <TextInput key={id} onLayout={measureRenderTime('nativeTextInput')}>
          {LONG_TEXT}
        </TextInput>
      ))}
    </>
  );
};

NativeTextInput.displayName = 'SCREENS_NATIVE_TEXTINPUT';

export default NativeTextInput;
