/* eslint-disable @typescript-eslint/no-var-requires */
const moment = require('moment');

const defaultLease = () => {
  return {
    rent_amount: 6111,
    security_deposit_amount: 2682,
    start_date: moment(new Date()).format('YYYY-MM-DD'),
    end_date: moment(new Date(Date.now() + 30 * 24 * 360000)).format(
      'YYYY-MM-DD',
    ),
  };
};

module.exports = {
  defaultLease,
};
