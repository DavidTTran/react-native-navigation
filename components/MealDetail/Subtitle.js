import { Text, StyleSheet } from 'react-native';

function SubTitle({ children }) {
  return(
    <Text style={styles.subtitle}>{children}</Text>
  )
}

export default SubTitle;

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontsize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 1,
    textAlign: 'center'
  },
})
