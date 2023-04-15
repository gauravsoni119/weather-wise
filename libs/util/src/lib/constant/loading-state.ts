export const LOADING_STATES = {
  idle: 'idle',
  loading: 'loading',
} as const;

export type LoadingStates = keyof typeof LOADING_STATES;
