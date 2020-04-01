const Discord = require('discord.js');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./bot.js', {
    totalShards: '3',
    token: "Njk0NjAxODk4NjA2NDYxMDI5.XoOA_g.S7D02FIgmwbh_QMhOtOHa8S-pLs"// Tokeninizi Buraya Girin..
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID shard started.`)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);