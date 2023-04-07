import * as parsers from 'actions-parsers';

export const config = {
  token: parsers.getInput('token', { required: true }),
};
