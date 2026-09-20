import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {theme} from '../shared/theme';
import type {GameMeta} from './types';

const GAMES: GameMeta[] = [
  {id: 'sigil', name: 'SIGIL', tagline: 'Tap. Trust. Betray.', accent: theme.sigil},
  {id: 'ecosystem', name: 'ECOSYSTEM', tagline: 'See alone. Survive together.', accent: theme.ecosystem},
];

export function Home() {
  return (
    <SafeAreaView style={s.root}>
      <Text style={s.brand}>AETERNIA</Text>
      <Text style={s.sub}>Two games. One world.</Text>
      <View style={s.cards}>
        {GAMES.map(game => (
          <View key={game.id} style={[s.card, {borderColor: game.accent}]}>
            <Text style={[s.game, {color: game.accent}]}>{game.name}</Text>
            <Text style={s.tagline}>{game.tagline}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: {flex: 1, backgroundColor: theme.void, padding: 24, justifyContent: 'center'},
  brand: {color: theme.text, fontSize: 36, fontWeight: '800', letterSpacing: 5},
  sub: {color: theme.muted, fontSize: 16, marginTop: 8, marginBottom: 32},
  cards: {gap: 16},
  card: {backgroundColor: theme.panel, borderWidth: 1, borderRadius: 18, padding: 22},
  game: {fontSize: 22, fontWeight: '800', letterSpacing: 2},
  tagline: {color: theme.text, marginTop: 8, fontSize: 15},
});
