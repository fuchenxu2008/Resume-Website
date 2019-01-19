module.exports = {
  apps : [{
    name: 'SteveCV',
    script: 'yarn serve',
    instances: 1,
    autorestart: true,
    max_memory_restart: '1G',
  }],
};
