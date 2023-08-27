import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  item: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginBottom: 20,
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,255,0.5)',
    marginTop: 3,
  },
  container: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
  },
  difference: {
    color: 'green',
  },
  divider: {
    height: 1,
    width: '100%',
    marginTop: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});
