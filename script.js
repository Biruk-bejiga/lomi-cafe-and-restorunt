document.addEventListener('DOMContentLoaded', () => {
  const topbar = document.querySelector('.topbar');
  const links = document.querySelectorAll('a[href^="#"]');
  const lazyImages = document.querySelectorAll('img[data-fallback]');
  const mapFrame = document.querySelector('.map-frame');
  const langButtons = document.querySelectorAll('.lang-btn');
  const i18nNodes = document.querySelectorAll('[data-i18n]');

  const translations = {
    am: {
      'nav.home': 'መነሻ',
      'nav.menu': 'ሜኑ',
      'nav.contact': 'ያግኙን',
      'nav.call': 'አሁን ይደውሉ',
      'hero.eyebrow': 'ካፌ እና ምግብ ቤት · ቦሌ ቡልቡላ',
      'hero.title': 'የሙቀት ጣዕሞች እና ተቀባይነት አመራር።',
      'hero.lede': 'ሎሚ ካፌ እና ምግብ ቤት ሞገስ ያለውን አደባባይ ከብርታት የተሞላ ኢትዮጵያዊ እና አለም አቀፍ ጣዕሞች ጋር ያዋሃዳል። በቤት ውስጥ ይበሉ፣ በድራይቭ ይውሰዱ፣ ያልተገናኙ ትዕዛዝ ይያዙ።',
      'hero.call': 'አሁን ይደውሉ',
      'hero.directions': 'አቅጣጫዎችን ይውሰዱ',
      'hero.viewMenu': 'ሜኑን ይመልከቱ',
      'hero.status': 'አሁን ክፍት ነው · 11:00 እስከ ሌሊት ይዘጋል',
      'hero.media1': 'የሼፍ ምርጫ',
      'hero.media2': 'ሞገስ ያለው መቀመጫ',
      'about.eyebrow': 'ስለ እኛ',
      'about.title': 'በአዲስ አበባ የተሰሩ፣ ለማኅበር የተዘጋጁ።',
      'about.lede': 'በቦሌ ቡልቡላ፣ ወረዳ 12 ላይ ያለው ሎሚ ካፌ እና ምግብ ቤት በሙቀት አገልግሎት፣ በተመረጠ ሜኑ እና በተለያዩ አገልግሎቶች ይቀበላችሁ።',
      'about.visitTitle': 'ይጎብኙን',
      'about.address1': 'ቦሌ ቡልቡላ፣ ወረዳ 12',
      'about.address2': 'ፕላስ ኮድ፡ XQ4Q+W2 አዲስ አበባ',
      'about.mapsLink': 'በጉግል ካርታ ይክፈቱ',
      'about.hoursTitle': 'ሰዓታት',
      'about.openNow': 'አሁን ክፍት ነው',
      'about.hoursClose': '11:00 እስከ ሌሊት ይዘጋል',
      'about.hoursModes': 'በቤት ውስጥ · በድራይቭ · ያልተገናኙ መልእክት',
      'about.hoursToggle': 'ሙሉ ሰዓታትን ይመልከቱ',
      'about.day.sun': 'እሁድ',
      'about.day.mon': 'ሰኞ',
      'about.day.tue': 'ማክሰኞ',
      'about.day.wed': 'ረቡዕ',
      'about.day.thu': 'ሐሙስ',
      'about.day.fri': 'ዓርብ',
      'about.day.sat': 'ቅዳሜ',
      'about.contactTitle': 'መገናኛ',
      'about.contactLink': 'መልእክት ይላኩ ወይም አቅጣጫ ይፈልጉ',
      'menu.eyebrow': 'ሎሚ በርገር',
      'menu.title': 'ሜኑያችን ዝግጁ ነው።',
      'menu.lede': 'በርገሮች፣ ፒዛ እና እስናክ ከብር ዋጋዎች ጋር። በቤት ውስጥ፣ መውሰድ ወይም ያልተገናኙ ትዕዛዝ ይሁን።',
      'menu.col1.title': 'በርገር እና ሳንድዊች',
      'menu.col2.title': 'ፒዛ',
      'menu.col3.title': 'እስናክ',
      'menu.burger.special': 'ሎሚ ልዩ በርገር',
      'menu.burger.normal': 'መደበኛ በርገር',
      'menu.burger.cheese': 'የአይብ በርገር',
      'menu.burger.beef': 'የጥጃ በርገር',
      'menu.burger.tunaSandwich': 'የቱና ሳንድዊች',
      'menu.burger.chickenSandwich': 'የዶሮ ሳንድዊች',
      'menu.burger.fishSandwich': 'የዓሣ ሳንድዊች',
      'menu.burger.fries': 'የእሾህ ድንች',
      'menu.burger.fishChips': 'ዓሣ እና ድንች',
      'menu.pizza.tunaL': 'ቱና ፒዛ (ትልቅ)',
      'menu.pizza.tunaM': 'ቱና ፒዛ (መካከለኛ)',
      'menu.pizza.beefL': 'የጥጃ ፒዛ (ትልቅ)',
      'menu.pizza.beefM': 'የጥጃ ፒዛ (መካከለኛ)',
      'menu.pizza.chickenL': 'የዶሮ ፒዛ (ትልቅ)',
      'menu.pizza.chickenM': 'የዶሮ ፒዛ (መካከለኛ)',
      'menu.pizza.vegL': 'የአትክልት ፒዛ (ትልቅ)',
      'menu.pizza.vegM': 'የአትክልት ፒዛ (መካከለኛ)',
      'menu.pizza.cheeseL': 'የአይብ ፒዛ (ትልቅ)',
      'menu.pizza.cheeseM': 'የአይብ ፒዛ (መካከለኛ)',
      'menu.pizza.lomiL': 'ሎሚ ልዩ ፒዛ (ትልቅ)',
      'menu.snack.wing6': 'የዶሮ ቅጥ 6 እቃ',
      'menu.snack.wing12': 'የዶሮ ቅጥ 12 እቃ',
      'menu.snack.meat200': 'የስጋ ባርበኪው (ትንሽ)',
      'menu.snack.meat300': 'የስጋ ባርበኪው (ትልቅ)',
      'menu.cta.order': 'በስልክ ይዘዙ',
      'menu.cta.full': 'ሙሉ ሜኑን ይመልከቱ',
      'services.eyebrow': 'አገልግሎቶች',
      'services.title': 'ሎሚን ለመውደቅ ተስማሚ መንገዶች።',
      'services.dinein.title': 'በቤት ውስጥ ቁመና',
      'services.dinein.desc': 'መቀመጫ በግብግብ አገልግሎትና ሞገስ ያለው አደባባይ።',
      'services.drive.title': 'ድራይቭ-ትሩ',
      'services.drive.desc': 'በፍጥነት ለመውሰድ ቀላል መስመር።',
      'services.delivery.title': 'ያልተገናኙ መድረሻ',
      'services.delivery.desc': 'ንጹሕ እና በደህና ወደ ቤትዎ የሚደርስ ምግብ።',
      'reviews.eyebrow': 'ግምገማዎች',
      'reviews.title': 'በእንግዶች የተወደደ።',
      'reviews.rating': '4.8 / 5 · 492 ግምገማዎች',
      'reviews.r1.meta': 'አካባቢ መመሪያ · 5 ኮከቦች',
      'reviews.r1.quote': '“እንግዳ ልክ ያለ ተሞክሮ፣ ታሪካዊ ምግብ አስደሳች ነው።”',
      'reviews.r2.meta': '4 ግምገማዎች · 5 ኮከቦች',
      'reviews.r2.quote': '“ምግቡን ወደድኩ፤ ቅመምና ዘይት በሚመጡ ልክ ነው።”',
      'reviews.r3.meta': '4 ግምገማዎች · 5 ኮከቦች',
      'reviews.r3.quote': '“ለማንኛውም እንግዳ ተስማሚ። ትኩስ፣ ፈጣን ምግብና ቡና።”',
      'reviews.cta': 'ተጨማሪ ግምገማዎችን ይመልከቱ',
      'contact.eyebrow': 'መገናኛ',
      'contact.title': 'እንገናኝ።',
      'contact.lede': 'ስልክ ይደውሉ፣ ይጎብኙን ወይም አቅጣጫ ይውሰዱ። ለቦታ ማስያዣና ትዕዛዝ እንዘጋጃለን።',
      'contact.reach': 'ይገናኙን',
      'contact.directions': 'አቅጣጫ ይውሰዱ',
      'contact.callBtn': 'አሁን ይደውሉ',
      'contact.mapBtn': 'በካርታ ይክፈቱ',
      'footer.call': 'ይደውሉ',
      'footer.directions': 'አቅጣጫዎች',
      'footer.menu': 'ሜኑ',
      'footer.copy': '© 2026 ሎሚ ካፌ እና ምግብ ቤት። ሁሉም መብቶች የተጠበቁ ናቸው።',
      'menuPage.eyebrow': 'ሎሚ በርገር ሜኑዎች',
      'menuPage.title': 'ከማቀዝቀዣው ቀጥሎ፣ በየቀኑ በትኩስ የሚዘጋጁ።',
      'menuPage.lede': 'የበርገር፣ ፒዛ እና እስናክ ሙሉ ሜኑ በብር ዋጋዎች። በቤት ውስጥ፣ መውሰድ ወይም ያልተገናኙ ትዕዛዝ ይደርሳል።',
      'menuPage.order': 'በስልክ ይዘዙ',
      'menuPage.directions': 'አቅጣጫዎችን ይውሰዱ',
      'menuPage.status': 'ሁሉም ዋጋዎች በብር · ትኩስ እና በፍጥነት ይገለጣሉ',
      'menuPage.mediaNote': 'የምርጥ በርገሮች',
      'menuPage.tab.burgers': 'በርገር / Burgers',
      'menuPage.tab.pizzas': 'ፒዛ / Pizzas',
      'menuPage.tab.snacks': 'እስናክ / Snacks',
      'menuPage.burgers.eyebrow': 'በርገር / Burger',
      'menuPage.burgers.title': 'በርገሮች እና ሳንድዊች',
      'menuPage.burgers.lede': 'ተጠቃሚ ፓቲዎች፣ ተንበርክካሪ ቡንዶች፣ ብሩህ አትክልቶች፣ የቤት ሶስ። ተጨማሪ አይብ ወይም ድግግሞሽ ፓቲ ይጠይቁ።',
      'menuPage.pizzas.eyebrow': 'ፒዛ',
      'menuPage.pizzas.title': 'በእንጨት የተጋገረ ዓይነት ፒዛ',
      'menuPage.pizzas.lede': 'የተዘረጋ መሠረት፣ በደማቅ ቲማቲም በሶስ የተሞላ፣ በወርቃማ አይብ የተጋገረ። ትልቅ (L) ወይም መካከለኛ (M) ይምረጡ።',
      'menuPage.pizza.tunaL.desc': 'የቲማቲም ሶስ፣ አይብ፣ ቱና፣ ሽንኩርት፣ ቂምሽ፣ ቲማቲም፣ አቮካዶ።',
      'menuPage.pizza.beefL.desc': 'የቲማቲም ሶስ፣ አይብ፣ ሽንኩርት፣ ቂምሽ፣ ቲማቲም፣ ዱባ፣ ሙሽሮም።',
      'menuPage.pizza.chickenL.desc': 'የቲማቲም ሶስ፣ አይብ፣ ዶሮ፣ ሽንኩርት፣ ቂምሽ፣ ዱባ፣ ሙሽሮም።',
      'menuPage.pizza.vegL.desc': 'የቲማቲም ሶስ፣ ጎመን፣ ካሮት፣ ዝኩኒ፣ ስፒናች፣ ባቄላ፣ ሽንኩርት፣ ቲማቲም፣ ቂምሽ።',
      'menuPage.pizza.cheeseL.desc': 'የቲማቲም ሶስ፣ አይብ፣ ዱባ፣ ሽንኩርት፣ ቂምሽ።',
      'menuPage.pizza.lomiL.desc': 'የቲማቲም ሶስ፣ አይብ፣ ዶሮ፣ ጥጃ፣ ቀቀለ እንቁላል፣ የጥጃ ሳሶ፣ ዱባ፣ ሽንኩርት፣ ቂምሽ፣ ሙሽሮም።',
      'menuPage.snacks.eyebrow': 'እስናክ / Snack',
      'menuPage.snacks.title': 'እስናኮች እና ባርበኪዎች',
      'menuPage.snacks.lede': 'ለማጋራት ተስማሚ የተጠመቀ፣ የተጋገረ እና የተሸቀቀ ምግብ።',
      'menuPage.snack.wing.desc': 'በቤት ቅመም የተቀመመ ክሪስፒ ቅጥ።',
      'menuPage.cta.title': 'ለትዕዛዝ ዝግጁ ነዎት?',
      'menuPage.cta.body': 'አሁን ይደውሉ ለመውሰድ ወይም ስለ ዛሬ ልዩ ስፔሻል ይጠይቁ።',
      'menuPage.cta.call': 'ይደውሉ +251 96 055 5777',
      'menuPage.cta.visit': 'መልእክት ይላኩ ወይም ይጎብኙን'
    }
  };

  const defaultText = new Map();
  i18nNodes.forEach((node) => {
    defaultText.set(node, node.textContent.trim());
  });

  const applyLanguage = (langCode) => {
    const selected = langCode === 'am' ? 'am' : 'en';
    document.documentElement.lang = selected;

    i18nNodes.forEach((node) => {
      const key = node.dataset.i18n;
      const translated = selected === 'am' ? translations.am[key] : defaultText.get(node);
      if (translated) {
        node.textContent = translated;
      } else if (defaultText.has(node)) {
        node.textContent = defaultText.get(node);
      }
    });

    langButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === selected);
    });

    localStorage.setItem('lomi-lang', selected);
  };

  const storedLang = localStorage.getItem('lomi-lang');
  applyLanguage(storedLang || 'en');

  langButtons.forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
  });

  // Smooth scroll for internal anchors
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Add shadow to topbar after scroll
  const toggleShadow = () => {
    if (window.scrollY > 10) {
      topbar.classList.add('shadowed');
    } else {
      topbar.classList.remove('shadowed');
    }
  };

  toggleShadow();
  window.addEventListener('scroll', toggleShadow, { passive: true });

  // Fallback images: if branded asset fails, fall back to remote placeholder
  lazyImages.forEach((img) => {
    img.addEventListener('error', () => {
      if (img.dataset.fallback && img.src !== img.dataset.fallback) {
        img.src = img.dataset.fallback;
      }
    });
  });

  // Google Maps Embed API integration with graceful fallback
  if (mapFrame) {
    const place = mapFrame.dataset.mapPlace;
    const fallback = mapFrame.dataset.mapFallback;
    const keyFromData = mapFrame.dataset.mapKey;
    const keyFromWindow = window["AIzaSyBRe0JvYv-waVv14x7CHLW8E_DO9tHAfSA"] || '';
    const apiKey = (keyFromWindow || keyFromData || '').trim();

    if (apiKey && place) {
      const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(apiKey)}&q=${encodeURIComponent(place)}&zoom=16`;
      mapFrame.src = embedUrl;
    } else if (fallback) {
      mapFrame.src = fallback;
    }
  }
});
