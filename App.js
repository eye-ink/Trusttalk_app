import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <WebView
    //     source={{ uri: 'https://trusttalk.net' }}
    //     style={{ flex: 1 }}
    //   />
    // </View>
    <WebView
        source={{ uri: 'https://trusttalk.net' }}
        style={styles.container}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
