const pool = require('../../../db'); // psql db
const log = require('../../../logger');
const rsql = require('../../../sql/restaurant');

module.exports = (req, res) => {
    log.info('Querying get completed rOrders.');
    const rid = req.params.rid;

    pool.query(rsql.get.allCompletedOrders, [rid],
        (qerr, qres) => {
            if (qerr) {
                throw qerr;
            }
            res.json(qres.rows)
        })
};
