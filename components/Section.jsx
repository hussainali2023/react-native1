import React from 'react';
import {SafeAreaView, SectionList, Text, View} from 'react-native';

const Section = () => {
  const users = [
    {id: 1, name: 'Rohit', data: ['js', 'react', 'remix', 'python']},
    {id: 2, name: 'Mohit', data: ['php', 'react', 'remix', 'python']},
    {id: 3, name: 'Lohit', data: ['C#', 'react', 'remix', 'python']},
  ];
  return (
    <SafeAreaView>
      <View>
        <SectionList
          sections={users}
          renderItem={({item}) => <Text>{item}</Text>}
          renderSectionHeader={({section: {name}}) => (
            <Text style={{fontSize: 25, color: 'red'}}>{name}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Section;
