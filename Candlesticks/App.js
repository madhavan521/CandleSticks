import './App.css';
import Candle from './Component/Candle';
import Home from './Component/Home';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Individual from './Component/Individual';
import About from './Component/About';
import Aboutus from './Component/Aboutus';
import Bullcandle from './Component/Bullcandle';
import Login from './Component/Login';
import { useState } from 'react';
import Bear from './Component/Bear';
import Explore from './Component/Explore';
import Topindividual from './Component/Topindividual';
import Privacy from './Component/Privacy';
function App() {
const candles= [
        {
          id: 1,
          special: "bull",
          title: "Hammer",
          tag: "Bullish reversal pattern",
          image: "https://images.contentstack.io/v3/assets/blt38dd155f8beb7337/blt3e691239781669f1/6225effd7839ce3bc041cc24/Hammer-Candlestick-in-4H-pattern.jpeg",
          explanation: "A Hammer is a price pattern in candlestick charting that occurs when a security trades significantly lower than its opening, but rallies within the period to close near the opening price. This pattern forms a hammer-shaped candlestick, in which the lower shadow is at least twice the size of the real body",
          example: "https://www.investopedia.com/thmb/QiM6aH1cFCwiaiCExEomkk5lCUo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hammercandlestick-5c620b2ac9e77c0001566ce8.jpg",
          content:"content",
          description: "The chart shows a price decline followed by a hammer pattern. This pattern had a long lower shadow, several times longer than the real body. The hammer signaled a possible price reversal to the upside. Confirmation came on the next candle, which gapped higher and then saw the price get bid up to a close well above the closing price of the hammer."
        },
        {
          id: 2,
          special: "bull",
          title: "Inverted Hammer",
          tag: "Bullish reversal pattern",
          image: "https://www.learnstockmarket.in/wp-content/uploads/2020/10/Inverted-Hammer-Candlestick-Pattern-Bullish-Reversal.png",
          explanation: "The Inverted Hammer is a single candle which appears when a stock is in a downtrend. It’s an important candle because it can potentially reverse the entire trend – from downtrend to uptrend",
          example: "https://www.learnstockmarket.in/wp-content/uploads/2020/10/Inverted-Hammer-Trading-Strategy-768x460.png",
          content:"content",
          description: "This confirms that the buyers are in control and the price could go higher. The stock is bought. A strict stop loss is set at the bottom price of the ‘inverted hammer’ – as clearly illustrated in the above image."
        },
        {
          id: 3,
          special: "bull",
          title: "Bullish Spinning Top",
          tag: "Indecision pattern",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZQHPdU5o_XBNTEVut10NKrWbrnWZ5jz8xA&usqp=CAU",
          explanation: "A spinning top is a candlestick pattern with a short real body that’s vertically centered between long upper and lower shadows. The candlestick pattern represents indecision about the future direction of the asset",
          example: "https://www.investopedia.com/thmb/v5ySQsZS4JMIfoZBVe9PZgPVLfU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_Spinning_Top_Candlestick_Definition_and_Example_Nov_2020-01-9ebe4d0e8ccb482c92214128a29874de.jpg",
          content:"content",
          description: "The chart example shows several spinning tops. The first one, on the left, occurs after a small price decline. It is followed by a down candle, indicating a further price slide. The price does head a bit lower but then reverses to the upside. If taking trades based on candlesticks, this highlights the importance of having a plan and managing risk after the candlestick."
        },
        {
          id: 4,
          special: "bull",
          title: "Dragonfly Doji",
          tag: "Potential reversal pattern",
          image: "https://www.cashoverflow.in/wp-content/uploads/2020/09/Dragonfly-Doji.jpg",
          explanation: "A Dragonfly Doji is a type of candlestick pattern that can signal a potential reversal in price to the downside or upside, depending on past price action. It’s formed when the asset’s high, open, and close prices are the same.",
          example: "https://www.tradingwithrayner.com/wp-content/uploads/2018/10/5.-Dragonfly-Doji-at-MA-2014-06-23.png",
          description: "Following the dragonfly, the price proceeds higher on the following candle, confirming the price is moving back to the upside. Traders would buy during or shortly after the confirmation candle. A stop-loss can be placed below the low of the dragonfly."
        },

        {
          id: 5,
          bears: "bull",
          title: "Bullish Kicker",
          tag: "Bullish reversal pattern",
          image: "https://therobusttrader.com/wp-content/uploads/Bullish-Kicker.png",
          explanation: "A bullish kicker is a two-bar candlestick pattern that predicts a change in the direction of an asset’s price trend. This pattern is characterized by a sharp reversal in price over the span of two candlesticks.",
          example: "https://static.vecteezy.com/system/resources/previews/008/194/681/original/bullish-kicker-candlestick-chart-pattern-candlestick-chart-pattern-for-traders-powerful-counterattack-bullish-candlestick-chart-for-forex-stock-cryptocurrency-vector.jpg",
          description: "The Bearish Kicker Candlestick Chart pattern's reliability is high when it is formed at the uptrend or formed in an overbought area."
        },
        {
            id: 6,
            special: "bull",
            title: "Bullish Engulfing",
            tag: "Bullish reversal pattern",
            image: "https://th.bing.com/th/id/OIP.ebkYYhjMB3YQx9VQjhDqVAAAAA?rs=1&pid=ImgDetMain",
            explanation: "A bullish engulfing pattern is a candlestick pattern that forms when a small black candlestick is followed the next day by a large white candlestick, the body of which completely overlaps or engulfs the body of the previous day’s candlestick.",
            example: "https://cdn.howtotradeblog.com/wp-content/uploads/2020/05/12212216/characteristics-of-a-bullish-engulfing-candle-1536x805.jpg",
            description: "This candlestick shows the strength and overwhelming of the bulls (buyers). It clearly provides a reversal signal at the end of a downtrend. The last green candle covers and overwhelms all previous red candles. Bullish Engulfing is better than Bullish Pin Bar. Combining two candles to form a BuE pattern (A) => The price decisively reverses from bearish to bullish (B) => Hammer candlestick (C). Although the direction of the price is similar to the Hammer (Bullish Pin Bar) candlestick, BuE is a combination of two candlesticks (which takes a longer time). This is why this candlestick pattern is more reliable than the Bullish Pin Bar."
          },
          {
            id: 7,
            special: "bull",
            title: "Bullish Harami",
            tag: "Bullish reversal pattern",
            image: "https://therobusttrader.com/wp-content/uploads/Bullish-Harami.png",
            explanation: "A bullish harami is a candlestick chart indicator used for spotting reversals in a bear trend. It is generally indicated by a small increase in price (signified by a white candle) that can be contained within the given equity’s downward price movement (signified by black candles) from the past couple of days.",
            example: "https://cdn.howtotradeblog.com/wp-content/uploads/2020/05/15234037/bullish-harami-on-the-japanese-price-chart.jpg",
            description: "Price Action traders consider the pattern as a reliable confirmation point for upward price trends. Therefore, using this candlestick pattern combined with price trend indicators will give the most effective entry points. Notes: This is a bullish reversal signal of price. So, when using Bullish Harami, you can only open “UP” orders. Combine with RSI indicator RSI is a reliable price trend indicator. However, this indicator alone does not give exact reversal confirmation points. When combined with the pattern, the entry points are clearer. It will be safer to open an order."
          },
          {
            id: 8,
            special: "bull",
            title: "Piercing Line",
            tag: "Bullish reversal pattern",
            image: "https://a.c-dn.net/b/0P09PQ/piercing-pattern-candlestick_body_mainimage.png.full.png",
            explanation: "A piercing pattern is a two-day, candlestick price pattern that marks a potential short-term reversal from a downward trend to an upward trend. The pattern includes the first day opening near the high and closing near the low with an average or larger-sized trading range.",
            example: "https://images.surferseo.art/a6dfb899-073a-4c3d-924c-f5d2f9784ffc.webp",
            description: "A piercing pattern is a two-day, candlestick price pattern that marks a potential short-term reversal from a downward trend to an upward trend. It includes a gap down after the first day and a second day of strong buying."
          },
          {
            id: 9,
            special: "bull",
            title: "Tweezer Bottom",
            tag: "Bullish reversal pattern",
            image: "https://cdn-amiji.nitrocdn.com/IEZIUgrNRbYQggDlmHBLkLYuABZyJyOL/assets/images/optimized/rev-02bfbe1/commodity.com/wp-content/uploads/technical-analysis/TweezersPic.gif",
            explanation: "A tweezer bottom is a candlestick pattern that forms as a bearish trend is turning bullish. In short, the pattern consists of a low point which is tested one to several times, which makes clear that bulls won’t let prices go lower.",
            example: "https:https://cdn-amiji.nitrocdn.com/IEZIUgrNRbYQggDlmHBLkLYuABZyJyOL/assets/images/optimized/rev-02bfbe1/commodity.com/wp-content/uploads/technical-analysis/TweezerBottomXOM.gif",
            description: "Notice how Exxon-Mobil (XOM) stock went downwards the whole day on Day 1. Then on Day 2, the bearish sentiment of Day 1 was completely reversed and XOM stock went up the whole day. This sudden and drastic change of opinion between Day 1 and Day 2 could be viewed as an overnight transfer of power from bears to bulls."
          },
          {
            id: 10,
            special: "bull",
            title: "Morning Star",
            tag: "Bullish reversal pattern",
            image: "https://blog.elearnmarkets.com/wp-content/uploads/2020/08/morning-star-candlestick-pattern.png",
            explanation: "A morning star is a visual pattern consisting of three candlesticks that are interpreted as bullish signs by technical analysts. A morning star forms following a downward trend and it indicates the start of an upward climb. It is a sign of a reversal in the previous price trend.",
            example: "https://blog.elearnmarkets.com/wp-content/uploads/2023/08/bollinger-band-chart.jpeg",
            description: "From the daily chart of Nifty 50, we can see that after a downtrend, the morning star is formed, with the middle candle below the lower Bollinger Band. One can enter the trade after the complete formation of the morning star. Relative Strength Index: For this strategy, we will be using 5 periods RSI. We will enter into the buy position when the RSI moves above 30, from below with the formation of morning star on the chart. From the daily chart of Nifty 50 above, we can how the RSI crosses 30 when the morning star is formed."
          },
          {
            id: 11,
            special: "bull",
            title: "Bullish Abandoned Baby",
            tag: "Bullish reversal pattern",
            image: "https://forexbee.co/wp-content/uploads/2021/12/bullish-abandoned-baby-1.png",
            explanation: "The bullish abandoned baby is a type of candlestick pattern that is used by traders to signal a reversal of a downtrend. It forms in a downtrend and is composed of three price bars. The first is a large down candle, followed by a doji candle that gaps below the first candle. The next candle opens higher than the doji and moves aggressively to the upside.",
            example: "https://www.investopedia.com/thmb/kP-HbDumGASRJd1MJ_km-WL8NC8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_INV_final_Bullish_Abandoned_Baby_Jan_2021-01-c4ebdaafcc304337af922886d0416b66.jpg",
            content:"content", 
            description: "Pattern one is a slight variation of the traditional pattern, as the doji doesn't gap below the prior close, and there are two dojis. Yet the sentiment of the pattern still shows a bullish shift. The pattern has a strong drop, indecision and leveling off, and then a strong surge higher after the dojis. Pattern two is more traditional, except there are once again two dojis. This is acceptable, and the price shot higher following the pattern. Pattern three is also a slight variation, as the doji didn't gap below the prior candle's close. The price moved higher following the doji, though, and an uptrend commenced."
          },
          {
            id: 12,
            special: "bull",
            title: "Three White Soldiers",
            tag: "Bullish reversal pattern",
            image: "https://i.ytimg.com/vi/rpgaQPBRGVY/maxresdefault.jpg",
            explanation: "Three white soldiers is a bullish candlestick pattern that is used to predict the reversal of the current downtrend in a pricing chart. The pattern consists of three consecutive long-bodied candlesticks that open within the previous candle’s real body and a close that exceeds the previous candle’s high.",
            example: "https://www.investopedia.com/thmb/SBEsnhdoQ_OnOxEj8LC0K-_AaxU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_ThreeWhite_Soldiers_Definition_2020-01-cedf748e8c644b90b96e588aa4364291.jpg",
            description: "The ETF had been in a strong bearish downtrend over the course of several weeks before the three white soldiers pattern marked a sharp bullish reversal. The pattern may suggest that the rally will continue, but traders should also look at other relevant factors before making a decision. For example, the stock may have reached an area of resistance at the conclusion of the formation of the pattern or the rise might have been on low volume which is not an indication of strength."
          },
          {
            id: 13,
            special: "bull",
            title: "Three White Sticks",
            tag: "Bullish reversal pattern",
            image: "https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/three-white-soldiers.png/jcr:content/renditions/original-size.webp",
            explanation: "The term “Three White Sticks” is often used interchangeably with “Three White Soldiers”. It is a bullish candlestick pattern used to predict the reversal of the current downtrend. The pattern consists of three consecutive long-bodied candlesticks that open within the previous candle’s real body and a close that exceeds the previous candle’s high.",
            example: "https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/three-white-soldiers-chart.png/jcr:content/renditions/original-size.webp",
            description: "There are a number of ways to trade when you see the three white soldiers pattern. First, confirm the signal using appropriate technical indicators such as the stochastic oscillator or the relative strength index (RSI). This can help to validate what the candlesticks are signalling, because indicators can provide more insight into price trends. For example, if you see three white soldiers at the bottom of a downtrend and you think a reversal is coming, you can test the signal using the RSI. This indicator can help you to predict price trends because it tracks the speed and momentum of the market. If the reversal is confirmed, you may want to open a long position (buy)."
          },
          {
            id: 14,
            special: "bull",
            title: "Morning Doji Star",
            tag: "Bullish reversal pattern",
            image: "https://libertex.com/sites/default/files/inline-images/doji-pattern-7.jpg",
            explanation: "A Morning Doji Star is a bullish reversal pattern, being very similar to the Morning Star. The only difference is that the Morning Doji Star needs to have a doji candle (except the Four-Price Doji) on the second line.",
            example: "https://i.imgur.com/PzgEky7.png",
            description: "The Morning Doji Star pattern is easy to identify on a price chart. Traders should look for the following characteristics: A Downtrend: The pattern should occur after a prolonged downtrend. This can be identified by the chart’s lower lows and lower highs. First Candle: The first candle should be a long bearish candle with a large real body. This indicates that selling pressure is dominating the market. Second Candle: The second candle should be a Doji, which represents indecision in the market. The Doji’s open and close prices should be within the range of the first candle. Third Candle: The third candle should be a long bullish candle with a large real body. This means that buying pressure has emerged and is likely to continue."
          },{
            id: 15,
            special: "bull",
            title: "Three Outside Up",
            tag: "Bullish reversal pattern",
            image: "https://static.vecteezy.com/system/resources/previews/008/191/608/original/three-outside-up-and-down-candlestick-pattern-candlestick-chart-pattern-for-traders-powerful-bullish-and-bearish-candlestick-chart-for-forex-stock-cryptocurrency-vector.jpg",
            explanation: "The three outside up is a bullish candlestick pattern with the following characteristics: The market is in a downtrend. The first candle is bearish. The second candle is bullish with a long real body and fully contains the first candle. The third candle is bullish with a higher close than the second candle",
            example: "https://lh4.googleusercontent.com/jxO9hCs-6lu_kSnYS9BA_zsvEPvBPAz0jMfcEIYJzo10TEE2OFAF8HWPXjoO8j3eXxhbZwmmoy5T4G5HGO5sUHpZNoANp93qXZSawTYkmBn0SrX3XFH7AoYIOX-xhKmUCxMbh8sbQ7MJ2r7kcQ",
            description: "The smaller the negative downtrend becomes, the weaker its indication becomes. As the price movement increases with the second candle, bullish sentiments appear to be outnumbering bearish sentiments. What is Three Outside Down Candlestick Pattern Three successive candlesticks form the three outside down pattern, which usually appears during a bullish trend. The movement of these candles always indicates whether or not a trend reversal is imminent. A single bullish candle is followed by two bearish candles to form the pattern. For counter-trend trading tactics to work, accurate detection of this pattern is critical"
          },
          {
            id: 16,
            special: "bull",
            title: "Three Inside Up",
            tag: "Bullish reversal pattern",
            image: "https://therobusttrader.com/wp-content/uploads/Three-inside-up.png",
            explanation: "The three inside up pattern is a bullish reversal pattern composed of a large down candle, a smaller up candle contained within the prior candle, and then another up candle that closes above the close of the second candle.",
            example: "https://cdn.howtotradeblog.com/wp-content/uploads/2020/05/21190122/how-to-trade-3-inside-up-candlestick-pattern-with-sma30.jpg",
            description: "The price is in an uptrend as it’s above the fifty-day moving average. The first candle is large and bullish. The second has a small real body and is engulfed by the previous, and the last candle closes lower than the first candle’s opening price, fulfilling the three inside up pattern requirements. Now that we’ve got pattern identification down, let’s learn how to trade this three-bar pattern optimally."
          },
        
          {
            id: 17,
            title: "Hanging man",
            tag: "Bearish single pattern",
            image: "https://static.vecteezy.com/system/resources/previews/008/191/571/large_2x/hanging-man-candlestick-chart-pattern-trading-signal-japanese-candlesticks-pattern-powerful-bearish-candlestick-chart-for-forex-stock-cryptocurrency-vector.jpg",
            explanation: "The Hanging Man is a single candlestick pattern that typically appears at the peak of an uptrend. It signals a potential bearish reversal.",
            example: "https://theforexscalpers.com/wp-content/uploads/2019/03/trading-the-hanging-man-candlestick_body_Hangingmancandlestickformation.png.full_.png",
            description: "The Hanging Man suggests that buyers, who initially pushed prices higher, are now losing control. The long lower shadow indicates that sellers stepped in aggressively during the formation of the candle, causing the price to retreat from its highs.",
            bear: "bear"
        },
        {
            id:18,
            title: "Shooting star",
            tag: "Bearish single pattern",
            image: "https://fxpipsgainer.com/wp-content/uploads/2020/12/Shooting-Star.png",
            explanation: "The Shooting Star is a single candlestick pattern that typically appears at the peak of an uptrend. It signals a potential bearish reversal.",
            example: "https://procapitalacademy.com/blog/wp-content/uploads/2022/07/SHOOTING-STAR-Candlestick-pattern-explained-6.jpg",
            description: "The Shooting Star suggests that buyers, who initially pushed prices higher, are now losing control. The long upper shadow represents buyers who bought during the day but are now in a losing position because the price dropped back to the open. As the day progresses, sellers step in and push the price back down to near the open, erasing the gains for the day.",
            bear: "bear"
        },
        {
            id: 19,
            title: "Bearish Spinning Top",
            tag: "Bearish single pattern",
            image: "https://cdn.corporatefinanceinstitute.com/assets/spinning-top-candlestick-patterns.png",
            explanation: "The Bearish Spinning Top is a single candlestick pattern that typically appears in a bearish market. It signals a potential reversal to the downside.",
            "Shape and Appearance": "The Bearish Spinning Top has a small red or black real body (the difference between open and close prices) that’s vertically centered between long upper and lower shadows. The opening and closing prices are relatively close together, indicating indecision among traders.",
            example: "https://a.c-dn.net/b/1srvXa/spinning-top-candlestick_body_2019_05_20_15_39_05_IG_Trading_Platform_Spread_Betting.png.full.png",
            description: "The Bearish Spinning Top embodies uncertainty, reflecting a tug-of-war between buyers and sellers. The long shadows signify that while buyers initially pushed prices higher and sellers pushed them lower, neither side could maintain control. This pattern suggests more sideways movement could follow.",
            bear: "bear"
        },
        {
            id: 20,
            title: "GraveStone doji",
            tag: "Bearish single pattern",
            image: "https://th.bing.com/th/id/OIP.vsUVIBj3xgQx0Xv4uz0qEwHaFl?rs=1&pid=ImgDetMain",
            explanation: "The gravestone doji, also known as the tombstone doji, is a one-bar Japanese candlestick pattern.",
            "Pattern Description": "The gravestone doji has the following features: Long Upper Shadow: The candlestick has a long upper shadow. Minimal or No Lower Shadow: There is little to no lower shadow. Open and Close Prices Near Equal: The open and close prices are almost identical. Visually, it resembles a tombstone, which contributes to its name.",
            example: "https://procapitalacademy.com/blog/wp-content/uploads/2022/09/GRAVESTONE-DOJI-Candlestick-pattern-explained.jpg",
            description: "Bearish Reversal Signal: The gravestone doji implies a potential reversal in the price action. End of Uptrend: While it can appear at the end of a downtrend, it is more common at the end of an uptrend. Confirmation Needed: Traders typically wait for the next candle to confirm the reversal before acting on the gravestone doji.",
            bear: "bear"
        },
        {
            id: 21,
            title: "Bearish Kicker",
            bear: "bear",
            tag: "Bearish Double Pattern",
            image: "https://th.bing.com/th/id/OIP.uC_v0ON6dBWPeVUZS_AfkQHaGC?rs=1&pid=ImgDetMain",
            explanation: "The Bearish Kicker is a two-candlestick pattern that predicts a sharp change in the direction of an asset’s price trend. It starts with a bullish (white or green) candlestick, followed by a large bearish candlestick that gaps lower in price and continues downward.",
            example: "https://www.tradingsim.com/hs-fs/hubfs/Imported_Blog_Media/bearish-kicker-trade-example-1024x615-4.png?width=587&name=bearish-kicker-trade-example-1024x615-4.png",
            description: "First Candle: Bullish (upward move). Second Candle: Bearish (downward move) with a gap down. The bearish candle should have a flat bottom or tiny wick, indicating minimal movement back into the price gap. Interpretation: The bearish kicker suggests a potential reversal from an uptrend to a downtrend. It often occurs after the release of significant information about a company, industry, or economy.",
        },
        {
            id: 22,
            title: "Bearish Engulfing",
            bear: "bear",
            tag: "Bearish Double Pattern",
            image: "https://a.c-dn.net/b/0MqC8X/trading-the-bearish-engulfing-candle_body_Bearishengulfingpatternexplained.png.full.png",
            explanation: "The Bearish Engulfing is a two-candlestick pattern that often signals a reversal in an upward price trend.",
            "Key Characteristics": "First Candle: A small bullish candlestick (with small wicks). Second Candle: A larger bearish candlestick that engulfs the first. The bearish candle’s body must fully engulf the body of the preceding bullish candle.",
            example: "https://www.learnstockmarket.in/wp-content/uploads/2020/10/Bearish-Engulfing-Example.png",
            description: "The bearish engulfing pattern suggests a sudden shift in market sentiment where sellers have overtaken buyers. After an uptrend, the appearance of a bearish engulfing pattern indicates that the bullish momentum is weakening. Implications: Early Indicator: It often signals that a downtrend may be imminent. Investors: For those holding long positions, it’s a signal to consider exiting or tightening stop-loss levels. Traders Shorting: It can serve as a good entry point for short positions, but additional confirmation is usually needed.",
        },
        {
            id:23,
            title: "Bearish Harami",
            tag: "Bearish Double Pattern",
            image: "https://traderrr.com/wp-content/uploads/2020/10/what-is-bearish-harami-how-to-define-it.jpg",
            explanation: "The Bearish Harami is a two-candlestick pattern that signals a potential trend reversal from an uptrend to a downtrend.",
            example: "https://images.contentstack.io/v3/assets/blt38dd155f8beb7337/blt1615465619787629/622a097ebca57e4aae9579ed/Bearish_Harami_formation.png",
            description: "It consists of the following components: First Candle: A sizeable bullish candlestick representing the prevailing uptrend. Second Candle: A small bearish candlestick that follows the first. Its opening and closing prices are contained within the body of the prior candle. The pattern suggests a lack of buying pressure and a potential shift in the trend.",
           
        },
        {
            id: 24,
            title: "Dark Cloud Cover",
            bear: "bear",
            tag: "Bearish Double Pattern",
            image: "https://a.c-dn.net/b/1modWM/dark-cloud-cover_body_zoomedindarkcloudcoverGBPUSD.png.full.png",
            explanation: "The Dark Cloud Cover is a two-candlestick pattern that signals a potential bearish reversal.",
            example: "https://cdn.howtotradeblog.com/wp-content/uploads/2020/05/22181151/what-is-dark-cloud-cover-candlestick-pattern.jpg",
            description: "In simpler terms: The first candle represents an upward move. The second candle opens higher but closes below the midpoint of the first candle. This suggests a potential switch to the downside after a price rise."
        },
        {
            id:25,
            title: "Tweezer Top",
            bear: "bear",
            tag: "Bearish Double Pattern",
            image: "https://navi.com/blog/wp-content/uploads/2022/12/Tweezer-Top.jpg",
            explanation: "The Tweezer Top is a two-candlestick pattern that signals a potential bearish reversal.",
            example: "https://margex.com/blog/content/images/2022/12/Screen-Shot-2022-08-19-at-4.25.56-PM--1-.png",
            description: "In simpler terms: The first candle represents an upward move. The second candle opens higher but closes below the midpoint of the first candle. This suggests a potential switch to the downside after a price rise."
        },
        {
            id: 26,
            title: "Bearish Abandoned Baby",
            bear: "bear",
            tag: "Bearish Triple Pattern",
            image: "https://forexbee.co/wp-content/uploads/2021/12/bearish-abandoned-baby-1.png",
            explanation: "The Bearish Abandoned Baby is a specialized candlestick pattern consisting of three candles: Bullish Candle: The first candle has rising prices. Doji Candle: The second candle is a doji (similar to a cross) and gaps to the upside. Bearish Candle: The third candle appears after a negative price gap.",
            example: "https://www.universoforex.it/foto/abandoned-baby-bearish-1.png",
            description: "The key item in this pattern is the middle day (the doji), which should have a gap in front of it and following it. The doji should close the session with price unchanged. This pattern signals at least a short-term reversal in a currently upward-trending price."
        },
        {
            id:27,
            title: "Three Black Crows",
            bear: "bear",
            tag: "Bearish Triple Pattern",
            image: "https://cdn.howtotradeblog.com/wp-content/uploads/2020/06/16212723/what-is-3-black-crows-candlestick-pattern.jpg",
            explanation: "The Three Black Crows pattern occurs after a bullish trend and consists of three consecutive bearish long-bodied candlesticks that trend downward like a staircase. Each of the three candlesticks should be relatively long and open lower than the previous candle’s open.",
            example: "https://img.phemex.com/wp-content/uploads/2021/05/06042623/ezgif.com-gif-maker-2-1024x688.jpg",
            description: "The pattern shows on pricing charts as three bearish candles with short or no shadows or wicks. Traders interpret this sustained downward pressure over three sessions as the start of a bearish downtrend."
        },
        {
            id: 28,
            title: "Evening Star",
            bear: "bear",
            tag: "Bearish Triple Pattern",
            image: "https://cdn.howtotradeblog.com/wp-content/uploads/2020/06/02212629/characteristics-of-the-evening-star-candle-pattern.jpg",
            explanation: "The Evening Star is a stock price chart pattern used by technical analysts to detect trend reversals. It consists of three candles: Large White Candlestick: The first day features a significant rise in prices. Small-Bodied Candle: The second day shows a more modest price increase. Red Candle: The third day opens below the previous day’s close and closes near the middle of the first day.",
            example: "https://cdn.howtotradeblog.com/wp-content/uploads/2020/06/02212510/evening-star-combined-with-resistance.jpg",
            description: "This pattern typically appears at the top of an uptrend, signaling its potential end. The opposite of the Evening Star is the Morning Star pattern, which is considered bullish."
        },  
        {
            id: 29,
            title: "Evening Doji Star",
            bear: "bear",
            tag: "Bearish Triple Pattern",
            image: "https://libertex.com/sites/default/files/inline-images/doji-pattern-8.jpg",
            explanation: "The Evening Doji Star is a three-candle bearish reversal pattern that typically appears at the end of an uptrend.",
            example: "https://i0.wp.com/thesovereigninvestor.net/wp-content/uploads/2023/04/Evening-Doji-Star-Candlestick-Pattern-1.png?w1000&ssl=1",
            description: "Here’s how it forms: Bullish First Candle: The first day features a large white (bullish) candle, signifying continued price rise. Doji Candle: The second day shows a doji (a candle with a small body) that gaps up. Bearish Third Candle: The third day reveals a large red (bearish) candle. It opens below the previous day’s close and then closes near the middle of the first day’s range. Traders interpret the Evening Doji Star as a potential reversal signal, indicating that the existing uptrend may be coming to an end.",
        },
        {
            id: 30,
            title: "Doji",
            tag: "Indecision pattern",
            image: "https://www.investopedia.com/thmb/ILXbWLidgSsMci_6D8fNOPdXw6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Dojidefinition-efc3ba7213db4200a0a69f354369960b.png",
            explanation: "A Doji is a type of candlestick pattern that forms when the market’s open price and close price are almost exactly the same. It signals market neutrality and a potential reversal trend but cannot be used to trade for profits alone without using other market analysis tools",
            "Analysis": "Every candlestick pattern has four sets of data that help to define its shape. Based on this shape, analysts are able to make assumptions about price behavior. Each candlestick is based on an open, high, low, and close. The time period or tick interval used does not matter. The filled or hollow bar created by the candlestick pattern is called the body. The lines that extend out of the body are called shadows. A stock that closes higher than its opening will have a hollow candlestick. If the stock closes lower, the body will have a filled candlestick. One of the most important candlestick formations is called the doji. A doji, referring to both singular and plural forms, is created when the open and close for a stock are virtually the same. Doji tend to look like a cross or plus sign and have small or nonexistent bodies. From an auction theory perspective, doji represent indecision on the side of both buyers and sellers. Everyone is equally matched, so the price goes nowhere; buyers and sellers are in a standoff. Some analysts interpret this as a sign of price reversal. However, it may also be a time when buyers or sellers are gaining momentum for continuing a trend. Doji are commonly seen in periods of consolidation and can help analysts identify potential price breakouts."
        },
        {
            id: 31,
            title: "Spinning Top",
            tag: "Indecision pattern",
            image: "https://cdn.corporatefinanceinstitute.com/assets/spinning-top-candlestick-patterns.png",
            explanation: "A spinning top is a candlestick pattern with a short real body that’s vertically centered between long upper and lower shadows. The candlestick pattern represents indecision about the future direction of the asset",
            "Analysis": "A spinning top occurring at the peak of an uptrend can signify that the bullish is losing track and the trend is about to reverse. However, when a spinning top is at the base of a downtrend, it is a sign that the bearish is losing control, and the bullish may take control. It means that a spinning top may alert about an upcoming crucial change in a trend. However, a confirmation from the next candle is key to determine whether the prices will drop after the uptrend. Active traders should not trade instantly after the formation of a spinning top but rather wait for the confirmation from technical indicators after the formation of the next candle. It will help eliminate uncertainties in the market since the signal trend reversal will have been established. For example, during an uptrend, if a bullish occurs after the spinning top at the bottom, the trader could use it as an entry point. Similarly, in an uptrend, if a bearish form at the top in the spinning top pattern, it can be used as an exit point."
        },
        {
            id: 32,
            title: "Marubozu",
            tag: "Strong bullish or bearish pattern",
            image: "https://www.5paisa.com/finschool/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-14-at-4.30.48-PM.jpeg",
            explanation: "A Marubozu is a type of candlestick charting formation that indicates a security’s price did not trade beyond the range of the opening and closing price. It is a candlestick pattern that lacks a shadow",
            "Analysis": "The Marubozu candlestick pattern is a single-candle formation that represents the market’s resolve to move mostly in one direction without significant resistance from the opposing side, forcing a closing at the session’s high or low. Marubozu comes in two varieties: bullish marubozu and bearish marubozu. Retaining some trading guidelines: Buy power and sell fragility Be tolerant of conventions (verify and quantify) Find the previous trend Only the Marubozu candlestick pattern deviates from Rule 3: Look for Prior Trend."
        },
        {
            id: 33,
            title: "Star",
            tag: "Potential reversal pattern",
            image: "https://patternswizard.com/wp-content/uploads/2020/07/dojistar.png.webp",
            explanation: "A star is a type of candlestick formation that is identified when a small-bodied candle is positioned above the price range of the previous candle as a result of a gap in the underlying asset price",
            "Analysis": "Pattern Overview: A Doji Star is a three-bar pattern signaling a potential trend reversal. It comes in two forms: bullish and bearish, depending on the existing trend. Success Rate: The pattern has a historical success rate of 41.3% for reaching a 2:1 risk/reward target. Confirmation Stats: On average, it confirms within 3.8 candles and invalidates within 4.2 candles. Frequency: Markets print a Doji Star pattern every 146 candles on average. This pattern is considered a versatile and reliable indicator by technical analysts, especially when combined with other analysis tools. Remember, trading involves risks and it’s important to use proper risk management strategies."
        }
    ]

const [login ,setLogin]=useState("Login")

  function handleLogin(){
    setLogin('Profile')
  } 

  
  return (  <div>
  
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home login={login} />} />
        <Route path="/Candle" element={<Candle candles={candles} />} />
        <Route path="/Candle/:id" element={<Individual candles={candles} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Bullcandle" element={<Bullcandle candles={candles} />}></Route>
        <Route path="/Bear" element={<Bear  candles={candles} />}></Route>
        <Route path="/Explore" element={<Explore candles={candles} />}></Route>
        <Route path="/Login" element={<Login handleLogin={handleLogin}   />}></Route>
        <Route path="/Topin" element={<Topindividual />}></Route>
        <Route path="/Privacy" element={<Privacy /> }></Route>
      </Routes>
    </BrowserRouter>
     </div>
  );
}

export default App;
