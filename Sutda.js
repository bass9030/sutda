const SutdaCard = require("./SutdaCard");

class Sutda {
    static getCardJokbo(cardset) {
        // 광땡
        if (cardset[0]["isMoon"] == true && cardset[1]["isMoon"] == true) {
            let monthsum = cardset[0]["month"] + cardset[1]["month"];

            return 4000;
        }
    }
}
