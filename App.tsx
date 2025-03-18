import React from 'react';
import { SafeAreaView } from 'react-native';
import ImageFrame from './src/components/ImageFrame';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageFrame />
    </SafeAreaView>
  );
};

export default App;
