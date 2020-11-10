import {StyleSheet, Dimensions} from 'react-native';
const Style = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 64,
    justifyContent: 'center',
  },
  CellCotainer: {
    height: 80,
    marginLeft: 13,
    marginRight: 13,
    marginVertical: 4,
  },
  subContainer: {
    borderRadius: 4,
    backgroundColor: '#e1f2f2',
    borderBottomColor: 'black',
  },
  list: {
    flex: 1,
    paddingBottom: 40,
  },
  nameAndFollow: {
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    marginTop: 4,
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 13,
    color: '#2b3333',
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2b3333',
  },
  followButton: {
    height: 40,
    width: 88,
    borderRadius: 4,
    right: 8,
    backgroundColor: '#b5b5b3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  followedBy: {
    marginLeft: 13,
    marginTop: 13,
    height: 'auto',
    fontSize: 15,
    color: '#2b3333',
  },
});
export default Style;
