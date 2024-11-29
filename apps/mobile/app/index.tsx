import { alignCenter, bgRed500, flex1, justifyCenter, textWhite500, textXl } from "@/styles";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={[flex1, justifyCenter, alignCenter]}>
      <Text style={[textXl,bgRed500, textWhite500]}>React native configuração.</Text>
    </View>
  );
}
