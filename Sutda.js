const SutdaCard = require("./SutdaCard");

/* 
<족보>
38광땡
13광땡, 18광땡 << 74 암행어사로 족치기
장땡
멍텅구리사(재경기)
9땡,8땡,7땡,6땡,5땡,4땡,3땡,2땡,1땡 <<< 73 땡잡이로 족치기 (땡없으면 0끗)
49파토(재경기)
알리(12)
독사(14)
구삥(19)
장삥(1.10)
장사(10.4)
세륙(46)
갑오(아홉끗)
어덟끗
일곱끗
여섯끗
다섯끗
네끗
세끗
두끗
한끗
망통(0끗)
*/

class Sutda {
    static getCardJokbo(cardset) {
        const monthsum = cardset[0]["month"] + cardset[1]["month"];

        // 광땡
        if (cardset[0]["isMoon"] == true && cardset[1]["isMoon"] == true) {
            if (monthsum == 11) {
                // 38 광땡
            } else if (monthsum == 4 || monthsum == 9) {
                // 13광땡 / 18광땡
            }
        }

        // 74 암행어사
        if (monthsum == 11) {
        }

        // 멍텅구리사
        if (monthsum == 13) {
        }

        // 땡
        if (cardset[0]["month"] == cardset[1]["month"]) {
        }
    }
}
