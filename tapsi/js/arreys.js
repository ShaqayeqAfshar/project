const CITIES = [
  {
    name: "تهران",
    englishName: "Tehran",
  },
  {
    name: "کرج",
    englishName: "Karaj",
  },
  {
    name: "مشهد",
    englishName: "Mashhad",
  },
  {
    name: "اصفهان",
    englishName: "Isfahan",
  },

  {
    name: "شیراز",
    englishName: "Shiraz",
  },
  {
    name: "ارومیه",
    englishName: "Urmia",
  },
  {
    name: "لاهیجان",
    englishName: "Lahijan",
  },
  {
    name: "رشت",
    englishName: "Rasht",
  },
  {
    name: "انزلی",
    englishName: "Anzali",
  },
  {
    name: "تبریز",
    englishName: "Tabriz",
  },
  {
    name: "ساری",
    englishName: "Sari",
  },
  {
    name: "یزد",
    englishName: "Yazd",
  },
  {
    name: "کرمان",
    englishName: "Kerman",
  },
  {
    name: "قم",
    englishName: "Qom",
  },
  {
    name: "اهواز",
    englishName: "Ahvaz",
  },
  {
    name: "بابل",
    englishName: "Babol",
  },
  {
    name: "قائم‌شهر",
    englishName: "Qaem Shahr",
  },
  {
    name: "آمل",
    englishName: "Amol",
  },
  {
    name: "کرمانشاه",
    englishName: "Kermanshah",
  },
  {
    name: "گرگان",
    englishName: "Gorgan",
  },
  {
    name: "قزوین",
    englishName: "Qazvin",
  },
  {
    name: "اراک",
    englishName: "Arak",
  },
  {
    name: "نیشابور",
    englishName: "Neyshabur",
  },
  {
    name: "نور",
    englishName: "Nur",
  },
  {
    name: "محمودآباد",
    englishName: "Mahmudabad",
  },
  {
    name: "بجنورد",
    englishName: "Bojnord",
  },
  {
    name: "اردبیل",
    englishName: "Ardabil",
  },

  {
    name: "همدان",
    englishName: "Hamadan",
  },
  {
    name: "خرم‌آباد",
    englishName: "Khorramabad",
  },
  {
    name: "کیش",
    englishName: "Kish",
  },
];

const CARS = [
  {
    id: 1,
    title: "تپسی کلاسیک",
    describe:
      "با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.",
    Url: "classic",
  },
  {
    id: 2,
    title:"تپسی تلفنی",
    describe: "سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست.",
    Url: "tel",
  },
  {
    id: 3,
    title:"تپسی لاین",
    describe: "تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود.",
    Url: "line",
  },
  {
    id: 4,
    title:"موتوپیک",
    describe: "با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید.",
    Url: "motopeyk",
  },
  {
    id: 5,
    title:"اتوپیک",
    describe: "اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است.",
    Url: "autopeyk",
  },
  {
    id: 6,
    title:"تپسی پلاس",
    describe: "در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس که در حال حاضر در تهران فعال است، امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد.",
    Url: "plus",
  },
  {
    id: 7,
    title:"تپسی تاکسی",
    describe: "در سرویس تاکسی تپسی، تاکسی‌های زرد یا سبز شما را به مقصدتان می‌رسانند. این سرویس در حال حاضر در تهران فعال است و چنانچه به دلایلی مانند ورود به محدوده طرح ترافیک یا طرح آلودگی هوا، ترجیح بدهید از تاکسی برای رفت‌وآمدتان استفاده کنید، گزینه مناسبی خواهد بود.",
    Url: "taxi",
  },
  {
    id: 8,
    title:"همیار",
    describe: "سرویس همیار تپسی، به جای شما خرید می‌کند. کافیست فروشگاه مورد نظر خود را به عنوان مبدا مشخص کرده و لیست خریدتان را داخل اپ وارد کنید. این خرید‌ها می‌تواند از سوپرمارکت یا داروخانه مورد نظر شما باشند.",
    Url: "hamyar",
  },
];