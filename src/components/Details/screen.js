import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Headline, Paragraph, Caption } from 'react-native-paper';
import Hyperlink from 'react-native-hyperlink';

export default ({
  subtitle,
  description,
  date,
  pictures=[]
}) => {
  return (
    <ScrollView contentContainerStyle={{
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 16
    }}>
      <Headline>{subtitle}</Headline>
      <Caption>{date}</Caption>
      <Hyperlink linkDefault linkStyle={{color: '#2980b9'}}>
        <Paragraph>{description}</Paragraph>
      </Hyperlink>
      {
        pictures.map(img => <Image source={img} resizeMode="contain" />)
      }
    </ScrollView>
  );
};