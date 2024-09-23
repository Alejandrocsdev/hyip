// 模組樣式
import S from './style.module.css'
// 圖檔
import bg_webp from '../../assets/img/webp/bg.webp'
import tether_trc20_png from '../../assets/img/element/tether_trc20.png'
import mkm_svg from '../../assets/img/organization/Estonian_Ministry_of_Economic_Affairs_and_Communications.svg'
import binary_svg from '../../assets/img/icon/binary.svg'
import competitive_profit_png from '../../assets/img/element/competitive_profit.png'
import check_mark_svg from '../../assets/img/icon/check_mark.svg'
// 組件
import Calculator from '../../components/Calculator'

// 首頁
function Home() {
  return (
    <>
      <main className={S.main}>
        {/* 第一區: 計算機 */}
        <section className={S.landing} style={{ backgroundImage: `url(${bg_webp})` }}>
          <div className={S.container}>
            <div className={S.content}>
              <h1 className={S.title}>
                Cryptocurrency investment <span>express</span>
              </h1>
              <p className={S.subtitle}>
                Choose your investment amount, start earning profits, and receive your first payment
                by next Monday
              </p>
              <div className={S.coin}>
                <img src={tether_trc20_png} />
                <span>USDT ( TRC-20 )</span>
              </div>
            </div>
            <Calculator />
            <div className={S.mobCoin}>
              <img src={tether_trc20_png} />
              <span>USDT ( TRC-20 )</span>
            </div>
          </div>
        </section>
        {/* 第二區: 如何投資 */}
        <section className={S.how}>
          <div className={S.container}>
            <h2>How to start earning?</h2>
            <ol>
              <li>
                <p className={S.tag}>#1</p>
                <h3 className={S.name}>Sign Up</h3>
                <p className={S.text}>Create an account using invitation code or link</p>
              </li>
              <li>
                <p className={S.tag}>#2</p>
                <h3 className={S.name}>Select a plan</h3>
                <p className={S.text}>
                  Choose Basic for 0.5% or Elite for 1.0% ROI, and deposit in USDT
                </p>
              </li>
              <li>
                <p className={S.tag}>#3</p>
                <h3 className={S.name}>Top up</h3>
                <p className={S.text}>Payments reflect on your dashboard every Monday</p>
              </li>
            </ol>
          </div>
        </section>
        {/* 第三區: 優勢 */}
        <section className={S.advantages}>
          <div className={S.container}>
            <h2>Benefits</h2>
            <ul>
              <li className={S.wide}>
                <div className={S.info}>
                  <h3>Competitive daily profit</h3>
                  <p>
                    We guarantee a fixed daily profit. The more you deposit, the more you top up by
                    next Monday.
                  </p>
                </div>
                <div className={S.profit}>
                  <img src={competitive_profit_png} />
                  <div className={S.greenBar}>
                    <img src={check_mark_svg} />
                    <span>Invest 1,000 USDT or more and enjoy a guaranteed 1% daily return!</span>
                  </div>
                </div>
              </li>
              <li>
                <div className={S.info}>
                  <h3>Reliable partner</h3>
                  <p>
                    MONEY EXPRESS is an international financial company, registered with the
                    Ministry of Economic Affairs and Communications of the Republic of Estonia for
                    currency exchange services since 2016.
                  </p>
                </div>
                <div className={S.eeImg}>
                  <img src={mkm_svg} />
                </div>
              </li>
              <li>
                <div className={S.info}>
                  <h3>Affiliate Program</h3>
                  <p>
                    Earn more with our exclusive Affiliate Program! Unlock bonuses and rewards
                    through referrals and team growth. Full details available after signing up.
                  </p>
                </div>
                <div className={S.binaryImg}>
                  <img src={binary_svg} />
                </div>
              </li>
              <li>
                <div className={S.info}>
                  <h3>Low withdrawal fee</h3>
                  <p>
                    Enjoy a low, fixed withdrawal fee of just 5 USDT—no matter how much you
                    withdraw. The more you withdraw, the lower the fee becomes in proportion to your
                    earnings. Maximize your profits with every transaction!
                  </p>
                </div>
                <div className={S.fee}>
                  <div>5</div>
                  <div>USDT</div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
