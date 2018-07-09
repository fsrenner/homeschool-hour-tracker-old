const pool = require('./db');
const queries = require('./queries');
const config = require('./config.js');

let getChildHours = (req, res) => {
    const specifics = ['Katie', 'Liam'];
    pool.getConnection((err, connection) => {
       if (err) {
           console.error('Error connecting: ' + err);
           return;
       }
       console.log('About to execute query: ' + queries.getHours + ',' +
           ' with parameters: ' + specifics.toString());
       connection.query(queries.getHours, specifics, (err, results) => {
          console.log('The query results are: ' + JSON.stringify(results));
          if (err || results.length === 0) {
              console.error('There was a problem querying the database');
          } else {
              const hours = results[0];
              res.render('child-details', {
                  user: specifics[0],
                  name: specifics[1],
                  math: hours.math,
                  history: hours.history,
                  science: hours.science,
                  language: hours.language,
                  reading: hours.reading,
                  pe: hours.pe,
                  music: hours.music,
                  art: hours.art,
                  life: hours.life,
                  bible: hours.bible,
                  core: hours.core,
                  noncore: hours.non_core,
                  grandTotal: hours.total
              });
          }
       });
    });
};

let updateChildHours = (req, res, hours, name) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting: ' + err);
            return;
        }
        connection.query(queries.updateHours, hours, (err, results) => {
            if (err) {
                throw err;
                console.error('Error updating ' + name);
            } else {
                console.log('Updated ' + name + '\'s hours. '
                            + results.affectedRows + ' row(s) updated.');
                res.redirect('/user/' + config.systemUser);
            }
        });
    });
};

module.exports = {
    getChildHours: getChildHours,
    updateChildHours: updateChildHours
};