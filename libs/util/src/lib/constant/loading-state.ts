export const LOADING_STATES = {
  Idle: 'Idle',
  Loading: 'Loading',
} as const;

export type LoadingStates = keyof typeof LOADING_STATES;
