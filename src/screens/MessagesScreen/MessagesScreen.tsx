import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MessagesScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Chat Screen</Text>
      <Button
        title="Go to Chat Screen"
        onPress={() => navigation.navigate('Chat')}
      />
    </SafeAreaView>
  );
};

export default MessagesScreen;
