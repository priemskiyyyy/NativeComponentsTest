import React, {FC} from 'react';
import {View} from 'react-native';
import {useMeasure} from '../../utils/measure/useMeasure';
import {styles} from '../../styles';
import {AMOUNT_OF_BLOCKS} from '../../../App';

const ListItem: FC = () => {
  const {startRenderMeasurement, measureRenderTime} = useMeasure();

  startRenderMeasurement();
  return (
    <View onLayout={measureRenderTime('baseView')} style={styles.item}>
      {AMOUNT_OF_BLOCKS.map((_, id) => (
        <View style={styles.child} key={id} />
      ))}
    </View>
  );
};

ListItem.displayName = 'BASE_LIST_ITEM';

export default ListItem;
