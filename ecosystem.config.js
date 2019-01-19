module.exports = {
  apps : [{
    name: 'KyrieCV',
    script: 'yarn serve',
    instances: 1,
    autorestart: true,
    max_memory_restart: '1G',
  }],
};
