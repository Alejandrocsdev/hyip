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
                      <Trans i18nKey="test">
                        MoneyExpress OÜ, registry code 11557160, registered office Pirita tee
                        20/4-219, Tallinn, 12011, Estonia, (hereinafter <strong>Seller</strong>) has
                        prescribed these terms and conditions of use of their online store
                        (hereinafter <strong>Terms</strong>) that serve as basis for selling goods
                        in the online store operating at www.moneyexpresscrypto.ee (hereinafter
                        <strong>online store</strong>) and apply to all natural persons and bodies
                        corporate (hereinafter <strong>Buyer</strong>) wishing to use the services
                        provided by and purchase goods in the online store.
                      </Trans>
                    </li>
                    <li>
                      Currency exchange rates on the website are displayed in a way that shows how
                      much foreign currency the customer has to pay (purchase) or will receive
                      (sale) for 1 euro.
                    </li>
                    <li>
                      The Seller has the right to amend the Terms (including product prices) without
                      prior notice; the Terms take effect upon disclosure thereof on the online
                      store’s website.
                    </li>
                    <li>
                      The controller of personal data submitted by the Buyer for the purpose of
                      using the services provided by the online store is MoneyExpress OÜ; the terms
                      and conditions of processing personal data and the rights of the Buyer are
                      provided for (in Estonian) at{' '}
                      <Anchor int="/customer-data-processing" target="_blank">
                        https://www.moneyexpresscrypto.ee/customer-data-processing
                      </Anchor>
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Submitting and paying for orders</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      To make a purchase, the Buyer selects the desired goods and adds them to the
                      shopping cart and chooses the appropriate delivery method: a) courier
                      delivery; b) parcel station; c) pick up at the office.
                    </li>
                    <li>
                      In the shopping cart are displayed to the Buyer all fees connected to the
                      Order (hereinafter Order), except third party service fees related to making
                      of the payment.
                    </li>
                    <li>
                      The Buyer undertakes to review the terms and conditions of processing of
                      personal data at{' '}
                      <Anchor int="/customer-data-processing" target="_blank">
                        https://www.moneyexpresscrypto.ee/customer-data-processing
                      </Anchor>{' '}
                      (in Estonian) as well as these terms and conditions of sale and, if the Buyer
                      consents to above Terms, to tick corresponding boxes next to the corresponding
                      consents.
                    </li>
                    <li>
                      The Buyer undertakes to review the content of the displayed Order and, if
                      everything is as it should be, to confirm the Order by clicking “I confirm and
                      undertake to pay for the order”.
                    </li>
                    <li>
                      After confirming their Order, the Buyer must select a suitable payment method
                      from among a) bank link b) credit card c) bank transfer. The Buyer undertakes
                      to pay for the Order within one (1) hour as of confirming the Order.
                    </li>
                    <li>
                      The Seller reserves the right to limit the choice of payment methods depending
                      on the type of goods sold and to impose service fees depending on the type of
                      transaction, with all such fees being clearly stated before confirming the
                      Order.
                    </li>
                    <li>
                      By confirming the Order, relevant sales contract is deemed to be concluded
                      between the Seller and the Buyer - the Buyer becomes obligated to pay for the
                      Order at the agreed time and using the agreed method, and the Seller becomes
                      obligated to deliver the goods at the agreed time and using the agreed method.
                    </li>
                    <li>
                      The Seller confirms receipt of the Order by sending a corresponding
                      automatically generated confirmation letter to the Buyer’s e-mail address.
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Canceling orders</h2>
                <div className={S.text}>
                  <ol>
                    <li>The Buyer may cancel the Order before making the payment.</li>
                    <li>
                      The Seller has the right to cancel the Order if the Order has not been paid
                      for during the time provided for in the Terms.
                    </li>
                    <li>
                      The Seller has the right to unilaterally cancel the Order if extraordinary
                      circumstances emerge; the Seller notifies the Buyer of emergence of such
                      circumstances to specify new terms and conditions of sale or, if an agreement
                      is not reached, the Seller refunds the Buyer the paid amount in full without
                      delay.{' '}
                      <p className={S.mt}>Orders may be cancelled on the following grounds:</p>
                    </li>
                    <li>
                      If an Order is cancelled under circumstances noted in item 3.3., the Seller
                      returns the full amount of the product price paid to the Seller; however, the
                      Seller is not liable for such other expenses or possible damage related to the
                      Order (including costs related to making the payment and sending the goods)
                      which may be incurred by the Buyer in connection with cancellation of the
                      Order by the Seller.
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>
                  Delivery of ordered goods and obligation of diligence on the part of the Seller
                </h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      Products purchased from the online store are also delivered to Estonia, Latvia
                      and Lithuania through a courier service and a parcel machine. Service
                      providers, as well as prices and delivery times are displayed to the buyer
                      before the order is confirmed.
                    </li>
                    <li>
                      If the Buyer pays for the goods online (bank link payment, card payment) or by
                      bank transfer, the goods will be issued against an identity document only to
                      the person who paid for the goods.
                    </li>
                    <li>
                      If you have chosen to pick up at the office of MoneyExpress, we will inform
                      you when the payment is received, and the goods will be at your chosen office.
                      If the items you ordered are not in stock, we will contact you and inform you
                      of the expected arrival time.
                    </li>
                    <li>
                      The seller insures all parcels. If the products are lost or damaged during
                      transportation, the seller reserves the right to decide whether to forward the
                      products or refund the money to the buyer. The insurance is valid if the
                      products are in transit and ends at the moment when the buyer gives a
                      signature on receipt of the products.
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Withdrawal from contract and resolution of disputes</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      Investment gold and silver as well as currencies are objects of the global
                      money market and their price depends on fluctuations in the financial market
                      that the Seller cannot control and, pursuant to § 53 (4) 1¹) of the Republic
                      of Estonia Law of Obligations Act, such goods are not subject to the
                      consumer’s right to withdraw from a distance contract within 14 days.
                    </li>
                    <li>
                      The Seller agrees to exchange, within the term noted in § 56 (1) of the
                      Republic of Estonia Law of Obligations Act, a product that does not comply
                      with the description provided in the online store or is damaged upon delivery,
                      provided that the product its unopened and in its original packaging.
                    </li>
                    <li>
                      Questions related to use of the online store are to be sent by e-mail to{' '}
                      <Anchor ext="mailto:gold@moneyexpress.ee" target="_self">
                        gold@moneyexpress.ee
                      </Anchor>
                      . Resolution of complaints related to the use of the online store is based on
                      MoneyExpress OÜ’s complaint submission and review procedure that is available{' '}
                      <Anchor int="/complaints" target="?blank">
                        https://www.moneyexpresscrypto.ee/complaints
                      </Anchor>
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
