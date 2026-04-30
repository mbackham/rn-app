import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, Portal, Modal, Text } from 'react-native-paper';

interface LoadingProps {
  visible: boolean;
  message?: string;
}

export const Loading: React.FC<LoadingProps> = ({ visible, message }) => {
  return (
    <Portal>
      <Modal visible={visible} dismissable={false} contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <ActivityIndicator size="large" />
          {message && <Text style={styles.message}>{message}</Text>}
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 120,
  },
  message: {
    marginTop: 16,
    fontSize: 14,
  },
});
