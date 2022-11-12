import React from 'react';
import CheckBox from '../../components/CheckBox/CheckBox';
import Location from '../../components/Location/Location';
import Layout from '../../components/Layout/Layout';
import styles from './MainPage.module.scss';
import firstBonfirePng from '../../images/achievement icons/ember_first.png';
import emberSecond from '../../images/achievement icons/ember_second.png';
import judexGundir from '../../images/achievement icons/judex_gundir.png';
import lazurPut from '../../images/achievement icons/lazur_put.png';
import vordt from '../../images/achievement icons/vordt.png';
import sunCovenant from '../../images/achievement icons/sun_covenant.png';
import maroders from '../../images/achievement icons/maroders.png';
import curseRottedTree from '../../images/achievement icons/curse_rotted_tree.png';
import blueGuards from '../../images/achievement icons/blue_guards.png';
import cristalSage from '../../images/achievement icons/cristal_sage.png';
import deacons from '../../images/achievement icons/deacons_of_deep.png';
import rozaria from '../../images/achievement icons/rozaria.png';

const MainPage = () => {
  return (
    <Layout className={styles.mainPage}>
      <h1>Платина Dark Souls 3</h1>

      <div className={styles.entry}>
        Добро пожаловать на самый подробный гайд о том, как получить платину в
        Dark Souls 3. Шаг за шагом, локация за локацией, мы будем получать
        нужные нам предметы, встречать разных НПС и к концу НГ++ вы будете
        обладателем достижения "Темная душа". Данное руководство рассчитано на
        тех, кто уже знаком с игрой, поэтому я не буду объяснять как попасть в
        ту или другую локацию, или где находится тот или иной персонаж. Ну,
        начнем...
      </div>

      <Location
        title={'Кладбище пепла'}
        chapterName={'new_game'}
        locationName={'graveyard_of_ashes'}
      >
        <p>
          Итак, вы очнулись в своей могиле. Идем вперед и садимся около первого
          костра. Получаем{' '}
          <CheckBox
            id={0}
            chapter={'new_game'}
            location={'graveyard_of_ashes'}
            text={'жест "Отдых"'}
          />{' '}
          и достижение{' '}
          <CheckBox
            id={1}
            chapter={'new_game'}
            location={'graveyard_of_ashes'}
            text={'"Зажечь костер"'}
          />{' '}
        </p>

        <p>
          <img src={firstBonfirePng} />
        </p>

        <p>
          Дальше убиваем судью Гундира и получаем еще 2 достижения:{' '}
          <CheckBox
            id={2}
            chapter={'new_game'}
            location={'graveyard_of_ashes'}
            text={'"Судия Гундир"'}
          />{' '}
          и{' '}
          <CheckBox
            id={3}
            chapter={'new_game'}
            location={'graveyard_of_ashes'}
            text={'"Признать пламя"'}
          />
          .
        </p>

        <p>
          <img src={emberSecond} />
        </p>

        <p>
          <img src={judexGundir} />
        </p>

        <p>
          Бежим в Храм огня, говорим с Андре (получаем{' '}
          <CheckBox
            id={4}
            chapter={'new_game'}
            location={'graveyard_of_ashes'}
            text={'жест"Ура!"'}
          />{' '}
          ), с Хоквудом (получаем{' '}
          <CheckBox
            id={5}
            chapter={'new_game'}
            location={'graveyard_of_ashes'}
            text={'жест "Рухнуть"'}
          />
          ) и активируем костер. Также сейчас можно купить у служанки при храме{' '}
          <CheckBox
            id={6}
            chapter={'new_game'}
            location={'graveyard_of_ashes'}
            text={'чудо "Помощь в лечении"'}
          />
          , но можно это сделать и позже. Перемещаемся на Высокую стену Лотрика.
        </p>
      </Location>

      <Location
        title={'Высокая стена Лотрика'}
        chapterName={'new_game'}
        locationName={'high_wall_of_lothric'}
      >
        <p>
          В этой локации подбираем{' '}
          <CheckBox
            id={0}
            chapter={'new_game'}
            location={'high_wall_of_lothric'}
            text={'осколок Эстуса'}
          />{' '}
          и{' '}
          <CheckBox
            id={1}
            chapter={'new_game'}
            location={'high_wall_of_lothric'}
            text={'Кольцо Жертвенности'}
          />
          . Освобождаем{' '}
          <CheckBox
            id={2}
            chapter={'new_game'}
            location={'high_wall_of_lothric'}
            text={'Серокрыса'}
          />{' '}
          , говорим с ним и получаем от него{' '}
          <CheckBox
            id={3}
            chapter={'new_game'}
            location={'high_wall_of_lothric'}
            text={'Кольцо с синим слезным камнем'}
          />
          . Говорим с Эммой, получаем достижение{' '}
          <CheckBox
            id={4}
            chapter={'new_game'}
            location={'high_wall_of_lothric'}
            text={'"Ковенант: Лазурный путь"'}
          />
          .
        </p>

        <p>
          <img src={lazurPut} />
        </p>

        <p>
          Далее убиваем босса локации{' '}
          <CheckBox
            id={5}
            chapter={'new_game'}
            location={'high_wall_of_lothric'}
            text={'Вордта из Холодной долины'}
          />{' '}
          и получаем за это достижение{' '}
          <CheckBox
            id={6}
            chapter={'new_game'}
            location={'high_wall_of_lothric'}
            text={'"Вордт из Холодной долины"'}
          />
          .
        </p>

        <p>
          <img src={vordt} />
        </p>

        <p>
          Перемещаемся обратно в Храм Огня и{' '}
          <CheckBox
            id={7}
            chapter={'new_game'}
            location={'high_wall_of_lothric'}
            text={'прокачиваем флягу с Эстусом'}
          />
          . Разговариваем с Леонхардом и получаем от него{' '}
          <CheckBox
            id={8}
            chapter={'new_game'}
            location={'high_wall_of_lothric'}
            text={'5 треснувших красных очей'}
          />
          . Используем из них как минимум одно. Далее нам надо в Поселение
          Нежити.
        </p>
      </Location>

      <Location
        title={'Поселение нежити'}
        chapterName={'new_game'}
        locationName={'undead_settlement'}
      >
        <p>В этой локации нам надо собрать много предметов. Итак:</p>

        <ol>
          <li>
            <CheckBox
              id={0}
              chapter={'new_game'}
              location={'undead_settlement'}
              text={'Кольцо с зеленоцветом'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={1}
              chapter={'new_game'}
              location={'undead_settlement'}
              text={'Кольцо кровавого укуса'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={2}
              chapter={'new_game'}
              location={'undead_settlement'}
              text={'Кольцо с огненным камнем'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={3}
              chapter={'new_game'}
              location={'undead_settlement'}
              text={'Кольцо Флинна'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={4}
              chapter={'new_game'}
              location={'undead_settlement'}
              text={'Кольцо власти над огнем'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={5}
              chapter={'new_game'}
              location={'undead_settlement'}
              text={'Осколок Эстуса'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={6}
              chapter={'new_game'}
              location={'undead_settlement'}
              text={'Горящий осколок кости'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={7}
              chapter={'new_game'}
              location={'undead_settlement'}
              text={'Кость Лоретты - для Серокрыса'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={8}
              chapter={'new_game'}
              location={'undead_settlement'}
              text={'Пепел гробовщика - для служанки'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={9}
              chapter={'new_game'}
              location={'undead_settlement'}
              text={'Бледный язык - для Леонхарда'}
            />
            .
          </li>
        </ol>

        <p>
          В одном из домов подбираем знак Воинов Солнца и получаем достижение
          <CheckBox
            id={10}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'"Ковенант: Воины Солнца"'}
          />
          . \о/
        </p>

        <p>
          <img src={sunCovenant} />
        </p>

        <p>
          Находим{' '}
          <CheckBox
            id={11}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'пилигрима Йоэля'}
          />{' '}
          и зовем его к себе в услужение. Освобождаем из клетки{' '}
          <CheckBox
            id={12}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'пироманта Корникса'}
          />
          . Встречаемся с{' '}
          <CheckBox
            id={13}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'Сигвардом из Катарины'}
          />
          , помогаем ему решить загадку с лифтом и вместе с ним убиваем
          огненного демона. После этого говорим с ним несколько раз и получаем
          жесты{' '}
          <CheckBox
            id={14}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'"Тост"'}
          />{' '}
          и{' '}
          <CheckBox
            id={15}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'"Сон"'}
          />
          . С помощью моба с клеткой на спине попадаем в яму под Проклятым
          Великим древом и вступаем в ковенант Мародеров. За это получаем
          достижение{' '}
          <CheckBox
            id={16}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'"Ковенант: Мародеры"'}
          />
          .
        </p>

        <p>
          <img src={maroders} />
        </p>

        <p>
          Убиваем Проклятое Великое древо и получаем достижение{' '}
          <CheckBox
            id={17}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'"Проклятое Великое древо"'}
          />
          .
        </p>

        <p>
          <img src={curseRottedTree} />
        </p>

        <p>
          Перемещаемся в Храм Огня.{' '}
          <CheckBox
            id={18}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'Прокачиваем флягу с Эстусом'}
          />{' '}
          и{' '}
          <CheckBox
            id={19}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'костер Храма'}
          />
          . Говорим с Серокрысом, отдаем ему кость Лоретты и получаем{' '}
          <CheckBox
            id={20}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'жест "Свернуться"'}
          />{' '}
          (если жест сразу не появился, телепортируйтесь в другую локацию, потом
          вернитесь к Серокрысу и поговорите с ним снова). Говорим с Леонхардом,
          получаем ключ от темницы темного духа. Перемещаемся на Высокую стену
          Лотрика, убиваем темного духа, забираем{' '}
          <CheckBox
            id={21}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'Красное око'}
          />
          . Опять переходим в Храм огня. Снова говорим с Леонхардом и получаем{' '}
          <CheckBox
            id={22}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'жест "Аплодисменты"'}
          />
          .
        </p>

        <p>
          Разговариваем с Йоэлем и получаем{' '}
          <CheckBox
            id={23}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'жест "Призвать"'}
          />
          . Прокачиваться у него пока не надо, мы сделаем это немного позже.
        </p>

        <p>
          Отдаем служанке пепел гробовщика и покупаем у нее{' '}
          <CheckBox
            id={24}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'Ключ от Башни'}
          />{' '}
          и{' '}
          <CheckBox
            id={25}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'Могильный ключ'}
          />
          . Первым ключом открываем башню за Храмом Огня и забираем там{' '}
          <CheckBox
            id={26}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'Кольцо Эстуса'}
          />
          . Поднимаемся на крышу Храма, забираем{' '}
          <CheckBox
            id={27}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'"Осколок Эстуса"'}
          />
          , отдаем птенцам косточку возвращения, получаем{' '}
          <CheckBox
            id={28}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'жест "Позвать"'}
          />
          . Также забираем за иллюзорной стеной{' '}
          <CheckBox
            id={29}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'Серебряное кольцо жадного змея'}
          />
          .{' '}
          <CheckBox
            id={30}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'Еще раз прокачиваем флягу с Эстусом'}
          />
          . Перемещаемся в Поселение Нежити. Открываем Могильным ключом дверь в
          канализацию, проходим через нее и освобождаем Ирину из Карима.
          Получаем{' '}
          <CheckBox
            id={31}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'жест "Мольба"'}
          />
          . Идем обратно в Храм Огня, говорим с Ириной и покупаем у нее{' '}
          <CheckBox
            id={32}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'Кольцо Святого'}
          />{' '}
          и чудеса{' '}
          <CheckBox
            id={33}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'"Лечение"'}
          />
          ,{' '}
          <CheckBox
            id={34}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'"Восполнение"'}
          />
          ,{' '}
          <CheckBox
            id={35}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'"Утешительные слезы"'}
          />{' '}
          и{' '}
          <CheckBox
            id={36}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'"Возвращение"'}
          />
          . Отдаем Лудлету транспозиционную печь и меняем душу Вордта на{' '}
          <CheckBox
            id={37}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'Левый глаз понтифика'}
          />
          . Говорим с Корниксом, получаем{' '}
          <CheckBox
            id={38}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'жест "Добро пожаловать"'}
          />{' '}
          (может дать не с первого раза, лечится перемещением в другую локацию и
          потом обратно в Храм Огня) и скупаем у него пиромантию:{' '}
          <CheckBox
            id={39}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'"Огненный шар"'}
          />
          ,{' '}
          <CheckBox
            id={40}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'"Огненная струя"'}
          />
          ,{' '}
          <CheckBox
            id={41}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'"Мощный поджог"'}
          />{' '}
          и{' '}
          <CheckBox
            id={42}
            chapter={'new_game'}
            location={'undead_settlement'}
            text={'"Мгновенный пот"'}
          />
        </p>

        <p>Далее наш ждет локация Путь жертв.</p>
      </Location>

      <Location
        title={'Путь жертв'}
        chapterName={'new_game'}
        locationName={'path_of_sacrifices'}
      >
        <p>Находим в этой локации:</p>

        <ol>
          <li>
            <CheckBox
              id={0}
              chapter={'new_game'}
              location={'path_of_sacrifices'}
              text={'Кольцо Морна'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={1}
              chapter={'new_game'}
              location={'path_of_sacrifices'}
              text={'Кольцо мудреца'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={2}
              chapter={'new_game'}
              location={'path_of_sacrifices'}
              text={'Кольцо Великой топи'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={3}
              chapter={'new_game'}
              location={'path_of_sacrifices'}
              text={'Осколок Эстуса'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={4}
              chapter={'new_game'}
              location={'path_of_sacrifices'}
              text={'Священный фолиант из Карима - для Ирины'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={5}
              chapter={'new_game'}
              location={'path_of_sacrifices'}
              text={'Книга о пиромантии Великой топи - для Корникса'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={6}
              chapter={'new_game'}
              location={'path_of_sacrifices'}
              text={'Уголь Фаррона - для Андрэ'}
            />
            .
          </li>
        </ol>

        <p>
          Встречаем Анри, разговариваем с ней и с ее спутником Горацием и
          получаем достижение{' '}
          <CheckBox
            id={7}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Ковенант: Синие Стражи"'}
          />
        </p>

        <p>
          <img src={blueGuards} />
        </p>

        <p>
          <CheckBox
            id={8}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'Находим Орбека из Виндхейма и набиваемся к нему в ученики'}
          />{' '}
          (примет в ученики только если у вас будет не меньше 10 интеллекта).
        </p>

        <p>
          И напоследок убиваем босса локации - Знатока кристальных чар
          (достижение{' '}
          <CheckBox
            id={9}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Знаток кристальных чар"'}
          />
          ).
        </p>

        <p>
          <img src={cristalSage} />
        </p>

        <p>
          Перемещаемся в Храм Огня.{' '}
          <CheckBox
            id={10}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'Разговариваем с Сиррис из Бессолнечных земель.'}
          />
          .{' '}
          <CheckBox
            id={11}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'Прокачиваем флягу с Эстусом'}
          />{' '}
          у Андрэ и{' '}
          <CheckBox
            id={12}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'отдаем ему уголь Фаррона'}
          />
          . Отдаем Ирине фолиант, покупаем у нее чудеса{' '}
          <CheckBox
            id={13}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Среднее лечение"'}
          />
          ,{' '}
          <CheckBox
            id={14}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Слезы отрицания"'}
          />{' '}
          и{' '}
          <CheckBox
            id={15}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Сила"'}
          />
          .
        </p>

        <p>
          <CheckBox
            id={16}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'Отдаем Корниксу книгу'}
          />{' '}
          и скупаем у него пиромантию{' '}
          <CheckBox
            id={17}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Огненная сфера"'}
          />
          ,{' '}
          <CheckBox
            id={18}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Разрывной огненный шар"'}
          />
          ,{' '}
          <CheckBox
            id={19}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Отравляющий туман"'}
          />{' '}
          и{' '}
          <CheckBox
            id={20}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Обильный пот"'}
          />
          . Покупаем у Орбека заклинания{' '}
          <CheckBox
            id={21}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Стрела души"'}
          />
          ,{' '}
          <CheckBox
            id={22}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Большая стрела души"'}
          />
          ,{' '}
          <CheckBox
            id={23}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Тяжелая стрела души"'}
          />
          ,{' '}
          <CheckBox
            id={24}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Большая тяжелая стрела души"'}
          />
          ,{' '}
          <CheckBox
            id={25}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Дротик Фаррона"'}
          />
          ,{' '}
          <CheckBox
            id={26}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Двуручный меч душ"'}
          />
          ,{' '}
          <CheckBox
            id={27}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'Быстрый меч Фаррона"'}
          />
          ,{' '}
          <CheckBox
            id={28}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Волшебное оружие"'}
          />
          ,{' '}
          <CheckBox
            id={29}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Волшебный щит"'}
          />
          ,{' '}
          <CheckBox
            id={30}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Шпион"'}
          />{' '}
          и{' '}
          <CheckBox
            id={31}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Звуковая ловушка"'}
          />
        </p>

        <p>
          Меняем душу Знатока кристальных чар на заклинание{' '}
          <CheckBox
            id={32}
            chapter={'new_game'}
            location={'path_of_sacrifices'}
            text={'"Град кристаллов"'}
          />
          . Далее наш путь лежит в Храм Глубин.
        </p>
      </Location>

      <Location
        title={'Храм глубин'}
        chapterName={'new_game'}
        locationName={'cathedral_of_the_deep'}
      >
        <p>В этой локации надо собрать:</p>

        <ol>
          <li>
            <CheckBox
              id={0}
              chapter={'new_game'}
              location={'cathedral_of_the_deep'}
              text={'Кольцо ядовитого укуса'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={1}
              chapter={'new_game'}
              location={'cathedral_of_the_deep'}
              text={'Кольцо глубин'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={2}
              chapter={'new_game'}
              location={'cathedral_of_the_deep'}
              text={'Кольцо меча Ллойда'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={3}
              chapter={'new_game'}
              location={'cathedral_of_the_deep'}
              text={'Сапфир Олдрика'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={4}
              chapter={'new_game'}
              location={'cathedral_of_the_deep'}
              text={'Осколок Эстуса'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={5}
              chapter={'new_game'}
              location={'cathedral_of_the_deep'}
              text={'Горящий осколок кости'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={6}
              chapter={'new_game'}
              location={'cathedral_of_the_deep'}
              text={'Глубинный священный фолиант'}
            />{' '}
            - можно будет отдать Ирине, но тогда цепочка ее квеста плачевно
            закончится. Я этого делать не буду.
          </li>

          <li>
            <CheckBox
              id={7}
              chapter={'new_game'}
              location={'cathedral_of_the_deep'}
              text={'Чудо "Найти указания"'}
            />
            .
          </li>

          <li>
            <CheckBox
              id={8}
              chapter={'new_game'}
              location={'cathedral_of_the_deep'}
              text={'Пепел паладина - для служанки'}
            />
            .
          </li>
        </ol>

        <p>
          Убиваем Дьяконов Глубин, получаем за это достижение{' '}
          <CheckBox
            id={9}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'"Дьяконы Глубин"'}
          />
          .
        </p>

        <p>
          <img src={deacons} />
        </p>

        <p>
          Находим Розарию и ее ковенант, получаем достижение{' '}
          <CheckBox
            id={10}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'"Ковенант: Пальцы Розарии"'}
          />
        </p>

        <p>
          <img src={rozaria} />
        </p>

        <div className={styles.important}>
          НИ В КОЕМ СЛУЧАЕ НЕ ОДЕВАЕМ ЗНАК КОВЕНАНТА РОЗАРИИ И НЕ ОТДАЕМ ЕЙ
          БЛЕДНЫЕ ЯЗЫКИ!!!!! ИНАЧЕ ЗАФЕЙЛИТСЯ КВЕСТ СИРРИС И МЫ НЕ ПОЛУЧИМ
          КОЛЬЦО И ЖЕСТ!!!!!
        </div>

        <p>
          Переносимся в Храм Огня.{' '}
          <CheckBox
            id={11}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'Прокачиваем костер'}
          />{' '}
          и{' '}
          <CheckBox
            id={12}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'флягу с Эстусом'}
          />
          .
        </p>

        <p>
          <CheckBox
            id={13}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'Разговариваем с Анри и Горацием'}
          />
          .
        </p>

        <p>
          <CheckBox
            id={14}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={
              'Если еще не встретили Лоскутика в Храме Глубин, то встречаем его здесь'
            }
          />{' '}
          (в башне за храмом, а потом на верхнем этаже храма Огня). Отказываем
          ему в прощении и получаем жест{' '}
          <CheckBox
            id={15}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'"Упасть ниц"'}
          />
          . Телепортируемся в другую локацию, а потом обратно. Снова идем к
          Лоскутику, получаем жест{' '}
          <CheckBox
            id={16}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'"Присесть на корточки"'}
          />
          . Покупаем у него{' '}
          <CheckBox
            id={17}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'Кольцо с копытом'}
          />{' '}
          и{' '}
          <CheckBox
            id={18}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={
              'весь сет Катарины (щит и копье покупать не надо(ну если только для себя...))'
            }
          />
          .
        </p>

        <p>
          Идем обратно в Храм Глубин,{' '}
          <CheckBox
            id={19}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'находим упавшего в колодец Сигварда'}
          />{' '}
          и{' '}
          <CheckBox
            id={20}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'скидываем ему его броню'}
          />
          . Получаем жест{' '}
          <CheckBox
            id={21}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'"Одобрение"'}
          />
          .
        </p>

        <p>
          <CheckBox
            id={22}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'Отдаем пепел служанке'}
          />{' '}
          при храме и покупаем у нее{' '}
          <CheckBox
            id={23}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'Кольцо щита Ллойда'}
          />
          . Меняем у Лудлета душу Дьяконов Глубин на{' '}
          <CheckBox
            id={24}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'заклинание "Глубинная душа"'}
          />
          . Настало время{' '}
          <CheckBox
            id={25}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'прокачать 5 уровней у Йоэля'}
          />
          . Когда он умрет,{' '}
          <CheckBox
            id={26}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'говорим с Юрией'}
          />{' '}
          и получаем{' '}
          <CheckBox
            id={27}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'жест "Благородный поклон"'}
          />
          . Покупаем у нее{' '}
          <CheckBox
            id={28}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'Темное кольцо лжи'}
          />{' '}
          и{' '}
          <CheckBox
            id={29}
            chapter={'new_game'}
            location={'cathedral_of_the_deep'}
            text={'Белое кольцо лжи'}
          />
          . Далее нас ждет Цитадель Фаррона.
        </p>
      </Location>
    </Layout>
  );
};

export default MainPage;
