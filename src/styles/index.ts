export { mediaQueries } from './mediaQueries';

export { colors } from './colors';

export type TransientStyled<Type> = {
  [Property in keyof Type as `$${string & Property}`]: Type[Property];
};
