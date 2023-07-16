import { StatusBar } from "expo-status-bar";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <>
      <WebView
        source={{ uri: "https://bhavya-ngo.vercel.app/" }}
        style={{ marginTop: 15 }}
      />
      <StatusBar style="auto" backgroundColor="#ffffff" />
    </>
  );
}
