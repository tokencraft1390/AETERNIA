export type GameId = 'sigil' | 'ecosystem';

export type GameMeta = {
  id: GameId;
  name: string;
  tagline: string;
  accent: string;
};

export type PhaseZeroStatus = 'unverified' | 'pass' | 'fail';

export type PhaseZeroGate = {
  id: 'nfc-write' | 'nfc-read' | 'wallet' | 'devnet' | 'anchor' | 'shell';
  label: string;
  status: PhaseZeroStatus;
  evidence?: string;
};
