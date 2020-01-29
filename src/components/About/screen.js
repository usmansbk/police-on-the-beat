import React from 'react';
import { View, Image } from 'react-native';
import { Paragraph, Headline, Caption, Title } from 'react-native-paper';

export default () => (
  <View style={{
    flex: 1,
    alignItems: 'center',
    padding: 32
  }}>
    <Image
      style={{
        width: 100,
        height: 100
      }}
      source={require('../../assets/potb.png')}
    />
    <Headline>Police On The Beat</Headline>

    <Title>Legal</Title>
    <Paragraph>
      Copyright 2020 Final year project 
    </Paragraph>
    <Paragraph>
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
    </Paragraph>
    <Paragraph>
      Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
    </Paragraph>
    <Title>
      Developers
    </Title>
    <Caption>Babakolo Usman Suleiman</Caption>
    <Caption>Abubakar</Caption>

    <Title>Version</Title>
    <Caption>0.0.1-alpha</Caption>

    <Title>Contact</Title>
    <Caption>usmansbk@gmail.com</Caption>
  </View>
);