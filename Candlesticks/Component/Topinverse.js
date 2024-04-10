import React, { useState } from 'react';

const Topinverse = () => {
    const [shows, setShows] = useState([]);

    function togglefully() {
        setShows(!shows);
    }

    return (
        <div>
            <div className="container">
                <h3  className="my-4">Top 5 Best Investmt Options In India 2024</h3>
                { shows ? (
                    <>
                    <h2>1)Public Provident Fund (PPF)</h2>
                <p>This government-backed fixed income scheme can be considered a risk-free investment as its returns are guaranteed by the government.</p>
                <h3 style={{fontWeight:"lighter",fontSize:"large"}}>Features:</h3>
                <p>
                    <strong>Availability:</strong> Available at almost all Indian banks and post offices. You can only open one account. No restriction on the age limit to open an account. A minor’s account is handled by their guardian till the age of 18.<br />
                    <strong>Investment Amount:</strong> Minimum investment amount is INR 500 per annum. Maximum amount is INR 1.5 lakh per annum. You can deposit anywhere between one to 12 times in one financial year.<br />
                    <strong>Return on Investment:</strong> The current interest rate is 7.10% per annum. PPF interest rates are floating in nature, which implies they could change every quarter. The interest rate change is anywhere between 0.25% to 0.75% in general.<br />
                    <strong>Maturity:</strong> A PPF fund matures in a span of 15 years. Partial withdrawals are allowed after five years of the account opening.<br />
                    <strong>Taxation:</strong> Investment in PPF is tax-free. Interest earned on your investment is also tax-free.
                </p>
                <hr />
                <div className="row d-flex justify-content-center">
                <a  className="center button19" style={{margin:"", fontSize:"small",width:"max-content" }} onClick={togglefully}>Read more <i className="fa fa-angle-down"></i></a>
</div><hr />
                    </>
                ) : (
                    
                    <> <h2>1)Public Provident Fund (PPF)</h2>
                <p>This government-backed fixed income scheme can be considered a risk-free investment as its returns are guaranteed by the government.</p>
                <h3 style={{fontWeight:"lighter",fontSize:"large"}}>Features:</h3>
                <p>
                    <strong>Availability:</strong> Available at almost all Indian banks and post offices. You can only open one account. No restriction on the age limit to open an account. A minor’s account is handled by their guardian till the age of 18.<br />
                    <strong>Investment Amount:</strong> Minimum investment amount is INR 500 per annum. Maximum amount is INR 1.5 lakh per annum. You can deposit anywhere between one to 12 times in one financial year.<br />
                    <strong>Return on Investment:</strong> The current interest rate is 7.10% per annum. PPF interest rates are floating in nature, which implies they could change every quarter. The interest rate change is anywhere between 0.25% to 0.75% in general.<br />
                    <strong>Maturity:</strong> A PPF fund matures in a span of 15 years. Partial withdrawals are allowed after five years of the account opening.<br />
                    <strong>Taxation:</strong> Investment in PPF is tax-free. Interest earned on your investment is also tax-free.
                </p>
                <hr />
                <h2>2) Post Office Monthly Income Scheme</h2>
                <p>The post office monthly income scheme is popular in domestic households, especially among housewives and those individuals who are earning passive income and looking to invest that to make some returns.</p>
                <h3 style={{fontWeight:"lighter",fontSize:"large"}}>Features:</h3>
                <p>
                    <strong>Availability:</strong> The Indian postal service offers single account, joint account (up to three adults), a guardian or parent of a minor and/or of a person of unsound mind; and even under the name of a minor above 10 years of age.<br />
                    <strong>Investment Amount:</strong>A minimum investment of INR 1,000 is required to open an account and a maximum balance of up to INR 4.50 lakh and 9 lakh are permitted for single and joint accounts, respectively. <br />
                    <strong>Return on Investment:</strong>Account can be closed after five years from the date of opening. However, premature closure before one year is not allowed. Similarly, 2% is deducted from the principal amount if the account is closed between one year and three years, and 1% for three and five years.
Nominees can file a claim if the depositor dies before the maturity period. <br />
                    <strong>Maturity:</strong> The scheme offers an interest rate of 6.60% per annum payable monthly.
The interest amount can be auto credited into the depositor’s savings account, or through electronic clearance service.<br />
                    <strong>Taxation:</strong> Interest earned on the deposit is taxable.
                </p>
                <hr />
                <h2>3) Government Bonds</h2>
                <p>The Indian government has opened direct purchase of bonds for individual investors, who could earlier trade in government bonds only via gilt mutual funds, to encourage domestic participation in the sovereign bond market.</p>
                <h3 style={{fontWeight:"lighter",fontSize:"large"}}>Features:</h3>
                <p>
                    <strong>Availability:</strong>The government announces its bond offering ahead of the date of auction. Both the state governments and the Central government issue these bonds.
The bonds issued by the State are known as State Development Loans, and the ones issued by the Center are known as G-Secs or just government bonds.You must have a bank account at a bank to purchase government bonds. You can hold government bonds in a demat account. <br />
                    <strong>Investment Amount:</strong>The price of the bond is also announced at the time of the bond announcement by the government.The easiest way to invest in G-Secs is to use the e-Kuber App, the application of choice for the central banking authority, the Reserve Bank of India’s.
