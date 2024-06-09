const unleash = require('unleash-server');

unleash
  .start({
    db: {
      database: 'unleash',
      host: 'localhost',
      password: 'password',
      port: 5432,
      ssl: false,
      user: 'unleash_user',
    },
    server: {
      port: 4242,
    },
  })
  .then((unleash) => {
    console.log(
      `Unleash started on http://localhost:${unleash.app.get('port')}`,
    );
  });
