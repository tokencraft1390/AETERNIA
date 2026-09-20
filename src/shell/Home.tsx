import React from 'react';
import {SafeAreaView,Text,View,StyleSheet} from 'react-native';
import {theme} from '../shared/theme';
import type {GameMeta} from './types';
const GAMES:GameMeta[]=[{id:'sigil',name:'SIGIL',tagline:'Tap. Trust. Betray.',accent:theme.sigil},{id:'ecosystem',name:'ECOSYSTEM',tagline:'See alone. Survive together.',accent:theme.ecosystem}];
export function Home(){return <SafeAreaView style={s.root}><Text style={s.brand}>AETERNIA</Text><Text style={s.sub}>Two games. One world.</Text>{GAMES.map(g=><View key={g.id} style={[s.card,{borderColor:g.accent}]}><Text style={[s.game,{color:g.accent}]}>{g.name}</Text><Text style={s.tag}>{g.tagline}</Text></View>)}</SafeAreaView>}
const s=StyleSheet.create({root:{flex:1,backgroundColor:theme.void,padding:24,justifyContent:'center'},brand:{color:theme.text,fontSize:42,fontWeight:'800',letterSpacing:5},sub:{color:theme.muted,fontSize:16,marginBottom:36},card:{borderWidth:1,borderRadius:18,padding:22,marginVertical:8},game:{fontSize:24,fontWeight:'800'},tag:{color:theme.text,marginTop:6,fontSize:15}});