// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { Trans, useTranslation } from 'react-i18next'
// 組件 (component)
import Anchor from '../../components/Anchor'

// 首頁
function CustomerData() {
  // 語言
  const { t } = useTranslation()
  return (
    <>
      <main className={S.main}>
        <div className={S.container}>
          <h1 className={S.title}>
            PROCEDURE FOR PROCESSING CUSTOMER DATA <br /> MoneyExpress OÜ
          </h1>
          <div className={S.validTime}>
            <p className={S.date}>Valid as from Jan 1, 2024</p>
          </div>
          <section className={S.contacts}>
            <h2 className={S.subtitle}>Controller and contacts</h2>
            <div className={S.text}>
              <p>MoneyExpress OÜ</p>
              <p>registry code 11557160</p>
              <p>registered office Pirita tee 20/4-219, Tallinn, 12011, Estonia</p>
              <p>
                website{' '}
                <Anchor int="/" target="_blank">
                  www.moneyexpresscrypto.ee
                </Anchor>
              </p>
            </div>
          </section>
          <ol className={S.list}>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>General provisions</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      <Trans i18nKey="test1">
                        The purpose of this Procedure for Processing Customer Data (hereinafter{' '}
                        <strong>Procedure</strong> ) is to establish the principles and activities
                        of processing of personal data at MoneyExpress OÜ (hereinafter referred to
                        as <strong>MoneyExpress</strong> ). The Procedure ensures compliance with
                        the relevant legal requirements, including the Republic of Estonia{' '}
                        <Anchor ext="https://www.riigiteataja.ee/akt/104012019011?leiaKehtiv">
                          Personal Data Protection Act
                        </Anchor>{' '}
                        (hereinafter <strong>PDP</strong> ) and the{' '}
                        <Anchor ext="https://eur-lex.europa.eu/legal-content/ET/TXT/PDF/?uri=CELEX:32016R0679&from=ET">
                          General Data Protection Regulation
                        </Anchor>{' '}
                        (hereinafter <strong>GDPR</strong> ), when processing the personal data of
                        MoneyExpress customers.
                      </Trans>
                    </li>
                    <li>
                      In addition to the personal data protection regulations mentioned in Clause
                      1.1, the application of this Procedure is also guided by other applicable
                      regulations that may influence the protection and processing of personal data.
                    </li>
                    <li>
                      MoneyExpress OÜ processes the personal data of its customers and individuals
                      who have expressed interest or intent to use the services provided by
                      MoneyExpress. This also includes data from individuals who are current or
                      former users of its cryptocurrency investment services.
                    </li>
                    <li>
                      MoneyExpress primarily acts as a data controller. As a controller,
                      MoneyExpress collects personal data and determines the purpose and conditions
                      for processing such data. In specific cases, where services are rendered
                      through third-party providers, MoneyExpress may act as a data processor,
                      processing personal data according to the written instructions of the
                      third-party controller.
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Definitions</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      The following definitions apply to this Procedure:
                      <dl>
                        <div>
                          <dt>Data subject:</dt>
                          <dd>
                            Any identifiable natural person whose personal data is processed. An
                            identifiable person is one who can be identified, directly or
                            indirectly, using various identifiers like names, identification
                            numbers, or location data.
                          </dd>
                        </div>
                        <div>
                          <dt>Special categories of personal data:</dt>
                          <dd>
                            Personal data that reveals sensitive information, such as racial or
                            ethnic origin, political opinions, religious beliefs, trade union
                            membership, or health-related information, and requires heightened
                            protection.
                          </dd>
                        </div>
                        <div>
                          <dt>Personal data:</dt>
                          <dd>
                            Any information relating to an identified or identifiable individual.
                          </dd>
                        </div>
                        <div>
                          <dt>Processing:</dt>
                          <dd>
                            Any operation or set of operations performed on personal data, such as
                            collection, recording, organization, or dissemination.
                          </dd>
                        </div>
                        <div>
                          <dt>Personal data breach:</dt>
                          <dd>
                            A breach of security leading to the accidental or unlawful destruction,
                            loss, alteration, or unauthorized disclosure of, or access to, personal
                            data.
                          </dd>
                        </div>
                        <div>
                          <dt>Customer:</dt>
                          <dd>
                            Any person who uses services provided or mediated by MoneyExpress.
                          </dd>
                        </div>
                        <div>
                          <dt>Third party:</dt>
                          <dd>
                            Any entity other than the data subject, controller, or processor
                            authorized to process personal data under the direct authority of the
                            controller or processor.
                          </dd>
                        </div>
                        <div>
                          <dt>Consent of the data subject:</dt>
                          <dd>
                            Freely given, specific, informed, and unambiguous agreement by the data
                            subject to the processing of their personal data.
                          </dd>
                        </div>
                        <div>
                          <dt>Politically Exposed Person (PEP):</dt>
                          <dd>
                            A person holding or having held a public authority function, with
                            potential related risks still existing.
                          </dd>
                        </div>
                        <div>
                          <dt>Controller:</dt>
                          <dd>
                            The entity determining the purposes and means of personal data
                            processing.
                          </dd>
                        </div>
                        <div>
                          <dt>Processor:</dt>
                          <dd>An entity processing personal data on behalf of the controller.</dd>
                        </div>
                      </dl>
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Principles</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      <dl>
                        <dt>Lawfulness:</dt>
                        <dd>
                          Processing personal data must be based on Article 6 of the GDPR (for
                          regular personal data) or, in the case of special categories of personal
                          data, on Article 9 of the GDPR. All processing must comply with applicable
                          legal grounds.
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>Fairness:</dt>
                        <dd>
                          Personal data is processed in a way that ensures transparency and
                          reasonable expectations from customers. MoneyExpress ensures that data
                          processing respects the interests, fundamental rights, and freedoms of
                          customers and avoids discrimination or unfair treatment.
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>Transparency:</dt>
                        <dd>
                          MoneyExpress provides customers with clear and accessible information
                          about personal data processing through the publication of this Procedure
                          on its website. Transparency applies throughout the data processing
                          lifecycle—from data collection to final erasure.
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>Purpose limitation:</dt>
                        <dd>
                          Personal data is collected for clearly defined and legitimate purposes,
                          ensuring that it is not further processed in ways incompatible with the
                          original purposes.
                        </dd>
                      </dl>
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Description of categories of personal data</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      MoneyExpress processes various categories of personal data depending on the
                      nature of the services provided. The categories include:
                      <dl>
                        <div>
                          <dt>General data:</dt>
                          <dd>
                            Such as the first and last name, or company name (for legal entities).
                          </dd>
                        </div>
                        <div>
                          <dt>Customer character data:</dt>
                          <dd>
                            Information like citizenship, language preferences, age, gender, and tax
                            residency.
                          </dd>
                        </div>
                        <div>
                          <dt>Contact data:</dt>
                          <dd>
                            Including telephone numbers, email addresses, and residential or
                            business addresses.
                          </dd>
                        </div>
                        <div>
                          <dt>Data for identifying natural persons:</dt>
                          <dd>
                            Includes first and last name, personal identification code (or date of
                            birth), place of residence, nationality, and government-issued
                            identification document details.
                          </dd>
                        </div>
                        <div>
                          <dt>Income and obligations data:</dt>
                          <dd>
                            Information related to employment, income sources, and payment history.
                          </dd>
                        </div>
                        <div>
                          <dt>Compliance data:</dt>
                          <dd>
                            Information related to customer identification in line with Know Your
                            Customer (KYC) regulations, including any association with Politically
                            Exposed Persons (PEPs), and sources of income.
                          </dd>
                        </div>
                      </dl>
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Legal bases and purposes of processing personal data</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      <strong>GDPR Article 6 paragraph 1 clause a,</strong> considering the
                      conditions arising from Article 7 of the GDPR: if the data subject has given
                      their specific and unequivocal <strong>consent:</strong>
                      <table>
                        <thead>
                          <tr>
                            <th>Purpose</th>
                            <th>Categories of personal data</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              Forwarding of promotional offers by Money Express and cooperation
                              partners{' '}
                            </td>
                            <td>General data, contact data</td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li>
                      <strong>GDPR Article 6 paragraph 1 clause b:</strong> if processing is
                      necessary for the provision of a service to the data subject or{' '}
                      <strong>in order to apply due diligence measures</strong> at the request of
                      the data subject <strong>prior to provision of the service</strong>:{' '}
                      <table>
                        <thead>
                          <tr>
                            <th>Purpose</th>
                            <th>Categories of personal data</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              Deciding on the provision of a service and defining the terms and
                              conditions
                            </td>
                            <td>
                              General data, data characterizing the customer, contact data, data
                              related to the identification of a physical/legal person, data on
                              income and obligations, data related to compliance with the
                              know-your-customer principle, data related to the transaction
                            </td>
                          </tr>
                          <tr>
                            <td>Resolution of incidents related to the provision of a service</td>
                            <td>General data, contact data, transaction/contract data</td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li>
                      <strong>GDPR Article 6 paragraph 1 clause c:</strong> if processing is
                      necessary <strong>for compliance with a legal obligation:</strong>
                      <table>
                        <thead>
                          <tr>
                            <th>Purpose</th>
                            <th>Legal act</th>
                            <th>Categories of personal data</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              Prevention of money laundering and terrorist financing (implementation
                              of due diligence measures)
                            </td>
                            <td>
                              Republic of Estonia Money Laundering and Terrorist Financing
                              Prevention Act § 19 - § 41
                            </td>
                            <td>
                              General data, data characterizing the customer, contact data, data
                              related to the identification of a physical/legal person, data on
                              income and obligations, data related to compliance with the
                              know-your-customer principle
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Compliance with mandatory risk management principles for the financial
                              institution
                            </td>
                            <td>
                              Republic of Estonia Money Laundering and Terrorist Financing
                              Prevention Ac § 13, § 46
                            </td>
                            <td>
                              General data, data characterizing the customer, contact data, data
                              related to the identification of a physical/legal person, data on
                              income know-your-customer principle, data related to the transaction
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Compliance with the duty to report in case of suspicion of money
                              laundering and terrorist financing
                            </td>
                            <td>
                              Republic of Estonia Money Laundering and Terrorist Financing
                              Prevention Ac § 49
                            </td>
                            <td>
                              General data, data characterizing the customer, contact data, data
                              related to the identification of a physical/legal person, data on
                              income know-your-customer principle, data related to the transaction
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li>
                      <strong>GDPR Article 6 paragraph 1 clause f:</strong>: if processing is
                      necessary <strong>for the purposes of the legitimate interests</strong>{' '}
                      pursued by Money Express or a third party:{' '}
                      <table>
                        <thead>
                          <tr>
                            <th>Purpose</th>
                            <th>Categories of personal data</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Resolution of complaints and appeals</td>
                            <td>
                              General data, contact data, transaction data, biometric data, video
                              and audio recordings
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Requesting feedback related to customer service to improve the quality
                              of services
                            </td>
                            <td>
                              General data, contact data, transaction data, video and audio
                              recordings
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Development and performance of IT solutions and ensuring data
                              availability, integrity and confidentiality
                            </td>
                            <td>
                              General data, data characterizing the customer, contact data, data
                              related to the identification of a physical/legal person, data on
                              income know-your-customer principle, data related to the transaction,
                              biometric data, electronic identification data, video and audio
                              recordings
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Protection of Money Express's interests in legal disputes and debt and
                              damage claims
                            </td>
                            <td>
                              General data, data characterizing the customer, contact data, data
                              related to the identification of a physical/legal person, data on
                              income know-your-customer principle, data related to the transaction,
                              video and audio recordings
                            </td>
                          </tr>
                          <tr>
                            <td>Checking customer data and, if necessary, correcting it</td>
                            <td>
                              General data, data characterizing the customer, contact data, data
                              related to the identification of a physical/legal person, data on
                              income know-your-customer principle, data related to the transaction,
                              video and audio recordings
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Recording of calls and actions related to service provision to ensure
                              quality, for security reasons, and to resolve disputes
                            </td>
                            <td>
                              General data, data characterizing the customer, contact data, data
                              related to the transaction, biometric data
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li>
                      <strong>GDPR Article 9 paragraph 2 clause g:</strong> if processing is
                      necessary for reasons of substantial public interest, on the basis of Union or
                      Member State law:{' '}
                      <table>
                        <thead>
                          <tr>
                            <th>Purpose</th>
                            <th>Legal act</th>
                            <th>Categories of personal data</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              Identification of person and verification of data using information
                              technology means
                            </td>
                            <td>
                              Republic of Estonia Money Laundering and Terrorist Financing
                              Prevention Act § 31
                            </td>
                            <td>Biometric data</td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Sources of personal data</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      Money Express uses the following data sources to collect personal data:{' '}
                      <ul>
                        <li>personal data obtained directly from the data subject;</li>
                        <li>
                          State and private registers such as the Population Register, registers
                          kept by the Estonian Tax and Customs Board, the Commercial Register, the
                          Official Journal Ametlikud Teadaanded, AS Krediidiinfo Eesti
                          (e-Krediidiinfo database) and d-Systems OÜ (info portal Teatmik.ee);
                        </li>
                        <li>
                          a third party or an authority performing public functions such as the
                          Estonian Police and Border Guard Board, a notary, a court enforcement
                          officer, a bankruptcy trustee, a local government unit;
                        </li>
                        <li>publicly available data.</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Cookies</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      Cookies are small text files that are stored on the user's device when the
                      user visits Money Express’s website.
                    </li>
                    <li>
                      Web cookies are classified into three categories based on their purpose:{' '}
                      <dl>
                        <div>
                          <dt>technical cookies:</dt>
                          <dd>
                            {' '}
                            requesting and saving cookie consent, functioning of website
                            functionality and implementation of security measures, including saving
                            the desired language selection;
                          </dd>
                        </div>
                        <div>
                          <dt>analytics cookies:</dt>
                          <dd>
                            {' '}
                            monitoring web traffic and website visits, improving the usability of
                            the website using generalized and anonymous statistics;
                          </dd>
                        </div>
                        <div>
                          <dt>marketing cookies:</dt>
                          <dd> displaying user-targeted advertising.</dd>
                        </div>
                      </dl>
                    </li>
                    <li>
                      More detailed information on cookies is published on Money Express’s website
                      at{' '}
                      <Anchor int="/" target="_blank">
                        www.moneyexpresscrypto.ee
                      </Anchor>
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Recording of phone calls and operations</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      Money Express records telephone calls with the data subject and operations
                      carried out at service points are video recorded. The purpose of audio
                      recordings is to ensure better service and to resolve possible complaints by
                      the data subject. The purpose of video recordings is to ensure the safety of
                      Money Express's employees and data subjects, resolve complaints by the data
                      subject, and ensure better service quality.{' '}
                    </li>
                    <li>
                      The data subject is informed regarding the recording of telephone calls at the
                      beginning of a call and the need to record the call is explained. The data
                      subject is informed regarding video surveillance by the corresponding signs
                      that are placed in highly visible places at service points.
                    </li>
                    <li>
                      Money Express ensures that audio and video recordings cannot be accessed by
                      persons who do not have the appropriate access rights.
                    </li>
                    <li>
                      As a rule, recordings are stored for 2-3 months, and when the storage period
                      expires, the recording is deleted. In the event of an incident involving the
                      need to use the recording for the protection of the rights of the data subject
                      and/or Money Express, Money Express sets a new term for the storage of the
                      recording based on relevant specific circumstances, providing the relevant
                      parties with the necessary reasons for this.
                    </li>
                    <li>
                      The data subject has the right to review the voice recording by e-mailing
                      relevant request to{' '}
                      <Anchor ext="info@moneyexpresscrypto.ee" email>
                        info@moneyexpresscrypto.ee
                      </Anchor>
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Use of electronic contact data for direct marketing</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      The use of electronic contact data of a natural person customer for direct
                      marketing takes place only with such person’s prior consent.
                    </li>
                    <li>
                      The customer has the right to withdraw their consent at any time, request
                      deletion or restriction of their personal data, and object if their personal
                      data has been processed for direct marketing purposes.
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Storage of personal data</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      Money Express stores personal data in a form that allows data subjects to be
                      identified only as long as it is necessary to fulfill the purposes of personal
                      data processing and/or adhere to obligations arising from legal acts.
                    </li>
                    <li>
                      Proceeding from § 47 of the Republic of Estonia Money Laundering and Terrorist
                      Financing Prevention Act, the customer’s personal data is stored for no less
                      than 5 (five) years after the termination of the customer relationship. On the
                      basis of a compliance notice issued by the competent supervisory authority,
                      data of importance for prevention, detection, or investigation of money
                      laundering or terrorist financing may be retained for a longer period, but not
                      for more than 5 (five) years after the expiry of the first time limit.
                    </li>
                    <li>
                      Preservation of accounting source documents is regulated by § 12 (1) of the
                      Republic of Estonia Accounting Act pursuant to which the term of preservation
                      is set at 7 (seven) years.
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Transfer of personal data</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      If a legal basis and a purpose deriving from the law is present, Money Express
                      may transfer personal data to:{' '}
                      <ul>
                        <li>
                          persons and companies involved in service provision (e.g. identification
                          and verification service providers, money transfer service providers,
                          payment service providers, appraisers of the value of a security, precious
                          metal quality/value appraisers);
                        </li>
                        <li>
                          authorized and co-responsible processors that provide services to Money
                          Express (e.g. communication, IT, and postal service providers, archive) or
                          whose services Money Express uses to protect its own interests (e.g. legal
                          advisors, auditing and/or law firms, information security service
                          providers). The list of Money Express's authorized data processors is
                          published on Money Express's website at{' '}
                          <Anchor int="/" target="_blank">
                            www.moneyexpresscrypto.ee
                          </Anchor>
                          ;
                        </li>
                        <li>
                          cooperation partners authorized by Money Express to mediate requests,
                          contracts, and appeals;
                        </li>
                        <li>a new creditor in case of assignment of the right of claim;</li>
                        <li>
                          state authorities and institutions that have the legal right to request
                          the transfer of personal data (e.g. investigative bodies, notaries, court
                          enforcement officers, bankruptcy trustees, the Financial Supervision
                          Authority, the Republic of Estonia Tax and Customs Board, the Financial
                          Intelligence Unit);
                        </li>
                        <li>
                          a representative if there is a relevant court decision, a power of
                          attorney accepted by Money Express, or a statutory right of representation
                          for the transfer of personal data.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Adopting a decision in automated processing</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      The data subject has the right to request that a decision is not taken
                      regarding them based solely on automated processing, including profile
                      analysis, that brings along legal consequences concerning the data subject or
                      has a significant impact on the data subject.
                    </li>
                    <li>
                      Clause 12.1 of this Procedure is not applied where the decision:{' '}
                      <ul>
                        <li>
                          is necessary for the conclusion of a contract between the data subject and
                          Money Express or for the provision of a service;
                        </li>
                        <li>
                          is permitted by the law applicable in a European Union Member State which
                          provides for appropriate measures to protect the rights and freedoms and
                          legitimate interests of the data subject; or
                        </li>
                        <li>is based on the express consent of the data subject.</li>
                      </ul>
                    </li>
                    <li>
                      With the application of the Money Express website, the risk profile of the
                      data subject or the person participating in a transaction is automatically
                      identified and the risk level is determined, as a result of which the level of
                      application of due diligence measures is ascertained. The obligation to apply
                      due diligence measures derives from the requirements set forth in the Republic
                      of Estonia Money Laundering and Terrorist Financing Prevention Act. Due
                      diligence measures are applied to the establishment of a business
                      relationship, to the occasional transaction, and to the continuous monitoring
                      of transactions or business relationships.
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Protection of the rights of the data subject</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      The data subject has the right to access the personal data processed about
                      them in accordance with Article 15 of the GDPR and, among other things, to
                      exercise other rights outlined in this clause, by submitting a request to
                      Money Express by e-mailing{' '}
                      <Anchor ext="info@moneyexpresscrypto.ee" email>info@moneyexpresscrypto.ee</Anchor>
                    </li>
                    <li>
                      The data subject has the right to obtain from Money Express the rectification
                      of inaccurate personal data concerning the data subject without undue delay,
                      as well completion of incomplete personal data depending on the purposes of
                      processing of the personal data. To this end, it must be ascertained which
                      personal data the data subject believes to be incorrect or incomplete, and a
                      copy of the document on which the correction or completion is based (for
                      example, a name change decision).
                    </li>
                    <li>
                      The data subject has the right to obtain from Money Express the erasure of
                      personal data concerning them without undue delay, and Money Express has the
                      obligation to erase personal data without undue delay where one of the
                      following grounds applies:{' '}
                      <ul>
                        <li>
                          the personal data are no longer necessary in relation to the purposes for
                          which they were collected or otherwise processed;
                        </li>
                        <li>
                          the data subject withdraws their consent and there is no other basis for
                          processing;
                        </li>
                        <li>the personal data have been unlawfully processed.</li>
                      </ul>
                    </li>
                    <li>
                      The right of the data subject, provided in clause 13.3. of this Procedure, to
                      obtain erasure of their personal data does not apply if processing of personal
                      data is required for the fulfillment of a legal obligation prescribed by
                      legislation applicable to Money Express as well as if Money Express processes
                      personal data for the establishment, exercise, or defense of legal claims.
                    </li>
                    <li>
                      The data subject has the right to obtain from Money Express restriction of
                      processing where one of the following applies:{' '}
                      <ul>
                        <li>
                          the accuracy of the processing of personal data is contested by the data
                          subject, pending verification by Money Express of the accuracy of the
                          personal data;
                        </li>
                        <li>
                          the processing is unlawful and the data subject opposes the erasure of the
                          personal data and requests the restriction of their use instead;
                        </li>
                        <li>
                          Money Express no longer needs the personal data for specific purposes, but
                          they are required for the establishment, exercise, or defense of legal
                          claims;
                        </li>
                        <li>
                          the data subject has objected to such processing which is undertaken based
                          on Money Express’s legitimate interest by way of automated means, pending
                          verification by Money Express of whether the legitimate grounds of Money
                          Express override those of the customer.
                        </li>
                      </ul>
                    </li>
                    <li>
                      The data subject should be allowed to receive personal data concerning them
                      which they have provided to Money Express, and to transmit it to another
                      controller if the processing is undertaken based on the data subject’s consent
                      and if the processing is carried out by automated means. The transfer of data
                      may be restricted or refused if the transfer would violate the rights and
                      freedoms of Money Express or third parties.
                    </li>
                    <li>
                      The data subject has the right to object, on grounds relating to their
                      particular situation, at any time to processing of personal data concerning
                      them where the processing is based on Money Express’s legitimate interest,
                      including profiling based on relevant provisions. Money Express no longer
                      process the personal data unless Money Express demonstrates compelling
                      legitimate grounds for the processing which override the interests, rights,
                      and freedoms of the data subject or for the establishment, exercise, or
                      defense of legal claims.
                    </li>
                    <li>
                      The data subject can object to the automated decisions made in accordance with
                      Clause 12 of this Procedure, including profiling, and request a revision of
                      the decision as well as request information regarding the decision-making
                      process.
                    </li>
                    <li>
                      The appeal regarding the processing of the data subject's personal data must
                      be submitted at least in a format enabling written reproduction. Money Express
                      responds to the appeal within 30 days as from receipt of the appeal. If
                      necessary, the response term may be extended by another 30 days, considering
                      the complexity of the request. Money Express informs the data subject of the
                      need for such extension and justifies the content of the need.
                    </li>
                    <li>
                      In the event that the data subject feels that their rights in the processing
                      of personal data have been violated, the data subject has the right to contact
                      Money Express to obtain cessation of the violation. In addition, the data
                      subject has the right to submit a complaint to the Republic of Estonia Data
                      Protection Inspectorate: <Anchor ext="https://www.aki.ee/">www.aki.ee</Anchor>
                      ; registered office Tatari 39, Tallinn; advice line{' '}
                      <Anchor ext="+37256202341" phone>+372 56202341</Anchor>, general contact{' '}
                      <Anchor ext="+3726274135" phone>+372 6274135</Anchor>, e-mail{' '}
                      <Anchor ext="info@aki.ee" email>info@aki.ee</Anchor>.
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>Distinctions applicable to the financial institution</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      Money Express, as a financial institution, has the right to restrict such
                      rights of the data subject which are directly related to Money Express's
                      obligations in preventing money laundering and terrorist financing:{' '}
                      <ul>
                        <li>the right to request restriction of processing;</li>
                        <li>the right to request transfer of personal data;</li>
                        <li>the right to object to processing;</li>
                        <li>
                          in the event that non-restriction may impair the ability of Money Express
                          or another obliged entity for the purposes of the Republic of Estonia
                          Money Laundering and Terrorist Financing Prevention Act to comply with the
                          requirements of said Act, including application of due diligence measures.
                        </li>
                      </ul>
                    </li>
                    <li>
                      A financial institution is not subject to the obligations arising from the
                      GDPR regarding the customer's right to access their personal data, the right
                      to erasure ("right to be forgotten"), and the right to obtain restriction, to
                      the extent that the financial institution implements processing, of the
                      processing of such personal data, including location data, which the financial
                      institution processes:{' '}
                      <ul>
                        <li>
                          upon screening and monitoring of transactions and monitoring of business
                          relationships in other ways for the purpose of preventing money laundering
                          and terrorist financing;
                        </li>
                        <li>for the purpose of preventing fraud and evasion of sanctions;</li>
                        <li>
                          for the purpose of meeting security requirements and implementing risk
                          management measures.
                        </li>
                      </ul>
                    </li>
                    <li>
                      The distinction noted in Clause 14.2. of this Procedure is applied, provided
                      that:{' '}
                      <ul>
                        <li>personal data of special categories is not processed;</li>
                        <li>
                          all of the reasons for application of the distinction are documented;
                        </li>
                        <li>
                          appropriate measures are implemented to protect the customer's rights and
                          freedoms;
                        </li>
                        <li>
                          appropriate and relevant security measures provided for in the GDPR are
                          fully adhered to and personal data is not stored in an identifiable format
                          for longer than is necessary to fulfill relevant purposes, including
                          compliance with the storage obligation arising from the law, except in
                          cases where erasure of personal data compromises the functioning of a
                          payment system;
                        </li>
                        <li>
                          appropriate and relevant measures are implemented to ensure that personal
                          data are not processed for purposes other than the fulfillment of purposes
                          stated in clause 14.2. of this Procedure.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Money Express must inform the data subject of relevant restrictions before
                      processing personal data, unless this may affect achievement of the objectives
                      of the restriction applied.
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

export default CustomerData
