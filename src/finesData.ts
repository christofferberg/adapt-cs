import {
  GiPayMoney,
  GiButterflyKnife,
  GiFireSilhouette,
  GiEnrage,
  GiAlarmClock,
  GiPhone,
  GiReceiveMoney,
  GiGingerbreadMan,
  GiShadowFollower,
  GiFruitBowl,
  GiWaterDrop,
  GiShower,
  GiSnakeTongue,
} from 'react-icons/gi'

import { FaTheaterMasks, FaHatWizard, FaSadCry, FaKissWinkHeart } from 'react-icons/fa'

export const finesData = [
  {
    title: 'Ace bøde',
    icon: GiPayMoney,
    desc:
      'Hvis en spiller formår at lave et ACE, må pågældende spiller vælge én på modstanderholdet, som skal betale.',
    price: '20,00 kr',
  },
  {
    title: 'Død ved egen molotov',
    icon: GiFireSilhouette,
    desc: 'Bøden gives hvis en spiller dør i sin egen molotov/incendiary grenade.',
    price: '10,00 kr',
  },
  {
    title: 'Judas bøde',
    icon: FaTheaterMasks,
    desc: 'Bøden gives til pågældende spiller, der dræber en holdkammerat.',
    price: '10,00 kr',
  },
  {
    title: 'Afbud',
    icon: GiShadowFollower,
    desc: 'Afbud senere end 24 timer før.',
    price: '50,00 kr',
  },
  {
    title: 'Knife kill',
    icon: GiButterflyKnife,
    desc: 'Knife kills kr. 10,00 (den knifede betaler).',
    price: '10,00 kr',
  },
  {
    title: 'Rage',
    icon: GiEnrage,
    desc: 'Bøden gives til spilleren der forlader serveren i vrede.',
    price: '100,00 kr',
  },
  {
    title: 'Late',
    icon: GiAlarmClock,
    desc: 'Møde for sent.',
    price: '10,00 kr + minutter',
  },
  {
    title: 'Idiotbøde',
    icon: GiSnakeTongue,
    desc: 'Usportslig/ukammeratlig opførsel.',
    price: '20,00 kr',
  },
  {
    title: 'En Arnaa',
    icon: GiFruitBowl,
    desc: 'Bøden gives til pågældende spiller, der medbringer egen salat.',
    price: '5,00 kr',
  },
  {
    title: 'Mobilos',
    icon: GiPhone,
    desc: 'Mobil ringer (m. lyd) under kamp.',
    price: '20,00 kr',
  },
  {
    title: 'Kyssebøde',
    icon: FaKissWinkHeart,
    desc: 'Kysse iført spilledragten.',
    price: '20,00 kr',
  },
  { title: 'Tisseflute', icon: GiShower, desc: 'En spiller tisser i badet.', price: '30,00 kr' },
  {
    title: 'Ynkelighedsbøde',
    icon: FaSadCry,
    desc: 'Ynkelighedsbøde.',
    price: '10,00 kr',
  },
  { title: 'Kurvandsbøde', icon: GiWaterDrop, desc: 'Bestille kurvand.', price: '5,00 kr' },
  {
    title: 'Noob-bøde',
    icon: GiGingerbreadMan,
    desc: 'Nul kills i en halvleg.',
    price: '1,00 kr',
  },
  {
    title: 'Fattigmandsbøde',
    icon: GiReceiveMoney,
    desc: 'Udeblivende betaling af bøde.',
    price: '5,00 kr pr. dag',
  },
  {
    title: 'Aage bøde',
    icon: FaHatWizard,
    desc: 'Bøden gives til pågældende spiller, der præstere at få mere end 42 kills i et game.',
    price: '20,00 kr',
  },
]
