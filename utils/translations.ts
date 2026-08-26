/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, TranslationSchema } from './types';

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      about: 'About Us',
      contact: 'Contact',
      liveTv: 'Live TV',
      login: 'Login',
      onAir: 'ON AIR',
    },
    ui: {
      breaking: 'Breaking',
      readStory: 'Read Story',
      trending: 'Trending Now',
      liveStream: 'Live Stream',
      multimediaHub: 'Multimedia Hub',
      listenNow: 'Listen Now',
      browseAll: 'Browse All',
      peaceDialogue: 'Peace & Dialogue',
      announcements: 'Announcements',
      supportUs: 'Support Our Mission',
      findUs: 'Our Location',
      sendMsg: 'Send Message'
    },
    categories: {
      Home: 'Home',
      Spiritual: 'Spiritual',
      Ethiopia: 'Ethiopia',
      Multimedia: 'Multimedia',
      Podcast: 'Podcast',
      Social: 'Social',
      Arts: 'Arts'
    }
  },
  am: {
    nav: {
      about: 'ስለ እኛ',
      contact: 'እውቅያ',
      liveTv: 'ቀጥታ ስርጭት',
      login: 'ይግቡ',
      onAir: 'አየር ላይ',
    },
    ui: {
      breaking: 'ሰበር ዜና',
      readStory: 'ሙሉውን አንብብ',
      trending: 'አሁን በመታየት ላይ',
      liveStream: 'ቀጥታ ስርጭት',
      multimediaHub: 'መልቲሚዲያ',
      listenNow: 'አሁን ያዳምጡ',
      browseAll: 'ሁሉንም ይመልከቱ',
      peaceDialogue: 'ሰላም እና ውይይት',
      announcements: 'ማስታወቂያዎች',
      supportUs: 'ድጋፍ ያድርጉ',
      findUs: 'አድራሻችን',
      sendMsg: 'መልዕክት ይላኩ'
    },
    categories: {
      Home: 'መነሻ',
      Spiritual: 'መንፈሳዊ',
      Ethiopia: 'ኢትዮጵያ',
      Multimedia: 'መልቲሚዲያ',
      Podcast: 'ፖድካስት',
      Social: 'ማህበራዊ',
      Arts: 'ጥበብ'
    }
  },
  ti: {
    nav: {
      about: 'ብዛዕባና',
      contact: 'ርክብ',
      liveTv: 'ቀጥታ ስርጭት',
      login: 'ይእትዉ',
      onAir: 'አየር ላይ',
    },
    ui: {
      breaking: 'ሰበር ዜና',
      readStory: 'ሙሉኡ አንብብ',
      trending: 'ሕጂ ዝጥቀሱ',
      liveStream: 'ቀጥታ ስርጭት',
      multimediaHub: 'መልቲሚዲያ',
      listenNow: 'ሕጂ ስምዑ',
      browseAll: 'ኩሉ ርአ',
      peaceDialogue: 'ሰላምን ዘተን',
      announcements: 'ምልክታታት',
      supportUs: 'ሓገዝ ግበሩ',
      findUs: 'ኣድራሻና',
      sendMsg: 'መልእኽቲ ስደዱ'
    },
    categories: {
      Home: 'መበገሲ',
      Spiritual: 'መንፈሳዊ',
      Ethiopia: 'ኢትዮጵያ',
      Multimedia: 'መልቲሚዲያ',
      Podcast: 'ፖድካስት',
      Social: 'ማሕበራዊ',
      Arts: 'ጥበብ'
    }
  },
  or: {
    nav: {
      about: 'Waa\'ee Keenya',
      contact: 'Quunnamtii',
      liveTv: 'Live TV',
      login: 'Seeni',
      onAir: 'Marsariitii',
    },
    ui: {
      breaking: 'Oduu Hatattamaa',
      readStory: 'Dubbisi',
      trending: 'Amma Kan Jiru',
      liveStream: 'Live Stream',
      multimediaHub: 'Multimedia',
      listenNow: 'Amma Dhaggeeffadhu',
      browseAll: 'Hunda Ilaali',
      peaceDialogue: 'Nagaa fi Marii',
      announcements: 'Beeksisa',
      supportUs: 'Nu Deggaraa',
      findUs: 'Bakka Keenya',
      sendMsg: 'Erega Namu'
    },
    categories: {
      Home: 'Manatti',
      Spiritual: 'Hafuuraa',
      Ethiopia: 'Itoophiyaa',
      Multimedia: 'Multimedia',
      Podcast: 'Podcast',
      Social: 'Hawaasummaa',
      Arts: 'Aartii'
    }
  }
};
