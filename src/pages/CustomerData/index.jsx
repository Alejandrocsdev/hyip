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
            <Trans i18nKey="customerMainTitle" />
          </h1>
          <div className={S.validTime}>
            <p className={S.date}>{t('customerDate')}</p>
          </div>
          <section className={S.contacts}>
            <h2 className={S.subtitle}>{t('customerData01')}</h2>
            <div className={S.text}>
              <p>{t('customerData02')}</p>
              <p>{t('customerData03')}</p>
              <p>{t('customerData04')}</p>
              <p>
                <Trans
                  i18nKey="customerData05"
                  components={{
                    1: <Anchor int="/" target="_blank" />
                  }}
                />
              </p>
            </div>
          </section>
          <ol className={S.list}>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('customerTitle01')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      <Trans
                        i18nKey="customer01"
                        components={{
                          1: (
                            <Anchor ext="https://www.riigiteataja.ee/akt/104012019011?leiaKehtiv" />
                          ),
                          3: (
                            <Anchor ext="https://eur-lex.europa.eu/legal-content/ET/TXT/PDF/?uri=CELEX:32016R0679&from=ET" />
                          )
                        }}
                      />
                    </li>
                    <li>{t('customer02')}</li>
                    <li>{t('customer03')}</li>
                    <li>{t('customer04')}</li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('customerTitle02')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      {t('customer05')}
                      <dl>
                        <div>
                          <dt>{t('customer06')}</dt>
                          <dd>{t('customer0601')}</dd>
                        </div>
                        <div>
                          <dt>{t('customer07')}</dt>
                          <dd>{t('customer0701')}</dd>
                        </div>
                        <div>
                          <dt>{t('customer08')}</dt>
                          <dd>{t('customer0801')}</dd>
                        </div>
                        <div>
                          <dt>{t('customer09')}</dt>
                          <dd>{t('customer0901')}</dd>
                        </div>
                        <div>
                          <dt>{t('customer10')}</dt>
                          <dd>{t('customer1001')}</dd>
                        </div>
                        <div>
                          <dt>{t('customer11')}</dt>
                          <dd>{t('customer1101')}</dd>
                        </div>
                        <div>
                          <dt>{t('customer12')}</dt>
                          <dd>{t('customer1201')}</dd>
                        </div>
                        <div>
                          <dt>{t('customer13')}</dt>
                          <dd>{t('customer1301')}</dd>
                        </div>
                        <div>
                          <dt>{t('customer14')}</dt>
                          <dd>{t('customer1401')}</dd>
                        </div>
                        <div>
                          <dt>{t('customer15')}</dt>
                          <dd>{t('customer1501')}</dd>
                        </div>
                        <div>
                          <dt>{t('customer16')}</dt>
                          <dd>{t('customer1601')}</dd>
                        </div>
                      </dl>
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('customerTitle03')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      <dl>
                        <dt>{t('customer17')}</dt>
                        <dd>{t('customer1701')}</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>{t('customer18')}</dt>
                        <dd>{t('customer1801')}</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>{t('customer19')}</dt>
                        <dd>{t('customer1901')}</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>{t('customer20')}</dt>
                        <dd>{t('customer2001')}</dd>
                      </dl>
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('customerTitle04')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      {t('customer21')}
                      <dl>
                        <div>
                          <dt>{t('customer22')}</dt>
                          <dd>{t('customer2201')}</dd>
                        </div>
                        <div>
                          <dt>{t('customer23')}</dt>
                          <dd>{t('customer2301')}</dd>
                        </div>
                        <div>
                          <dt>{t('customer24')}</dt>
                          <dd>{t('customer2401')}</dd>
                        </div>
                        <div>
                          <dt>{t('customer25')}</dt>
                          <dd>{t('customer2501')}</dd>
                        </div>
                        <div>
                          <dt>{t('customer26')}</dt>
                          <dd>{t('customer2601')}</dd>
                        </div>
                        <div>
                          <dt>{t('customer27')}</dt>
                          <dd>{t('customer2701')}</dd>
                        </div>
                      </dl>
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('customerTitle05')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      <Trans i18nKey="customer28" />
                      <table>
                        <thead>
                          <tr>
                            <th>{t('table01')}</th>
                            <th>{t('table02')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{t('table03')}</td>
                            <td>{t('table04')}</td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li>
                      <Trans i18nKey="customer29" />
                      <table>
                        <thead>
                          <tr>
                            <th>{t('table05')}</th>
                            <th>{t('table06')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{t('table07')}</td>
                            <td>{t('table08')}</td>
                          </tr>
                          <tr>
                            <td>{t('table09')}</td>
                            <td>{t('table10')}</td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li>
                      <Trans i18nKey="customer30" />
                      <table>
                        <thead>
                          <tr>
                            <th>{t('table11')}</th>
                            <th>{t('table12')}</th>
                            <th>{t('table13')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{t('table14')}</td>
                            <td>{t('table15')}</td>
                            <td>{t('table16')}</td>
                          </tr>
                          <tr>
                            <td>{t('table17')}</td>
                            <td>{t('table18')}</td>
                            <td>{t('table19')}</td>
                          </tr>
                          <tr>
                            <td>{t('table20')}</td>
                            <td>{t('table21')}</td>
                            <td>{t('table22')}</td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li>
                      <Trans i18nKey="customer31" />

                      <table>
                        <thead>
                          <tr>
                            <th>{t('table23')}</th>
                            <th>{t('table24')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{t('table25')}</td>
                            <td>{t('table26')}</td>
                          </tr>
                          <tr>
                            <td>{t('table27')}</td>
                            <td>{t('table28')}</td>
                          </tr>
                          <tr>
                            <td>{t('table29')}</td>
                            <td>{t('table30')}</td>
                          </tr>
                          <tr>
                            <td>{t('table31')}</td>
                            <td>{t('table32')}G</td>
                          </tr>
                          <tr>
                            <td>{t('table33')}</td>
                            <td>{t('table34')}</td>
                          </tr>
                          <tr>
                            <td>{t('table35')}</td>
                            <td>{t('table36')}</td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li>
                      <Trans i18nKey="customer32" />

                      <table>
                        <thead>
                          <tr>
                            <th>{t('table37')}</th>
                            <th>{t('table38')}</th>
                            <th>{t('table39')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{t('table40')}</td>
                            <td>{t('table41')}</td>
                            <td>{t('table42')}</td>
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
                <h2 className={S.subtitle}>{t('customerTitle06')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      {t('customer33')}
                      <ul>
                        <li>{t('customer34')}</li>
                        <li>{t('customer35')}</li>
                        <li>{t('customer36')}</li>
                        <li>{t('customer37')}</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('customerTitle07')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>{t('customer38')}</li>
                    <li>
                      {t('customer39')}

                      <dl>
                        <div>
                          <dt>{t('customer40')}</dt>
                          <dd>{t('customer4001')}</dd>
                        </div>
                        <div>
                          <dt>{t('customer41')}</dt>
                          <dd>{t('customer4101')}</dd>
                        </div>
                        <div>
                          <dt>{t('customer42')}</dt>
                          <dd>{t('customer4201')}</dd>
                        </div>
                      </dl>
                    </li>
                    <li>
                      <Trans
                        i18nKey="customer43"
                        components={{ 1: <Anchor int="/" target="_blank" /> }}
                      />
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('customerTitle08')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>{t('customer44')}</li>
                    <li>{t('customer45')}</li>
                    <li>{t('customer46')}</li>
                    <li>{t('customer47')}</li>
                    <li>
                      <Trans
                        i18nKey="customer48"
                        components={{ 1: <Anchor ext="info@moneyexpresscrypto.ee" email /> }}
                      />
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('customerTitle09')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>{t('customer49')}</li>
                    <li>{t('customer50')}</li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('customerTitle10')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>{t('customer51')}</li>
                    <li>{t('customer52')}</li>
                    <li>{t('customer53')}</li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('customerTitle11')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      {t('customer54')}

                      <ul>
                        <li>{t('customer55')}</li>
                        <li>
                          <Trans
                            i18nKey="customer56"
                            components={{ 1: <Anchor int="/" target="_blank" /> }}
                          />
                        </li>
                        <li>{t('customer57')}</li>
                        <li>{t('customer58')}</li>
                        <li>{t('customer59')}</li>
                        <li>{t('customer60')}</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('customerTitle12')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>{t('customer61')}</li>
                    <li>
                      {t('customer62')}

                      <ul>
                        <li>{t('customer63')}</li>
                        <li>{t('customer64')}</li>
                        <li>{t('customer65')}</li>
                      </ul>
                    </li>
                    <li>{t('customer66')}</li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('customerTitle13')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      <Trans
                        i18nKey="customer67"
                        components={{ 1: <Anchor ext="info@moneyexpresscrypto.ee" email /> }}
                      />
                    </li>
                    <li>{t('customer68')}</li>
                    <li>
                      {t('customer69')}
                      <ul>
                        <li>{t('customer70')}</li>
                        <li>{t('customer71')}</li>
                        <li>{t('customer72')}</li>
                      </ul>
                    </li>
                    <li>{t('customer73')}</li>
                    <li>
                      {t('customer74')}
                      <ul>
                        <li>{t('customer75')}</li>
                        <li>{t('customer76')}</li>
                        <li>{t('customer77')}</li>
                        <li>{t('customer78')}</li>
                      </ul>
                    </li>
                    <li>{t('customer79')}</li>
                    <li>{t('customer80')}</li>
                    <li>{t('customer81')}</li>
                    <li>{t('customer82')}</li>
                    <li>
                      <Trans
                        i18nKey="customer83"
                        components={{
                          1: <Anchor ext="https://www.aki.ee/" />,
                          3: <Anchor ext="+37256202341" phone />,
                          5: <Anchor ext="+3726274135" phone />,
                          7: <Anchor ext="info@aki.ee" email />
                        }}
                      />
                    </li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('customerTitle14')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      {t('customer84')}

                      <ul>
                        <li>{t('customer85')}</li>
                        <li>{t('customer86')}</li>
                        <li>{t('customer87')}</li>
                        <li>{t('customer88')}</li>
                      </ul>
                    </li>
                    <li>
                      {t('customer89')}

                      <ul>
                        <li>{t('customer90')}</li>
                        <li>{t('customer91')}</li>
                        <li>{t('customer92')}</li>
                      </ul>
                    </li>
                    <li>
                      {t('customer93')}

                      <ul>
                        <li>{t('customer94')}</li>
                        <li>{t('customer95')}</li>
                        <li>{t('customer96')}</li>
                        <li>{t('customer97')}</li>
                        <li>{t('customer98')}</li>
                      </ul>
                    </li>
                    <li>{t('customer99')}</li>
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
