const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "!";

bot.on("ready", () => {
  console.log("estoy listo!");
bot.user.setActivity("The SIMPS Server", {
    type:"WATCHING",
    url: "https://www.twitch.tv/maiatler"})
  .catch(console.error);
  });

bot.on("guildMemberAdd", guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'UNKNOWN');
  guildMember.roles.add(welcomeRole);
  const attachment = new Attachment("https://media.discordapp.net/attachments/716403231705792594/738532236290293810/giphy_3.gif")
  guildMember.guild.channels.cache.get("738529769477505106").send(`Bienvenidx <@${guildMember.user.id}> esto esto es CLASE CON LOS PANAS, necesitamos comprobar tu identidad así que #por-favor-identificate en ese canal, yo soy solo un bot entonces espera a que uno de los moderadores te identifiquen.`)
});

bot.on("message", message => {
  let args = message.content.substring(PREFIX.length).split(" ");
  switch (args[0]) {
    //clear
    case "clear":
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply("lo siento mucho, los administradores no me permiten ejecutar este comando por ti.");
      }
      if (!args[1])
        return message.reply(
          "por favor especifica la cantidad de mensajes que deseas borrar..."
        );
      message.channel.bulkDelete(args[1]);
      break;
      
    //fin clear 
      
    case "among":
      message.channel.send("Server para el Among Us: https://discord.gg/cZdYnbU")
      break;
         
    case "updateamong":
      message.channel.send("https://thetecnosanty.com/among-us-para-pc-ultima-version/")
      break;      
 }

  if(message.content === ("un bot po")){
   if(message.author.bot) return;
   message.channel.send("si")
   message.channel.send("un bot po")
}
  
  if(message.content === ("-t")){
   if(message.author.bot) return;
   message.channel.send("T E M A Z O")
}

  if(message.content.startsWith ("epico")){
   if(message.author.bot) return;
   message.channel.send("si")
}

});
bot.login(process.env.BOT_TOKEN);
