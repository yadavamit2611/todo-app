import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, CheckBox, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [pushEnabled, setPushEnabled] = useState(false);
  const [emailEnabled, setEmailEnabled] = useState(false);

  const dispatch = useDispatch();

  const handleSmsToggle = () => {
    setSmsEnabled(!smsEnabled);
  };

  const handlePushToggle = () => {
    setPushEnabled(!pushEnabled);
  };

  const handleEmailToggle = () => {
    setEmailEnabled(!emailEnabled);
  };

  return (
    <View style={styles.container}>
      <br/>
      <View style={styles.item}>
        <CheckBox value={smsEnabled} onValueChange={handleSmsToggle} />
        <Text style={{color:'white'}}>SMS Notifications</Text>
      </View>
      <View style={styles.item}>
        <CheckBox value={pushEnabled} onValueChange={handlePushToggle} />
        <Text style={{color:'white'}}>Push Notifications</Text>
      </View>
      <View style={styles.item}>
        <CheckBox value={emailEnabled} onValueChange={handleEmailToggle} />
        <Text style={{color:'white'}}>Email Notifications</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  item:
  {
    alignItems:'center',
  }
});

export default SettingsScreen;
