import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View
} from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
import defaultPatch from '../assets/defaultPatch.png'
import formatDate from '../utils/formatDate'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#37474F'
  },
  infoBarText: {
    fontSize: 20,
    color: '#FFF',
  },
  infoBarTextContent: {
    fontSize: 20,
    color: '#62727B',
    paddingBottom: 5
  }
});

const Details = (props) => {
  const { mission_name, links, launch_date_utc, flight_number, rocket, launch_site, details, upcoming, launch_success } = props.navigation.state.params.launch;
  const { block, reused, land_success, landing_intent, landing_vehicle, core_serial } = rocket.first_stage.cores[0];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Image source={(links.mission_patch_small !== null) ? { uri: links.mission_patch_small } : defaultPatch} style={{ width: 120, height: 120, margin: 15 }} />
          <Text style={{ fontSize: 26, color: "#FFF", marginBottom: 15, textAlign: 'center', fontFamily: 'Audiowide' }}> {mission_name}</Text>
          <View style={styles.infoBar}>
            <Text style={styles.infoBarText}>launch date:</Text>
            <Text style={styles.infoBarTextContent}>{formatDate(launch_date_utc)}</Text>
          </View>
          <View style={styles.infoBar}>
            <Text style={styles.infoBarText}>launch number:</Text>
            <Text style={styles.infoBarTextContent}>{flight_number}</Text>
          </View>
          <View style={styles.infoBar}>
            <Text style={styles.infoBarText}>rocket</Text>
            <Text style={styles.infoBarTextContent}>
              {`${rocket.rocket_name} `}
              {block !== null ? `block ${block}` : ''}
            </Text>
          </View>
          <View style={styles.infoBar}>
            <Text style={styles.infoBarText}>launch site:</Text>
            <Text style={styles.infoBarTextContent}>{launch_site.site_name}</Text>
          </View>
          <View style={styles.infoBar}>
            <Text style={styles.infoBarText}>payloads:</Text>
            <Text style={styles.infoBarTextContent}>
              {rocket.second_stage.payloads.map((payload) => `${payload.payload_id} `)}
            </Text>
          </View>
          {
            !upcoming ? (
              <View style={styles.infoBar}>
                <Text style={styles.infoBarText}>mission success:</Text>
                <Text style={styles.infoBarTextContent}>{launch_success === true ? 'Yes' : 'No'}</Text>
              </View>
            ) : null
          }
          <View style={styles.infoBar}>
            <Text style={styles.infoBarText}>reused:</Text>
            <Text style={styles.infoBarTextContent}>
              {reused === true ? 'Yes' : 'No'}
            </Text>
          </View>
          {
            !upcoming && landing_intent ? (
              <View style={styles.infoBar}>
                <Text style={styles.infoBarText}>land success</Text>
                <Text style={styles.infoBarTextContent}>
                  {land_success === true ? 'Yes' : 'No'}
                </Text>
              </View>
            ) : null
          }
          {
            landing_intent ? (
              <View style={styles.infoBar}>
                <Text style={styles.infoBarText}>landing vehicle:</Text>
                <Text style={styles.infoBarTextContent}>
                  {landing_vehicle}
                </Text>
              </View>
            ) :
              (
                <View style={styles.infoBar}>
                  <Text style={styles.infoBarText}>landing intent:</Text>
                  <Text style={styles.infoBarTextContent}>
                    {landing_intent === true ? 'Yes' : 'No'}
                  </Text>
                </View>
              )
          }
          {
            core_serial ? (
              <View style={styles.infoBar}>
                <Text style={styles.infoBarText}>core number:</Text>
                <Text style={styles.infoBarTextContent}>
                  {core_serial}
                </Text>
              </View>
            ) : null
          }
          {
            details ? (
              <View style={styles.infoBar}>
                <Text style={styles.infoBarText}>details:</Text>
                <Text style={{
                  textAlign: 'justify',
                  fontSize: 20,
                  color: '#62727B'
                }}>
                  {details}
                </Text>
              </View>
            ) : null
          }
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

export default Details;
