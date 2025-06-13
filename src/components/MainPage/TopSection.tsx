/* eslint-disable import/extensions */
/* eslint-disable max-len */
import clsx from 'clsx';

import {
  IconDinner, IconPin, IconRings, IconStar,
} from '@/assets/icons';
import photo1 from '@/assets/photo1.jpeg';
import photo4 from '@/assets/photo4.jpeg';
import photo5 from '@/assets/photo5.jpeg';

import styles from './TopSection.module.scss';

export const TopSection = () => (
  <>
    <section
      className={styles.mainSection}
    >
      <div className={styles.textBlock}>
        <h1 className={styles.mainHeader}>
          Дорогие
          гости!
        </h1>

        <div className={styles.textContainer}>
          <div
            className={styles.textWrapper}
          >
            <p className={clsx(styles.text, styles.topText)}>Спешим сообщить радостную новость — мы женимся!</p>

            <p className={clsx(styles.text, styles.topText)}>Приглашаем вас на торжество, посвященное нашему бракосочетанию.</p>
          </div>

          <div>
            <h1 className={styles.mainHeader}>
              Павел и Полина
            </h1>

            <div
              className={styles.date}
            >
              <span
                className={styles.dateSpan}

              >
                08.08.2025
                <IconStar className={styles.dateIcon} />

              </span>

            </div>
          </div>
        </div>

        <div />
      </div>

      <div className={styles.image}>
        <img src={photo1} alt="" className={styles.firstImage} />

        <IconStar className={styles.imageIcon} />
      </div>
    </section>

    <section className={styles.secondSection}>
      <h1
        className={clsx(styles.mainHeader, styles.secondHeader)}
      >
        Будем рады видеть вас
        8 августа 2025 года
      </h1>

      <div className={styles.properties}>
        <div className={styles.timesAndAdress}>
          <div
            style={{
              marginBottom: '36px',
            }}
          >
            <div className={styles.time}>
              <IconStar className={styles.timeIcon} />

              <div className={styles.firstTime}>
                <span className={styles.timeNumber}>15:30</span>

                <span className={styles.text}>сбор гостей</span>
              </div>

              <div className={styles.lastTime}>
                <span className={styles.timeNumber}>16:00</span>

                <span className={styles.text}>церемония</span>
              </div>
            </div>

            <div className={styles.address}>
              <span className={styles.text}>
                <b>Адрес:</b>

                {' '}
                Город Иркутск, база отдыха &quot;Картакой&quot;
              </span>
            </div>
          </div>

          <button
            className={styles.button}
            onClick={() => window.open('https://go.2gis.com/0VPFX', '_blank')}
            type="button"
          >
            Посмотреть на карте
          </button>
        </div>

        <div className={styles.littleRequest}>
          <IconStar className={styles.requestIcon} />

          <h3 className={clsx(styles.text, styles.littleRequestHeader)}>Небольшая просьба</h3>

          <p className={styles.text}>Приятным комплиментом для нас вместо цветов будет бутылочка вашего любимого вина, которую мы откроем на ближайшем совместном празднике.</p>
        </div>
      </div>

    </section>

    <section className={styles.secondSection}>
      <h1 className={clsx(styles.mainHeader, styles.secondHeader)}>
        План вечера
      </h1>

      <div className={styles.evenigPlanWrapper}>
        <div className={styles.events}>
          <div className={styles.event}>
            <div className={styles.iconWrapper}>
              <IconStar className={styles.eventStar} />

              <IconPin className={styles.eventIcon} />
            </div>

            <div className={clsx(styles.firstTime, styles.eventTime)}>
              <span className={styles.timeNumber}>15:30</span>

              <span className={styles.text}>сбор гостей, фуршет</span>
            </div>
          </div>

          <div className={styles.event}>
            <div className={styles.iconWrapper}>
              <IconStar className={styles.eventStar} />

              <IconRings className={styles.eventIcon} />
            </div>

            <div className={clsx(styles.firstTime, styles.eventTime)}>
              <span className={styles.timeNumber}>16:00</span>

              <span className={styles.text}>церемония</span>
            </div>
          </div>

          <div className={styles.event}>
            <div className={clsx(styles.iconWrapper, styles.isLast)}>

              <IconDinner className={styles.eventIcon} />
            </div>

            <div className={clsx(styles.firstTime, styles.eventTime)}>
              <span className={styles.timeNumber}>17:00</span>

              <span className={styles.text}>
                начало
                свадебного
                ужина
              </span>
            </div>
          </div>
        </div>

        <div className={styles.image}>
          <img src={photo4} alt="" className={styles.firstImage} />

        </div>
      </div>
    </section>

    <section className={styles.secondSection}>
      <h1 className={clsx(styles.mainHeader, styles.secondHeader)}>
        Дресс-код
      </h1>

      <div className={styles.backTie}>
        <div className={styles.backTieText}>
          <h3 className={clsx(styles.text, styles.littleRequestHeader, styles.alignCenter)}>Мужчин просим придерживаться классического стиля в одежде (белый верх, черный низ)</h3>

          <p
            className={clsx(styles.text, styles.alignCenter)}
          >
            Мы будем признательны, если в выборе нарядов вы придержитесь дресс-кода.
          </p>
        </div>

        <div className={styles.backTieColors}>
          <div className={clsx(styles.circleColor, styles.darkGreen)} />

          <div className={clsx(styles.circleColor, styles.lightGreen)} />

          <div className={clsx(styles.circleColor, styles.skin)} />

          <div className={clsx(styles.circleColor, styles.pink)} />
        </div>
      </div>

      <div className={styles.backTieOptions}>
        <div className={styles.littleRequest}>
          <IconStar className={styles.requestIcon} />

          <p className={styles.text}>
            На территории мероприятия доступны номера для проживания гостей. Если вы захотите остаться на ночь, пожалуйста, сообщите об этом заранее.
          </p>
        </div>

        <div className={styles.littleRequest}>
          <IconStar className={styles.requestIcon} />

          <p className={styles.text}>
            По приезде на территорию мероприятия вас встретит
            наш свадебный организатор
            и проводит к месту, где будет проходить торжество.
          </p>
        </div>
      </div>

      <p
        className={clsx(styles.text, styles.alignCenter)}
      >
        <b>*</b>

        {' '}
        Если вы не сможете присутствовать на нашем торжестве, просим сообщить до 10 июля.
      </p>
    </section>

    <section className={clsx(styles.secondSection, styles.footer)}>

      <h1
        className={clsx(styles.footerHeader, styles.mainHeader)}
      >
        Остались вопросы
        или Вы хотите сделать сюрприз?
      </h1>

      <img src={photo5} alt="" className={styles.footerImage} />

      <span
        className={styles.call}
      >
        Свяжитесь с организатором:
      </span>

      <span
        className={styles.number}

      >
        <a
          className={styles.numberLink}
          href="tel:+79025418996"
        >
          8 902 54 189 96 (Полина)
        </a>
      </span>

      <div className={styles.socialLinks}>
        <button
          className={styles.socialButton}
          onClick={() => window.open('https://t.me/+79025418996', '_blank')}
          type="button"
        >
          Telegram
        </button>

        <button
          className={styles.socialButton}
          onClick={() => window.open('https://wa.me/qr/QAAVTYV5CDQIC1', '_blank')}
          type="button"
        >
          WhatsApp
        </button>

        <button
          className={styles.socialButton}
          onClick={() => window.open('https://vk.com/polinagornakova', '_blank')}
          type="button"
        >
          ВКонтакте
        </button>
      </div>

    </section>
  </>
);
