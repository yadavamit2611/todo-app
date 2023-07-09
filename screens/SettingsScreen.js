import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, CheckBox, StyleSheet } from 'react-native';

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
      <br/>
      <View style={styles.item}>
        <CheckBox
          value={notificationSettings.smsEnabled}
          onValueChange={() => handleToggleSetting('smsEnabled')}
        />
        <Text style={{color:'white'}}>SMS Notifications</Text>
      </View>
      <br/>
      <View style={styles.item}>
        <CheckBox
          value={notificationSettings.pushEnabled}
          onValueChange={() => handleToggleSetting('pushEnabled')}
        />
        <Text style={{color:'white'}}>Push Notifications</Text>
      </View>
      <br/>
      <View style={styles.item}>
        <CheckBox
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
    alignItems:'center',
  }
});

export default SettingsScreen;
