import { reduce } from './iterator/reduce';

export const go = (...args) => {
  return reduce((initValue, func) => (initValue = func(initValue)), args);
};
