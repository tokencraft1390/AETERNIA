import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Connection,clusterApiUrl} from '@solana/web3.js';
import {theme} from '../shared/theme';
export const APP_IDENTITY={name:'Aeternia',uri:'https://aeternia.game',icon:'favicon.ico'} as const;
export async function pingDevnet(){return new Connection(clusterApiUrl('devnet'),'confirmed').getSlot();}
export function DebugPanel(){return <View style={s.panel}><Text style={s.title}>PHASE 0 · EVIDENCE GATES</Text>{['NFC WRITE','NFC READ','WALLET / MWA','DEVNET RPC','ANCHOR DEPLOY','SHELL BOOT'].map(x=><Text key={x} style={s.row}>⬜ {x}</Text>)}</View>}
const s=StyleSheet.create({panel:{backgroundColor:theme.void,padding:20},title:{color:theme.ecosystem,fontWeight:'800',marginBottom:12},row:{color:theme.text,marginVertical:4}});