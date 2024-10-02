// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { Trans, useTranslation } from 'react-i18next'
// 組件 (component)
import Anchor from '../../components/Anchor'

// 首頁
function Complaints() {
  // 語言
  const { t } = useTranslation()
  return (
    <>
      <main className={S.main}>
        <div className={S.container}>
          <h1 className={S.title}>COMPLAINTS RESOLUTION PROCEDURE</h1>
          <div className={S.validTime}>
            <div className={S.date}>
              <p>Approved by the Jan 1, 2023</p>
              <p>resolution of the Management Board of </p>
              <p>MoneyExpress OÜ</p>
            </div>
          </div>
          <ol className={S.list}>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>PURPOSE</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      The procedure for handling complaints (hereinafter Procedure) sets out the
                      procedure to be followed when resolving complaints by customers (hereinafter
                      Customer) of MoneyExpress OÜ, registration code 11557160; registered office
                      Pirita tee 20/4-219, Tallinn, 12011, Estonia (hereinafter Money Express).
                    </li>
                    <li>
                      The purpose of the Procedure is to set out the definition of “complaint” and
                      prescribe how the Customer can submit a complaint, what information the
                      complaint must contain, what the term for responding to complaints is, and
                      what the Customer's rights are in the event that Money Express's response is not
                      acceptable in the Customer's opinion.
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>SUBMITTING A COMPLAINT</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      A customer's complaint for the purposes of this Procedure is a written
                      expression of dissatisfaction, disagreement, or demand submitted by the
                      Customer to Money Express that results from Money Express's provision or mediation
                      of services to the Customer, is related to the financial service requested by
                      the Customer, or is based on negative feedback regarding the quality of
                      service provision.
                    </li>
                    <li>
                      Complaints are to be submitted by e-mail to{' '}
                      <Anchor ext="info@moneyexpresscrypto.ee" email>info@moneyexpresscrypto.ee</Anchor>, at the on-site
                      service point, or by post to the Money Express’s office at Aia 5, 10111 Tallinn,
                      Estonia.
                    </li>
                    <li>
                      The following information must be stated in a complaint:{' '}
                      <ul>
                        <li>
                          first and last name, date of birth or personal identification code of the
                          complainant;
                        </li>
                        <li>contact details of the complainant;</li>
                        <li>
                          the facts and circumstances of filing the complaint (if the complaint is
                          related to a specific transaction, the place and time of the transaction
                          must be indicated);
                        </li>
                        <li>clearly stated complaint or claim of the complainant;</li>
                        <li>the date of filing the complaint.</li>
                      </ul>
                    </li>
                    <li>
                      The complaint must provide as detailed a description as possible of the facts
                      and circumstances on which the complaint is based.
                    </li>
                    <li>Money Express does not process or respond to anonymous complaints.</li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>COMPLAINTS HANDLING</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      Money Express treats the complainant and the received complaint, i.e. the
                      statements made therein, without prejudice and with respect.
                    </li>
                    <li>
                      If necessary, the representative of Money Express has the right to ask the
                      Customer to submit additional documents or additional information required to
                      resolve the complaint.
                    </li>
                    <li>
                      Upon receiving the complaint, Money Express informs the Customer of receipt of
                      the complaint, its acceptance for processing, and possible deadlines for
                      receiving a response from Money Express.
                    </li>
                    <li>
                      Money Express respond to complaints as quickly as possible, but no later than
                      within 15 (fifteen) calendar days as from the date of receipt of the complaint
                      by Money Express. If it is not possible to provide a response within the
                      prescribed term, the Customer is informed of an extended deadline and the
                      reasons for such extension of the processing time.
                    </li>
                    <li>
                      If Money Express resolves not to satisfy the Customer's complaint, the reasons
                      for such refusal are provided to the Customer in the response, if possible.
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>RECOURSE TO OTHER INSTITUTIONS</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      If the Customer is not satisfied with Money Express's response, the Customer (if
                      the Customer is a consumer) has the right to recourse to the Consumer Disputes
                      Committee of the Republic of Estonia Consumer Protection and Technical
                      Regulatory Authority (Pronksi 12, 10117 Tallinn; e-mail{' '}
                      <Anchor ext="info@tarbijakaitseamet.ee" email>info@tarbijakaitseamet.ee</Anchor>) for
                      an independent assessment and/or dispute resolution, or to file a claim to a
                      court of law.
                    </li>
                    <li>
                      In matters concerning the processing of personal data, the Customer, to
                      protect their rights and obtain an additional assessment, can also contact the
                      Republic of Estonia Data Protection Inspectorate (Väike-Ameerika 19, 10129
                      Tallinn; e-mail <Anchor ext="info@aki.ee" email>info@aki.ee</Anchor>).
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

export default Complaints
