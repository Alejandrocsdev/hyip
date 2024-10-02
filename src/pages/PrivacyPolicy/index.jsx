// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { Trans, useTranslation } from 'react-i18next'
// 組件 (component)
import Anchor from '../../components/Anchor'

// 首頁
function PrivacyPolicy() {
  // 語言
  const { t } = useTranslation()
  return (
    <>
      <main className={S.main}>
        <div className={S.container}>
          <h1 className={S.title}>
            MoneyExpress OÜ TERMS AND CONDITIONS OF SERVICE PROVISION IN ONLINE STORE
          </h1>
          <ol className={S.list}>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>General provisions</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      <Trans i18nKey="test"></Trans>
                    </li>
                    <li>
                      The Seller reserves the right to amend the Terms (including investment plans
                      and rates) without prior notice. Any changes take effect upon their
                      publication on the online platform’s website.
                    </li>
                    <li>
                      The controller of personal data submitted by the Buyer for using the online
                      platform is MoneyExpress OÜ. The terms and conditions of processing personal
                      data and the Buyer’s rights are provided in the Privacy Policy, available on
                      the platform.
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Submitting and Paying for Investments</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      To make an investment, the Buyer must sign up using a valid invitation code
                      and select their preferred investment plan: a) Basic Plan offering 0.5% daily
                      return on investment (ROI) for amounts between 100 USDT and 900 USDT, or b)
                      Elite Plan offering 1% daily ROI for amounts between 1,000 USDT and 100,000
                      USDT. All investments must be in multiples of 100 USDT.
                    </li>
                    <li>
                      The Buyer can add their selected investment plan to the cart and choose to
                      proceed with the payment using USDT (TRC20), the accepted form of
                      cryptocurrency.
                    </li>
                    <li>
                      All fees connected to the investment (hereinafter Investment) are displayed to
                      the Buyer in the cart. The Buyer must review and accept these Terms and the
                      conditions of personal data processing before proceeding with the payment.
                    </li>
                    <li>
                      The Buyer is required to confirm the details of their Investment and select a
                      payment method within the platform. The Buyer then agrees to the final terms
                      by clicking "I confirm and undertake to pay for the Investment."
                    </li>
                    <li>
                      After confirming the Investment, the Buyer must pay the amount within one (1)
                      hour by transferring the required USDT amount to the Seller’s designated
                      wallet address.
                    </li>
                    <li>
                      The Seller reserves the right to limit or adjust the available investment
                      plans based on market conditions or platform policy. Any applicable fees or
                      conditions related to the transaction will be clearly displayed before the
                      Buyer confirms their Investment.
                    </li>
                    <li>
                      By confirming the Investment, the Buyer enters into a binding investment
                      agreement with the Seller, obligating the Buyer to complete the payment and
                      the Seller to manage the investment according to the agreed plan and terms.
                    </li>
                    <li>
                      The Seller confirms receipt of the Investment by sending an automatically
                      generated confirmation email to the Buyer’s registered email address.
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Canceling Investments</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      The Buyer may cancel the Investment before transferring the cryptocurrency by
                      removing the investment plan from the cart.
                    </li>
                    <li>
                      The Seller reserves the right to cancel the Investment if payment is not
                      received within the allotted time as specified in the Terms.
                    </li>
                    <li>
                      The Seller has the right to unilaterally cancel the Investment in the event of
                      extraordinary market conditions or unforeseen technical issues. In such cases,
                      the Seller will notify the Buyer and propose new terms, or, if no agreement is
                      reached, refund the full amount without delay.
                    </li>
                    <li>
                      Cancellations may occur under the following circumstances: a) Failure in the
                      platform's system that causes inaccurate display of rates or plan details., or
                      b) Cryptocurrency market fluctuations or technical challenges affecting
                      transactions.
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Delivery of Services and Obligations of the Seller</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      The Buyer’s investments in the platform are managed digitally, with no
                      physical products or deliveries involved.
                    </li>
                    <li>
                      The Seller ensures the secure processing and management of all cryptocurrency
                      transactions and guarantees compliance with blockchain standards for secure
                      and reliable transfers of USDT.
                    </li>
                    <li>
                      Once the payment has been successfully processed, the Buyer’s investment will
                      be activated according to the chosen plan, and returns will begin to accrue
                      based on the daily ROI of the selected plan.
                    </li>
                    <li>
                      The Seller maintains insurance coverage for all cryptocurrency transactions
                      during transfer. If the transfer is interrupted or funds are lost during the
                      process, the Seller will determine whether to complete the transfer or refund
                      the Buyer’s amount.
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Withdrawal from Contract and Resolution of Disputes</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      Investments in cryptocurrency and blockchain assets are subject to the
                      fluctuations of the global financial markets, which the Seller cannot control.
                      Therefore, these services are not subject to a 14-day withdrawal right as per
                      § 53 (4) 1¹) of the Republic of Estonia Law of Obligations Act.
                    </li>
                    <li>
                      The Buyer may request a withdrawal of funds from their account balance at any
                      time, subject to a fixed withdrawal fee of 5 USDT. The minimum withdrawal
                      amount is 10 USDT.
                    </li>
                    <li>
                      Any disputes arising from the use of the platform or related to the Buyer’s
                      investments are to be addressed to{' '}
                      <Anchor ext="info@moneyexpresscrypto.ee" email>
                        info@moneyexpresscrypto.ee
                      </Anchor>
                      . Dispute resolution is governed by the Seller’s internal procedures, which
                      can be reviewed at{' '}
                      <Anchor int="/complaints" target="_blank">
                        https://www.moneyexpresscrypto.ee/complaints
                      </Anchor>
                      .
                    </li>
                  </ol>
                </div>
              </section>
            </li>
          </ol>
        </div>
      </main>
    </>
  )
}

export default PrivacyPolicy
