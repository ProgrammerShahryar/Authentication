import { View, Text } from 'react-native';
import styles from './styles';

export default function Header() {
  return (
    <View style={styles.aOne}>
      <View style={styles.smallArea}>


        <Text style={styles.aThree}>Authentication</Text>


      </View>

      
      <Text style={styles.aName}>by Shahryar Salim</Text>
    </View>
  );
}
