// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { Link } from 'react-router-dom'

// 首頁
function About() {
  return (
    <>
      <main className={S.main}>
        <div className={S.container}>
          <div className={S.title}>
            <h1>About us</h1>
          </div>
          <div className={S.text}>
            <p>
              MONEY EXPRESS CRYPTO is a global financial institution that provides a comprehensive
              array of cash-related financial services in Estonia since 2008 and in Latvia since
              2010. In Estonia, these services are delivered through MoneyExpress OÜ.
            </p>
            <p>These include:</p>
            <ul>
              <li>Competitive cryptocurrency exchange rates;</li>
              <li>Seamless cryptocurrency purchases and sales;</li>
              <li>Fast and secure crypto transfers;</li>
              <li>Crypto wallet management;</li>
              <li>Investment in blockchain assets.</li>
            </ul>
            <p>
              MoneyExpress OÜ is registered with the{' '}
              <Link
                to="https://mtr.ttja.ee/juriidiline_isik/83251?backurl=%2Fjuriidiline_isik"
                target="_blank"
              >
                Ministry of Economic Affairs and Communications of the Republic of Estonia
              </Link>{' '}
              as a provider of currency exchange services and a trader of investment gold and coins.
            </p>
            <p>
              As official representatives of MoneyGram, RIA, Western Union, Swiss Remit Europe S.E.,
              and Paysera LT, we are registered with the{' '}
              <Link
                to="https://fi.ee/en/payment-services/payment-institutions/payment-agents-providers-cross-border-payment-services/moneyexpress-ou"
                target="_blank"
              >
                Financial Supervision Authority of the Republic of Estonia
              </Link>
              .
            </p>
            <p>
              Our team strictly follows KYC (Know Your Customer) guidelines and complies with the
              AML (Anti-Money Laundering) regulations established by the Republic of Estonia.{' '}
            </p>
            <p>
              We are committed to continuously improving our skills by staying informed about
              current laws and adopting innovative IT solutions and technologies into our daily
              operations.
            </p>
            <p>
              At MoneyExpress OÜ, we have a dedicated group of professionals ensuring that each
              client receives all the essential information regarding any financial transaction
              within our network.
            </p>
            <p>
              We pride ourselves on our integrity and professionalism, guaranteeing confidentiality
              and security while consistently providing our clients with favorable transaction
              terms.
            </p>
            <p>MoneyExpress OÜ - Your superior choice to a bank!</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
