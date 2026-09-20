export type SigilState={phase:'lobby'|'join'|'assign'|'challenge'|'vote'|'resolve'};
export const initialSigilState:SigilState={phase:'lobby'};
// Phase A reducer follows only after Phase 0 evidence gates are verified.
