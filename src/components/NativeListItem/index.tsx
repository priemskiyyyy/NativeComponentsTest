import React, {FC} from 'react';
import View from 'react-native/Libraries/Components/View/ViewNativeComponent';
import {useMeasure} from '../../utils/measure/useMeasure';
import {styles} from '../../styles';
import {AMOUNT_OF_BLOCKS} from '../../../App';

const NativeListItem: FC = () => {
  const {startRenderMeasurement, measureRenderTime} = useMeasure();

  startRenderMeasurement();
  return (
    <View onLayout={measureRenderTime('nativeView')} style={styles.item}>
      {AMOUNT_OF_BLOCKS.map((_, id) => (
        <View style={styles.child} key={id} />
      ))}
    </View>
  );
};

NativeListItem.displayName = 'NATIVE_LIST_ITEM';

export default NativeListItem;
