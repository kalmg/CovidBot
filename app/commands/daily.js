const prepareAnswer = require('../utils/prepareAnswer');

function daily(body, bot, chatId, n = 5) {
  const data = prepareAnswer.prepareDailyStatsAnswer(body, n);
  return bot.sendMessage(chatId, data, {
    parse_mode: 'HTML',
  });
}

module.exports = {
  daily,
};
