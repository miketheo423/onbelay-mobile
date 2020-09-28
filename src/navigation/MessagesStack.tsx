import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MessagesScreen } from '../screens';
import ChatScreen from '../screens/ChatScreen/ChatScreen';

const MessagesStack = createStackNavigator();

function MessagesStackScreen() {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen
        name="Messages"
        component={MessagesScreen}
        options={{ headerShown: false }}
      />
      <MessagesStack.Screen name="Chat" component={ChatScreen} />
    </MessagesStack.Navigator>
  );
}

export default MessagesStackScreen;
