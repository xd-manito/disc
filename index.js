const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "u!";

bot.on("ready", () => {
  console.log("estoy listo!");
bot.user.setActivity("The SIMPS Server", {
    type:"WATCHING",
    url: "https://www.twitch.tv/maiatler"})
  .catch(console.error);
  });

});
bot.login(process.env.BOT_TOKEN);
