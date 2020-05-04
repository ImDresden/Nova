 if (command === "help" || command === "commands") {
    message.channel.startTyping();

    const embed = new Discord.RichEmbed()

      .setTitle("Bot Info")
      .setDescription(
        "**Use ``n!`` [command name] to display any of these commands**"
      )
      .setColor(color)
      .addField(
        "Bot",
        "``about``, ``commands``, ``invite``, ``uptime``, ``ping``, ``vote``"
      )
      .addField(
        "Utility",
        "``userinfo``, ``guildinfo``, ``guildroles``, ``guildemojis``, ``avatar``, ``gifavatar``, ``membercount``, ``myanimelist``, ``shorten``, ``hexcolor``, ``instagram``, ``mcserver``, ``hastebin``, ``qrcode``, ``calculator``, ``discrim``, ``weather``"
      )
      .addField(
        "Fun",
        "``say``, ``esay``, ``8ball``, ``rps``, ``asciify``, ``coinflip``, ``achievement``, ``reddit``, ``minesweeper``"
      )
      .addField(
        "Moderation",
        "``kick``, ``ban``, ``clear``, ``createrole``, ``nickname``"
      )
      .addField(
        "Music",
        "``play``, ``skip``, ``stop``, ``volume``, ``nowplaying``, ``queue``, ``pause``, ``resume``, ``lyrics``"
      )
      .addField(
        "Social & Economy",
        "``backgroundset``, ``colorset``, ``backgroundpreview``, ``profile``, ``rep``, ``balance``, ``work``, ``crime``, ``rob``, ``daily``, ``pay``, ``shop``, ``buy``"
      );

    message.channel.send(embed);

    setTimeout(function() {
      message.channel.stopTyping();
    }, 1000);
  }
