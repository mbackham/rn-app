import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export const WelcomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="displaySmall" style={styles.title}>
              欢迎使用
            </Text>
            <Text variant="headlineMedium" style={styles.appName}>
              RN App
            </Text>
            <Text variant="bodyLarge" style={styles.description}>
              基于 Expo + React Native Paper 构建的现代化移动应用
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={() => console.log('开始使用')}>
              开始使用
            </Button>
            <Button mode="outlined" onPress={() => console.log('了解更多')}>
              了解更多
            </Button>
          </Card.Actions>
        </Card>

        <View style={styles.features}>
          <Text variant="titleMedium" style={styles.featuresTitle}>
            ✨ 特性
          </Text>
          <Text variant="bodyMedium" style={styles.feature}>
            • 完整的目录结构和路径别名
          </Text>
          <Text variant="bodyMedium" style={styles.feature}>
            • 环境变量配置
          </Text>
          <Text variant="bodyMedium" style={styles.feature}>
            • Material Design 3 主题
          </Text>
          <Text variant="bodyMedium" style={styles.feature}>
            • 通用组件封装
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  card: {
    marginBottom: 24,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  appName: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    textAlign: 'center',
    marginBottom: 16,
    color: '#666',
  },
  features: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  featuresTitle: {
    marginBottom: 12,
    fontWeight: 'bold',
  },
  feature: {
    marginBottom: 8,
    color: '#666',
  },
});
