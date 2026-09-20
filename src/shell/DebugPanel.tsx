import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../shared/theme';
import type {PhaseZeroGate} from './types';

export const APP_IDENTITY = {
  name: 'Aeternia',
  uri: 'https://aeternia.game',
  icon: 'favicon.ico',
} as const;

// Phase 0 deliberately starts unverified. Runtime/device evidence is required.
export const PHASE_ZERO_GATES: PhaseZeroGate[] = [
  {id: 'nfc-write', label: 'NFC write', status: 'unverified'},
  {id: 'nfc-read', label: 'NFC read', status: 'unverified'},
  {id: 'wallet', label: 'Phantom / MWA', status: 'unverified'},
  {id: 'devnet', label: 'Solana Devnet', status: 'unverified'},
  {id: 'anchor', label: 'Anchor deploy', status: 'unverified'},
  {id: 'shell', label: 'AETERNIA shell', status: 'unverified'},
];

export function DebugPanel() {
  return (
    <View style={s.root}>
      <Text style={s.title}>PHASE 0</Text>
      {PHASE_ZERO_GATES.map(gate => (
        <Text key={gate.id} style={s.row}>
          {gate.status === 'pass' ? '🟢' : gate.status === 'fail' ? '🔴' : '⚪'} {gate.label}
        </Text>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  root: {backgroundColor: theme.panel, padding: 16},
  title: {color: theme.text, fontWeight: '800', marginBottom: 8},
  row: {color: theme.text, marginVertical: 3},
});
