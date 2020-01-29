import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Paragraph, Headline, Caption, Title } from 'react-native-paper';

export default () => (
  <ScrollView contentContainerStyle={{
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
      All crime data are randomly generated for testing purpose only and have nothing to do with their locations.{'\n\n'}
      Copyright 2020{'\n\n'}
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.{'\n\n'}You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
      Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.{'\n\n'}See the License for the specific language governing permissions and limitations under the License.
    </Paragraph>

    <Title>Version</Title>
    <Caption>0.0.1-alpha</Caption>
  </ScrollView>
);