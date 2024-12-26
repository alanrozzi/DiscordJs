const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gonza')
		.setDescription('Le dice a gonza que no sea cagon!'),
	async execute(interaction) {
                                    //id gonza
        if (interaction.user.id == "754442626953904167") {
            await interaction.reply(`💩 **${interaction.user}** dice: No te lo podes decir a vos mismo Gonza, petón! 💩`);
        } else {
            await interaction.reply(`💩 **${interaction.user}** dice: Gonza dejá de ser cagonza! 💩`);
        }
        //console.log(interaction);
	},
};