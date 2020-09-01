/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    controller.hears(["Hello", "Hi"], ["direct_message", "direct_mention", "mention", "ambient"], function (bot, message) {

        bot.reply(message, 'Hello, how are you today?');

    });
};
