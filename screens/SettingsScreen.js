import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Switch } from 'react-native';

const SettingsScreen = () => {
  const notificationSettings = useSelector((state) => state.notificationSettings);
  const dispatch = useDispatch();

  const handleToggleSetting = (setting) => {
    dispatch({
      type: 'SET_NOTIFICATION_SETTING',
      payload: { setting, value: !notificationSettings[setting] },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Switch
          value={notificationSettings.smsEnabled}
          onValueChange={() => handleToggleSetting('smsEnabled')}
        />
        <Text style={{color:'white'}}>SMS Notifications</Text>
      </View>
      <View style={styles.item}>
        <Switch
          value={notificationSettings.pushEnabled}
          onValueChange={() => handleToggleSetting('pushEnabled')}
        />
        <Text style={{color:'white'}}>Push Notifications</Text>
      </View>
      <View style={styles.item}>
        <Switch
          value={notificationSettings.emailEnabled}
          onValueChange={() => handleToggleSetting('emailEnabled')}
        />
        <Text style={{color:'white'}}>Email Notifications</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignContent:'center'
  },
  item:
  {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  }
});

export default SettingsScreen;
