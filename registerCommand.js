const { REST, Routes, SlashCommandBuilder } = require("discord.js");

const commands = [
    new SlashCommandBuilder().setName("시작"),
    new SlashCommandBuilder().setName("참가"),
    new SlashCommandBuilder().setName("정보"),
    //다이 : 지금까지 투자한 돈(맨 처음 놓은 돈 포함)을 포기하고 그판의 게임에서 빠진다.
    //콜 : 앞사람(죽은 사람은 제외)이 베팅한 만큼의 돈을 건다. 따라가겠다는 의미.
    //하프 : 깔린 돈의 50%를 베팅한다. 이하의 베팅은 콜로 취급되지 않는다.
    //쿼터 : 깔린 금액의 25%를 베팅한다.
    //따당 : 앞사람이 건 금액의 2배를 베팅한다.
    new SlashCommandBuilder().setName("콜"),
    new SlashCommandBuilder().setName("다이"),
    new SlashCommandBuilder().setName("하프"),
    new SlashCommandBuilder().setName("쿼터"),
    new SlashCommandBuilder().setName("따당"),
];

const rest = new REST({ version: "10" }).setToken(TOKEN);

try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
} catch (error) {
    console.error(error);
}
