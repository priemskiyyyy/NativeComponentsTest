import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import NativeListItem from '../../components/NativeListItem';
import {AMOUNT_OF_ITEMS} from '../../../App';

const NativeViews: FC = () => {
  return (
    <ScrollView>
      {AMOUNT_OF_ITEMS.map((_, id) => (
        <NativeListItem key={id} />
      ))}
    </ScrollView>
  );
};

NativeViews.displayName = 'SCREENS_NATIVE_VIEWS';

export default NativeViews;