The other way is to participate through a commercial bank listed by the government for that purpose or a primary dealer. For that, you will have to open a securities account.
You can buy it through stock exchanges as well. For instance, NCB-GSec is the Bombay Stock Exchange’s online platform for this purpose while the National Stock Exchange has the NSE goBID mobile application.Broking platforms can also be used for buying it.
You can also invest in government securities mutual funds. These funds invest in government bonds. <br />
                    <strong>Return on Investment:</strong>Most government bonds are fixed rate bonds, which means the interest rate is fixed for the entire tenure of the bond till maturity.Depending on the coupon rate determined at the time of purchase of the bond, you get a half-yearly interest for the stipulated bond holding period.Any capital gain (or capital loss) when the bond is sold or matures.Income from reinvestment of the interest payments that is interest-on-interest. <br />
                    <strong>Maturity:</strong>The maturity period of a government bond can be a year or more depending on the offering. <br />
                    <strong>Taxation:</strong> Tax will be charged as per a person’s income bracket from the income generated by the interest that one receives from these bonds.Any price increase in the value of the bond will also be regarded as capital gains and taxed accordingly.
                </p>
                <hr />
                <h2>4) National Pension Scheme (NPS)</h2>
                <p>The National Pension Scheme is for those who intend to build a robust retirement fund by investing their savings into a government-monitored pension fund that invests in diversified stock market portfolios including government bonds, corporate debentures and shares. The returns or the accumulated pension wealth made on such investments are used to purchase a life annuity and a portion is available for withdrawal at the end of the scheme cycle.

<br />Two kinds of NPS accounts exist: Tier I NPS Account and Tier II NPS Account.</p>
                <h3 style={{fontWeight:"lighter",fontSize:"large"}}>Features of Tier I NPS Account:</h3>
                <p>
                    <strong>Availability:</strong>Indian citizens between the age of 18 and 65 can invest.An account can be opened by visiting an authorized bank or any of its branches called point of presence (POP) appointed by the Pension Fund Regulatory and Development Authority. Alternatively, by visiting the eNPS web portal.After a request for opening an account, you receive a 12-digit number and a permanent retirement account is created. <br />
                    <strong>Investment Amount:</strong>You can open this account by depositing INR 500.To keep the account active, you have to deposit at least INR 1,000 in a financial year.No upper limit on how much you can invest per year.
You cannot withdraw your invested amount until age 60. <br />
                    <strong>Return on Investment:</strong>Returns are calculated on the basis of the net asset value declared by the pension funds of various banks.They are not predetermined and depend on how your investment has fared through the years. <br />
                    <strong>Maturity:</strong>After reaching the age of 60, you can withdraw a maximum of 60% of your total balance.The remaining 40% has to be compulsorily used to buy a pension plan of your choice. <br />
                    <strong>Taxation:</strong> Investment of INR 2 lakh per annum is exempted from tax under Section 80 C and Section 80CCD.
Returns earned on NPS tier I accounts are exempted from tax. <br />
                </p>
                <h3 style={{fontWeight:"lighter",fontSize:"large"}}>Features of Tier I NPS Account:</h3>
                <p>
                    <strong>Availability:</strong>This is a voluntary account and can be opened only if an individual already has an NPS Tier I account.You can open an account offline at any authorized bank or its POP appointed by the PFRDA. An online account can be opened by visiting the eNPS portal <br />
                    <strong>Investment Amount:</strong>A minimum investment amount of INR 1,000 at the time of opening the account.No annual contribution mandatory like in the case of an NPS Tier I account.No maximum limit on how much you want to invest.Each year, you decide how much of your money you want to invest in the four asset classes available: government bonds, corporate bonds, equities and alternative assets.Investment has no lock-in period. <br />
                    <strong>Return on Investment:</strong>Return on your investment is not predetermined. It depends on the net asset value declared by pension funds in each investment cycle. <br />
                    <strong>Maturity:</strong>After reaching 60, you can withdraw a maximum of 60% of the total corpus.The remaining 40% is used to buy a pension plan of your choice. <br />
                    <strong>Taxation:</strong>There are no tax benefits and income from it is taxed as per your tax slab.Only government employees get tax benefits if they keep their investment locked for three years. 
                </p>
                <hr />
                <h2>5) Sovereign Gold Bonds (SGBs)</h2>
                <p>SGBs are government securities issued by the Reserve Bank of India (RBI) and denominated in gram(s) of gold. They are issued in multiples of gram(s) of gold with a minimum investment of 1 gram.</p>
                <h3 style={{fontWeight:"lighter",fontSize:"large"}}>Features:</h3>
                <p>
                    <strong>Availability:</strong>SBGs are open for auction on dates announced by the central government. These bonds are issued by the RBI multiple times a year.
You must have a PAN Card to buy an SGB.
You can buy SGBs from banks, post offices, stock brokerage companies both online and offline. <br />
                    <strong>Investment Amount:</strong>Each bond unit you purchase has the value of one gram of pure gold based on gold’s average closing price of the previous three business days. You can purchase a maximum of 4 kgs of SGBs for individuals and 20 kgs for trusts. You currently receive a discount of INR 50 on each gram purchased online. <br />
                    <strong>Return on Investment:</strong> 2.5% paid twice a year.  <br />
                    <strong>Maturity:</strong>Eight years. Early redemption after five years. <br />
                    <strong>Taxation:</strong> Interest payments are taxed based on your tax slab.Any gains made at maturity are free from tax.<br />

                </p>
               
            <div className="row d-flex justify-content-center">
                   <a  className="center button19" style={{margin:"0px 35%", fontSize:"small",width:"max-content" }} onClick={togglefully}>Read less <i className="fa fa-angle-up"></i></a>
                   </div> <hr /> </>
                )}
            </div>
        </div>
    );
};

export default Topinverse;
