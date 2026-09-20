export type SigilPhase = 'lobby' | 'join' | 'assign' | 'challenge' | 'vote' | 'resolve';

export type SigilState = {phase: SigilPhase};

export type SigilAction = {type: 'ADVANCE'} | {type: 'RESET'};

const order: SigilPhase[] = ['lobby', 'join', 'assign', 'challenge', 'vote', 'resolve'];

export function sigilReducer(state: SigilState, action: SigilAction): SigilState {
  if (action.type === 'RESET') return {phase: 'lobby'};
  const index = order.indexOf(state.phase);
  return {phase: order[Math.min(index + 1, order.length - 1)]};
}

export const initialSigilState: SigilState = {phase: 'lobby'};
