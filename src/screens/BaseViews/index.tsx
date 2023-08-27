import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import ListItem from '../../components/ListItem';
import {AMOUNT_OF_ITEMS} from '../../../App';
const BaseViews: FC = () => {
  return (
    <ScrollView>
      {AMOUNT_OF_ITEMS.map((_, id) => (
        <ListItem key={id} />
      ))}
    </ScrollView>
  );
};

BaseViews.displayName = 'SCREENS_BASE_VIEWS';

export default BaseViews;
