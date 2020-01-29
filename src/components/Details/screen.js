import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Headline, Paragraph, Caption, Appbar } from 'react-native-paper';
import Hyperlink from 'react-native-hyperlink';

export default ({
  title,
  subtitle,
  description,
  date,
  pictures=[],
  goBack
}) => {
  return (
    <>
    <Appbar
      style={{
        backgroundColor: 'white'
      }}
    >
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={title} />
    </Appbar>
    <ScrollView contentContainerStyle={{
      backgroundColor: 'white',
      paddingHorizontal: 16,
    }}>
      <Headline>{subtitle}</Headline>
      <Caption>{date}</Caption>
      <Hyperlink linkDefault linkStyle={{color: '#2980b9'}}>
        <Paragraph>{description}</Paragraph>
      </Hyperlink>
      {
        pictures.map(img => <Image  source={img} style={{width: 350, height: 400}} resizeMode="contain" />)
      }
    </ScrollView>
    </>
  );
};