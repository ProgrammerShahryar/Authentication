import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sLayout: {
    flex: 1,

    padding: 16,

    backgroundColor: '#f0f4f8',
  },
  sItem: {
    padding: 16,
    marginVertical: 8,


    marginHorizontal: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,


    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,

    shadowRadius: 8,
    elevation: 2,
  },
  sTitle: {
    fontSize: 18,
    color: '#333333',
    fontWeight: '500',
  }
});

export default styles;
