import Reactotron from 'reactotron-react-native';

Reactotron.configure({ name: 'Virtus Vox' })
  .useReactNative()
  .connect();

Reactotron.clear();