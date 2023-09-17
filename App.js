import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ex1 from './scr/Ex1';
import Ex2 from './scr/Ex2';
import Ex3 from './scr/Ex3';
import Ex4 from './scr/Ex4';
import Ex6 from './scr/Ex6';
import Ex5 from './scr/Ex5';
import Ex7 from './scr/Ex7';
import Ex8 from './scr/Ex8';



const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Ex1', title: 'Ex1', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex2', title: 'Ex2', focusedIcon: 'arrow', unfocusedIcon: 'arrow-right-drop-circle'},
    { key: 'Ex3', title: 'Ex3', focusedIcon: 'head', unfocusedIcon: 'head'},
    { key: 'Ex4', title: 'Ex4', focusedIcon: 'guy', unfocusedIcon: 'guy-fawkes-mask'},
    { key: 'Ex5', title: 'Ex5', focusedIcon: 'guitar', unfocusedIcon: 'guitar-acoustic'},
    { key: 'Ex6', title: 'Ex6', focusedIcon: 'guitar', unfocusedIcon: 'handcuffs'},
    { key: 'Ex7', title: 'Ex7', focusedIcon: 'guitar', unfocusedIcon: 'hand-clap'},
    { key: 'Ex8', title: 'Ex8', focusedIcon: 'guitar', unfocusedIcon: 'heart-half-full'},
    
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Ex1: Ex1,
    Ex2: Ex2,
    Ex3: Ex3,
    Ex4: Ex4,
    Ex5: Ex5,
    Ex6: Ex6,
    Ex7: Ex7,
    Ex8: Ex8

  });

  return (
    <SafeAreaProvider>
       <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </SafeAreaProvider>
   
  );
};

export default MyComponent;