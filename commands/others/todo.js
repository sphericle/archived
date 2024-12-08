const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	enabled: true,
	data: new SlashCommandBuilder()
		.setName('todo')
		.setDescription('Todo list for the bot')
		.setDefaultMemberPermissions(0),
	async execute(interaction) {
		await interaction.reply({content: 'Todo: \n- Add command to copy a record to a different level'});
	},
};
