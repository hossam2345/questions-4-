const geographyQuestions = [
    {
        question: "ما هي عاصمة فرنسا؟",
        options: ["باريس", "لندن", "برلين", "مدريد"],
        correct: 0,
    },
    {
        question: "ما هي عاصمة اليابان؟",
        options: ["طوكيو", "سول", "أوساكا", "فوكوكا"],
        correct: 0,
    },
    {
        question: "ما هي القارة الأكبر في العالم؟",
        options: ["أفريقيا", "آسيا", "أمريكا الجنوبية", "أوروبا"],
        correct: 1,
    },
    {
        question: "أين يقع جبل إيفرست؟",
        options: ["الهند", "نيبال", "الصين", "باكستان"],
        correct: 1,
    },
    {
        question: "ما هو أطول نهر في العالم؟",
        options: ["الأمازون", "النيل", "اليانغتسي", "الميسيسيبي"],
        correct: 1,
    },
    {
        question: "ما هي عاصمة مصر؟",
        options: ["الإسكندرية", "القاهرة", "أسوان", "غزة"],
        correct: 1,
    },
    {
        question: 'أي دولة تعرف باسم "أرض النار"؟',
        options: ["إندونيسيا", "الأرجنتين", "إيطاليا", "السعودية"],
        correct: 0,
    },
    {
        question: "ما اسم المحيط الذي يفصل بين أوروبا وأمريكا؟",
        options: [
            "المحيط الهندي",
            "المحيط الهادئ",
            "المحيط الأطلسي",
            "المحيط المتجمد الشمالي",
        ],
        correct: 2,
    },
    {
        question: "أي دولة تقع في شبه الجزيرة العربية؟",
        options: ["الكويت", "المغرب", "الأردن", "السودان"],
        correct: 0,
    },
    {
        question: "ما هي عاصمة ألمانيا؟",
        options: ["ميونخ", "برلين", "هامبورغ", "فرانكفورت"],
        correct: 1,
    },
    {
        question: "أي دولة تطل على بحر البلطيق؟",
        options: ["النرويج", "فنلندا", "اليونان", "البرتغال"],
        correct: 1,
    },
    {
        question: "ما اسم أكبر صحراء في العالم؟",
        options: [
            "صحراء أتاكاما",
            "صحراء النقب",
            "صحراء الصحراء الكبرى",
            "صحراء موهافي",
        ],
        correct: 2,
    },
    {
        question:
            "أي دولة تقع في جنوب أوروبا وتشتهر بموقعها الجغرافي على البحر الأبيض المتوسط؟",
        options: ["النمسا", "إسبانيا", "السويد", "بولندا"],
        correct: 1,
    },
    {
        question: "ما اسم أكبر جزيرة في العالم؟",
        options: ["غرينلاند", "مدغشقر", "بورنيو", "نيو غينيا"],
        correct: 0,
    },
    {
        question: "أي دولة يمر بها خط الاستواء؟",
        options: ["المغرب", "إثيوبيا", "تركيا", "هولندا"],
        correct: 1,
    },
    {
        question: "ما هي عاصمة كندا؟",
        options: ["تورنتو", "مونتريال", "أوتاوا", "فانكوفر"],
        correct: 2,
    },
    {
        question: "أين تقع دولة أيسلندا؟",
        options: [
            "في جنوب شرق آسيا",
            "في المحيط الأطلسي الشمالي",
            "في جنوب القارة الأفريقية",
            "في البحر المتوسط",
        ],
        correct: 1,
    },
    {
        question: "ما اسم النهر الذي يمر عبر مدينة بغداد؟",
        options: ["دجلة", "النيل", "الفرات", "السين"],
        correct: 2,
    },
    {
        question: "أي قارة لا تحتوي على دول غنية بالرسوبيات؟",
        options: ["أفريقيا", "القطب الجنوبي", "أوروبا", "آسيا"],
        correct: 1,
    },
    {
        question: "ما اسم الدولة التي تقع بين سوريا والأردن؟",
        options: ["العراق", "فلسطين", "لبنان", "مصر"],
        correct: 1,
    },
    {
        question: "ما هي عاصمة البرازيل؟",
        options: ["ريو دي جانيرو", "ساو باولو", "برازيليا", "بيلو هوريزونتي"],
        correct: 2,
    },
    {
        question: "أي دولة تقع في جنوب شرق آسيا وتشتهر بجزرها؟",
        options: ["فيتنام", "الفلبين", "تايلاند", "كمبوديا"],
        correct: 1,
    },
    {
        question: "ما هو أطول نهر في أوروبا؟",
        options: ["الدانوب", "الرون", "الفولجا", "الراين"],
        correct: 2,
    },
    {
        question:
            "أي دولة جغرافيًا تقع في القارة الأوروبية وآسيوية في الوقت نفسه؟",
        options: ["تركيا", "النرويج", "اليونان", "أوكرانيا"],
        correct: 0,
    },
    {
        question: "ما هي عاصمة أستراليا؟",
        options: ["سيدني", "ملبورن", "كانبرا", "بريزبن"],
        correct: 2,
    },
    {
        question: "أي دولة تقع في جنوب أفريقيا وتشتهر بجبل كليمنجارو؟",
        options: ["تنزانيا", "كينيا", "أوغندا", "زامبيا"],
        correct: 0,
    },
    {
        question: 'ما هي المنطقة الجغرافية التي تُعرف باسم "الدرع العربي"؟',
        options: [
            "أمريكا الوسطى",
            "شبه الجزيرة العربية",
            "أوروبا الشرقية",
            "جنوب شرق آسيا",
        ],
        correct: 1,
    },
    {
        question: "أي دولة لها أطول ساحل في العالم؟",
        options: ["كندا", "أستراليا", "روسيا", "إندونيسيا"],
        correct: 0,
    },
    {
        question: "ما هو اسم أقصى نقطة جنوبية في الأرض؟",
        options: [
            "رأس الرجاء الصالح",
            "قارة أنتاركتيكا",
            "رأس النسر",
            "القارة القطبية الجنوبية",
        ],
        correct: 3,
    },
    {
        question: "أي بحر يحيط بتركيا من الجنوب؟",
        options: [
            "البحر الأسود",
            "البحر المتوسط",
            "البحر الأحمر",
            "بحر مرمرة",
        ],
        correct: 1,
    },
];
const historyQuestions = [
    {
        question: "من هو أول رئيس للولايات المتحدة؟",
        options: [
            "توماس جيفرسون",
            "جورج واشنطن",
            "أبراهام لنكولن",
            "جون كينيدي",
        ],
        correct: 1,
    },
    {
        question: "في أي سنة بدأت الحرب العالمية الثانية؟",
        options: ["1939", "1941", "1945", "1935"],
        correct: 0,
    },
    {
        question: "من اكتشف أمريكا؟",
        options: [
            "كريستوفر كولومبوس",
            "فاسكو دا غاما",
            "ماركو بولو",
            "جيمس كوك",
        ],
        correct: 0,
    },
    {
        question:
            "ما اسم المدينة التي كانت عاصمة الدولة الإسلامية في العصر العباسي؟",
        options: ["دمشق", "بغداد", "القاهرة", "الأحساء"],
        correct: 1,
    },
    {
        question: "من هو مؤسس الدولة الأموية؟",
        options: [
            "معاوية بن أبي سفيان",
            "أبو بكر الصديق",
            "عثمان بن عفان",
            "عبد الملك بن مروان",
        ],
        correct: 0,
    },
    {
        question: "في أي سنة حدثت الثورة الفرنسية؟",
        options: ["1776", "1789", "1804", "1815"],
        correct: 1,
    },
    {
        question: "من هو الملك الذي قاد الحملة الصليبية الأولى؟",
        options: [
            "ريتشارد قلب الأسد",
            "فرناندو الأول",
            "ألفونسو السادس",
            "غوستافوس أدولفوس",
        ],
        correct: 1,
    },
    {
        question: "ما اسم القائد الذي فتح القسطنطينية في 1453؟",
        options: ["قلاوون", "محمد الفاتح", "تيمورلنك", "سليمان القانوني"],
        correct: 1,
    },
    {
        question: "من هو مؤسس الدولة العثمانية؟",
        options: [
            "سليمان القانوني",
            "عثمان بن أرطغرل",
            "أحمد الأول",
            "مراد الثاني",
        ],
        correct: 1,
    },
    {
        question: "في أي سنة وقعت معركة بدر؟",
        options: ["621", "624", "630", "636"],
        correct: 1,
    },
    {
        question:
            "من هو أول خليفة للمسلمين بعد وفاة النبي صلى الله عليه وسلم؟",
        options: [
            "عمر بن الخطاب",
            "أبو بكر الصديق",
            "علي بن أبي طالب",
            "عثمان بن عفان",
        ],
        correct: 1,
    },
    {
        question:
            "ما اسم الإمبراطور الروماني الذي غير اسم الدولة إلى الإمبراطورية الرومانية؟",
        options: ["أغسطس", "قنسطانطين الكبير", "نيرون", "كاليغولا"],
        correct: 1,
    },
    {
        question: "من هو الزعيم الذي قاد الثورة الأمريكية ضد بريطانيا؟",
        options: [
            "بنجامين فرانكلين",
            "جورج واشنطن",
            "توماس جيفرسون",
            "جون آدامز",
        ],
        correct: 1,
    },
    {
        question: "في أي سنة بدأت الحرب العالمية الأولى؟",
        options: ["1914", "1916", "1918", "1920"],
        correct: 0,
    },
    {
        question: 'من هو صاحب فكرة "الحق الطبيعي" في الثورة الأمريكية؟',
        options: [
            "رالف والدو إمرسون",
            "جون لوك",
            "توماس باين",
            "جيمس ماديون",
        ],
        correct: 1,
    },
    {
        question: "من هو القائد الذي هزم نابليون في معركة واترلو؟",
        options: [
            "هوراشيو نيلسون",
            "الدوق الويلزي",
            "الأمير البلجيكي",
            "الجنرال ويلينغتون",
        ],
        correct: 3,
    },
    {
        question: "ما اسم العالم الذي اكتشف أمريكا وذهب إليها قبل كولومبوس؟",
        options: [
            "فاسكو داي غاما",
            "مارتن بيكو",
            "ليوناردو دا فينشي",
            "بالميرو",
        ],
        correct: 1,
    },
    {
        question: "من كانت أول امرأة تحكم مصر في التاريخ الحديث؟",
        options: ["نوال السعداوي", "حسين السعداوي", "ماري كوري", "مصرية"],
        correct: 3,
    },
    {
        question: "في أي عام أُعلن قيام دولة إسرائيل؟",
        options: ["1945", "1947", "1948", "1950"],
        correct: 2,
    },
    {
        question: 'من هو الشاعر الذي نظم "معلقات" في الجاهلية؟',
        options: ["أبو فراس", "المتنبّي", "امرؤ القيس", "ابن الرومي"],
        correct: 2,
    },
    {
        question: "من قام ببناء الأهرامات الثلاثة في الجيزة؟",
        options: ["الفراعنة", "الرومان", "الفرس", "الإغريق"],
        correct: 0,
    },
    {
        question: "أي مدينة كانت مركزًا للإمبراطورية الرومانية في الشرق؟",
        options: ["روما", "القسطنطينية", "أثينا", "رما"],
        correct: 1,
    },
    {
        question: "من هو رئيس الولايات المتحدة الذي ألغى العبودية؟",
        options: [
            "هاري ترومان",
            "أبراهام لينكولن",
            "جيمس مونرو",
            "فرانكلين روزفلت",
        ],
        correct: 1,
    },
    {
        question: "في أي سنة وقعت معركة الأركون؟",
        options: ["1905", "1916", "1940", "1918"],
        correct: 3,
    },
    {
        question: 'من هو مؤلف كتاب "الكوميديا الإسبانية"؟',
        options: ["فولتير", "ميغيل دي ثيربانتس", "دانتي", "شكسبير"],
        correct: 1,
    },
    {
        question: "ما اسم المعاهدة التي أنهت الحرب العالمية الأولى؟",
        options: [
            "معاهدة فيرساي",
            "معاهدة فرساي",
            "معاهدة نانسي",
            "معاهدة لوكارنو",
        ],
        correct: 1,
    },
    {
        question: "من هو مؤسس الإمبراطورية المغولية؟",
        options: ["جنكيز خان", "تيمورلنك", "بابا يوني", "هولاكو"],
        correct: 0,
    },
    {
        question: "في أي عام وقعت ثورة أكتوبر في روسيا؟",
        options: ["1914", "1917", "1918", "1922"],
        correct: 1,
    },
    {
        question: "من هو القائد الذي قاد الحملة الفرنسية في مصر؟",
        options: [
            "نابليون بونابرت",
            "لويس الرابع عشر",
            "فريدريك العظيم",
            "جوزيف بونابرت",
        ],
        correct: 0,
    },
    {
        question: "ما اسم الحاكم الذي شجع الترجمة في بغداد في العصر العباسي؟",
        options: [
            "المأمون",
            "أبو جعفر المنصور",
            "هارون الرشيد",
            "عبد الله بن علي",
        ],
        correct: 0,
    },
];
const programmingQuestions = [
    {
        question: "ما هي لغة البرمجة التي تستخدم لتطوير تطبيقات الويب؟",
        options: ["Python", "JavaScript", "C++", "Java"],
        correct: 1,
    },
    {
        question:
            "ما هو إطار العمل الشائع لتطوير تطبيقات الويب باستخدام JavaScript؟",
        options: ["React", "Django", "Flask", "Laravel"],
        correct: 0,
    },
    {
        question:
            "ما هو نوع البيانات الذي يمثل قيمة صحيحة أو خاطئة في البرمجة؟",
        options: ["String", "Integer", "Boolean", "Float"],
        correct: 2,
    },
    {
        question: "ما هي النتيجة المنطقية للتعبير 5 > 3؟",
        options: ["true", "false", "5", "3"],
        correct: 0,
    },
    {
        question:
            "ما هي الكلمة المفتاحية المستخدمة لتعريف دالة في JavaScript؟",
        options: ["function", "define", "method", "class"],
        correct: 0,
    },
    {
        question: "كيف يتم تعليق سطر واحد في JavaScript؟",
        options: ["# تعليق", "<!-- تعليق -->", "// تعليق", "/* تعليق */"],
        correct: 2,
    },
    {
        question: "أي نوع من البيانات يمثل نصًا؟",
        options: ["Boolean", "String", "Object", "Number"],
        correct: 1,
    },
    {
        question: "ما هي النتيجة التي يرجعها Array.length؟",
        options: [
            "عدد العناصر في المصفوفة",
            "أول عنصر",
            "آخر عنصر",
            "نوع المصفوفة",
        ],
        correct: 0,
    },
    {
        question: "ما هو اسم البنية التي تخزن مجموعة من القيم في JavaScript؟",
        options: ["Function", "Array", "Object", "Variable"],
        correct: 1,
    },
    {
        question: "كيف يمكن الوصول إلى عنصر في المصفوفة باستخدام الفهرس؟",
        options: [
            "array[index]",
            "array.index",
            "array(index)",
            "array=>index",
        ],
        correct: 0,
    },
    {
        question: "أي من التالي يعد متغيرًا صحيحًا في JavaScript؟",
        options: ["2name", "var 2name", "let name2", "#name"],
        correct: 2,
    },
    {
        question: "ما هو دور الكلمة المفتاحية return داخل الدالة؟",
        options: ["توقف التنفيذ", "يعيد قيمة", "يعرّف متغيرًا", "يضيف تعليق"],
        correct: 1,
    },
    {
        question: "ما هي النتيجة 10 % 3؟",
        options: ["1", "3", "0", "7"],
        correct: 0,
    },
    {
        question: "أي بناء يُستخدم لتكرار قطعة كود معينة عدة مرات؟",
        options: ["if", "for", "switch", "else"],
        correct: 1,
    },
    {
        question: "ما هي القيمة الناتجة من 2 === '2'؟",
        options: ["true", "false", "undefined", "null"],
        correct: 1,
    },
    {
        question:
            "ما هو نوع البيانات الذي يَستطيع تخزين أزواج المفتاح والقيمة؟",
        options: ["Array", "Object", "String", "Boolean"],
        correct: 1,
    },
    {
        question: "ما هي الطريقة المستخدمة لإضافة عنصر إلى نهاية المصفوفة؟",
        options: ["push()", "unshift()", "splice()", "slice()"],
        correct: 0,
    },
    {
        question: "ما هي نتيجة typeof null في JavaScript؟",
        options: ["object", "null", "undefined", "boolean"],
        correct: 0,
    },
    {
        question: "ما هو ترتيب التنفيذ في شرط if إذا كانت الحالة صحيحة؟",
        options: [
            "تنفذ else فقط",
            "تنفذ if فقط",
            "تنفذ الكود الاعلى",
            "تتوقف العملية",
        ],
        correct: 1,
    },
    {
        question: "ما هي الدالة المستخدمة لعرض رسالة تنبيه في المتصفح؟",
        options: ["console.log()", "alert()", "prompt()", "confirm()"],
        correct: 1,
    },
    {
        question: "ما هو الفرق بين let و var؟",
        options: [
            "لا يوجد فرق",
            "var له نطاق عالمي و let نطاق محلي",
            "let لا يعمل في المتصفح",
            "var ليس متغيرًا",
        ],
        correct: 1,
    },
    {
        question: "ما هو الناتج من: console.log(2 + '2')؟",
        options: ["4", "22", "NaN", "error"],
        correct: 1,
    },
    {
        question: "أي طريقة تُستخدم لإزالة آخر عنصر من المصفوفة؟",
        options: ["pop()", "shift()", "remove()", "delete()"],
        correct: 0,
    },
    {
        question: "ما هي نتيجة [1,2,3].length؟",
        options: ["2", "3", "4", "undefined"],
        correct: 1,
    },
    {
        question: "ما هو الغرض من الكلمة المفتاحية const؟",
        options: [
            "تُعرّف متغيرًا قابلًا لإعادة التعيين",
            "تُعرّف دالة",
            "تُعرّف متغيرًا ثابتًا لا يمكن إعادة تعيينه",
            "تُنشئ كائنًا",
        ],
        correct: 2,
    },
    {
        question: "أي من التالي يعد callback function؟",
        options: [
            "دالة تُمرر كمعامل لدالة أخرى",
            "متغير رقمي",
            "مصفوفة",
            "شرط",
        ],
        correct: 0,
    },
    {
        question: "ما هي طريقة إنشاء نسخة من مصفوفة دون التعديل على الأصل؟",
        options: ["slice()", "splice()", "pop()", "push()"],
        correct: 0,
    },
    {
        question: "أي من هذه الخصائص تستخدم للتعرف على نوع المتغير؟",
        options: ["typeof", "instanceof", "valueOf", "toString"],
        correct: 0,
    },
    {
        question:
            "ما هي النتيجة من تشغيل هذا الكود: let x = [1,2]; x[2] = 3; console.log(x.length)",
        options: ["2", "3", "undefined", "error"],
        correct: 1,
    },
    {
        question: "ما هي وظيفة map() في JavaScript؟",
        options: [
            "تكرار الأنواع",
            "تبديل العناصر",
            "تطبيق دالة على كل عنصر وإرجاع مصفوفة جديدة",
            "حذف العناصر",
        ],
        correct: 2,
    },
    {
        question: "ما هي نتيجة 5 === Number('5')؟",
        options: ["true", "false", "NaN", "undefined"],
        correct: 0,
    },
];
const englishQuestions = [
    {
        question: "What is the synonym of 'happy'?",
        options: ["Sad", "Joyful", "Angry", "Tired"],
        correct: 1,
    },
    {
        question: "What is the antonym of 'big'?",
        options: ["Large", "Huge", "Small", "Tall"],
        correct: 2,
    },
    {
        question: "Which word is a noun?",
        options: ["Run", "Beautiful", "Cat", "Quickly"],
        correct: 2,
    },
    {
        question: "Choose the correct verb: 'She ___ to school every day.'",
        options: ["go", "goes", "going", "gone"],
        correct: 1,
    },
    {
        question: "Which sentence is correct?",
        options: [
            "He are tired.",
            "He is tired.",
            "He am tired.",
            "He tired.",
        ],
        correct: 1,
    },
    {
        question: "What is the plural of 'child'?",
        options: ["Childs", "Children", "Childes", "Childer"],
        correct: 1,
    },
    {
        question: "Choose the correct article: 'I saw ___ elephant.'",
        options: ["a", "an", "the", "no article"],
        correct: 1,
    },
    {
        question: "Which word is an adjective?",
        options: ["Quickly", "Happiness", "Blue", "Run"],
        correct: 2,
    },
    {
        question: "What is the past tense of 'go'?",
        options: ["goed", "gone", "went", "going"],
        correct: 2,
    },
    {
        question: "Which sentence uses the correct punctuation?",
        options: [
            "Where are you going.",
            "Where are you going?",
            "Where are you going!",
            "Where are you going,",
        ],
        correct: 1,
    },
    {
        question: "What is the opposite of 'cheap'?",
        options: ["Costly", "Short", "Thin", "Slow"],
        correct: 0,
    },
    {
        question:
            "Choose the correct preposition: 'The book is ___ the table.'",
        options: ["in", "on", "at", "between"],
        correct: 1,
    },
    {
        question: "Which word is a pronoun?",
        options: ["Table", "Beautiful", "They", "City"],
        correct: 2,
    },
    {
        question: "Complete the sentence: 'If it rains, we ___ at home.'",
        options: ["stay", "stays", "stayed", "staying"],
        correct: 0,
    },
    {
        question: "What does 'brave' mean?",
        options: ["Fearful", "Courageous", "Lazy", "Silent"],
        correct: 1,
    },
    {
        question: "Which is the correct comparative form of 'good'?",
        options: ["Gooder", "Better", "Best", "More good"],
        correct: 1,
    },
    {
        question:
            "Choose the correct passive sentence: 'The letter ___ yesterday.'",
        options: ["was sent", "is send", "sent was", "sends"],
        correct: 0,
    },
    {
        question: "Which word is a conjunction?",
        options: ["Because", "Quickly", "Rainbow", "Honest"],
        correct: 0,
    },
    {
        question: "What is the meaning of 'ancient'?",
        options: ["Modern", "Very old", "New", "Bright"],
        correct: 1,
    },
    {
        question: "Which sentence is grammatically correct?",
        options: [
            "I have went there.",
            "I have gone there.",
            "I has gone there.",
            "I gone there.",
        ],
        correct: 1,
    },
    {
        question: "What is the superlative form of 'small'?",
        options: ["Smaller", "Smallest", "Most small", "Smallly"],
        correct: 1,
    },
    {
        question:
            "Choose the correct answer: 'Neither Ali nor his friends ___ late.'",
        options: ["is", "are", "was", "be"],
        correct: 1,
    },
    {
        question: "Which sentence is in the future tense?",
        options: [
            "She writes a letter.",
            "She wrote a letter.",
            "She will write a letter.",
            "She is writing a letter.",
        ],
        correct: 2,
    },
    {
        question:
            "Identify the adverb in this sentence: 'She spoke very softly.'",
        options: ["She", "spoke", "very", "softly"],
        correct: 2,
    },
    {
        question: "What is the synonym of 'rapid'?",
        options: ["Slow", "Fast", "Weak", "Short"],
        correct: 1,
    },
    {
        question:
            "Choose the correct relative pronoun: 'This is the man ___ helped me.'",
        options: ["who", "which", "where", "whose"],
        correct: 0,
    },
    {
        question:
            "Complete the sentence: 'By the time we arrived, the film ___.'",
        options: ["has started", "had started", "starts", "was start"],
        correct: 1,
    },
    {
        question: "What does 'enormous' mean?",
        options: ["Tiny", "Huge", "Quiet", "Brave"],
        correct: 1,
    },
    {
        question:
            "Choose the correct form: 'If I ___ enough money, I would travel.'",
        options: ["have", "had", "will have", "has"],
        correct: 1,
    },
    {
        question: "Which word is a synonym of 'difficult'?",
        options: ["Easy", "Hard", "Light", "Quick"],
        correct: 1,
    },
];
const biologyQuestions = [
    {
        question: "ما هو أكبر عضو في جسم الإنسان؟",
        options: ["القلب", "الكبد", "الجلد", "الرئة"],
        correct: 2,
    },
    {
        question: "ما هي الوحدة الأساسية للحياة؟",
        options: ["الخلية", "العضو", "النسيج", "الجهاز"],
        correct: 0,
    },
    {
        question: "ما هو الحمض النووي الذي يحمل المعلومات الوراثية؟",
        options: ["RNA", "DNA", "ATP", "Protein"],
        correct: 1,
    },
    {
        question: "أي عضو مسؤول عن ضخ الدم في الجسم؟",
        options: ["الرئة", "المعدة", "القلب", "الكبد"],
        correct: 2,
    },
    {
        question: "ما هو اسم الخلية الجنسية الأنثوية؟",
        options: ["حيوان منوي", "بويضة", "خلية دم", "عصب"],
        correct: 1,
    },
    {
        question: "أي جزء من الخلية يحميها من الخارج؟",
        options: ["النواة", "الغشاء الخلوي", "الميتوكوندريا", "الريبوسوم"],
        correct: 1,
    },
    {
        question: "ما اسم العملية التي يتم فيها تبادل الغازات في الرئتين؟",
        options: ["الهضم", "التنفس", "التمثيل", "التمثيل الغذائي"],
        correct: 1,
    },
    {
        question: "ما هو الاسم العلمي للسكر الذي يوفر الطاقة للخلية؟",
        options: ["الأملاح", "الجلوكوز", "الليبيد", "البروتين"],
        correct: 1,
    },
    {
        question: "أي جزء من الجهاز الهضمي يمتص معظم العناصر الغذائية؟",
        options: ["المعدة", "الأمعاء الدقيقة", "الكبد", "القولون"],
        correct: 1,
    },
    {
        question: "ما هو لون الدم عندما يكون غنيًا بالأكسجين؟",
        options: ["أسود", "أحمر داكن", "أزرق", "أخضر"],
        correct: 1,
    },
    {
        question: "ما هي المادة المسؤولة عن ترميز الصفات الوراثية؟",
        options: ["الدم", "الحمض النووي", "البروتين", "السكر"],
        correct: 1,
    },
    {
        question: "أي من هذه الخلايا لا تحتوي على نواة؟",
        options: [
            "خلية نباتية",
            "خلية حيوانية",
            "خلية دم حمراء",
            "خلية عصبية",
        ],
        correct: 2,
    },
    {
        question: "ما اسم العملية التي تغير النبات من البذور إلى نبات جديد؟",
        options: ["التكاثر", "الاستقلاب", "التوازن", "الإفراز"],
        correct: 0,
    },
    {
        question: "ما هو العضو المسؤول عن تنقية الدم؟",
        options: ["الطحال", "الكلى", "المرارة", "الرئة"],
        correct: 1,
    },
    {
        question: "في أي جزء من النبات يحدث التمثيل الضوئي؟",
        options: ["الجذر", "الساق", "الأوراق", "الثمرة"],
        correct: 2,
    },
    {
        question: "ما هو اسم الخيط الذي يحمل المعلومات الوراثية داخل النواة؟",
        options: ["الهيكل الخلوي", "الكروموسوم", "الميتوكوندريا", "الغشاء"],
        correct: 1,
    },
    {
        question: "ما هي أصغر وحدة بناء في البروتين؟",
        options: ["حمض أميني", "سكر", "دهن", "نيوكليوتيد"],
        correct: 0,
    },
    {
        question: "أي جزء من الجسد يربط العظام بالعضلات؟",
        options: ["الأوعية", "الأوتار", "الأنسجة", "الدم"],
        correct: 1,
    },
    {
        question: "ما هي الوظيفة الأساسية للحمض النووي RNA؟",
        options: [
            "تخزين الطاقة",
            "نقل المعلومات الوراثية",
            "حماية الخلايا",
            "تكوين الدم",
        ],
        correct: 1,
    },
    {
        question: "أي من هذه الكائنات لا تمتلك نواة في خلاياها؟",
        options: ["الفطر", "البكتيريا", "النبات", "الحيوان"],
        correct: 1,
    },
    {
        question: "ما اسم الأنسجة التي تنقل الماء والأملاح في النبات؟",
        options: ["اللحاء", "الخشب", "البرعم", "النسغ"],
        correct: 1,
    },
    {
        question: "أي عضو في جسم الإنسان يفرز الأنسولين؟",
        options: ["الكبد", "البنكرياس", "الطحال", "المثانة"],
        correct: 1,
    },
    {
        question: "ما هي الوظيفة الأساسية للميتوكوندريا؟",
        options: [
            "تخزين الماء",
            "إنتاج الطاقة",
            "تكوين البروتين",
            "نقل الأكسجين",
        ],
        correct: 1,
    },
    {
        question:
            "ما اسم الحالة التي يتنفس فيها الكائن الحي دون استخدام الأكسجين؟",
        options: ["التمثيل الضوئي", "التخمر", "التنفس الخلوي", "الهواء"],
        correct: 1,
    },
    {
        question: "أي من هذه الخلايا يوجد في النخاع العظمي؟",
        options: [
            "خلايا الدم الحمراء",
            "الخلية النباتية",
            "الخلايا العصبية",
            "الفطر",
        ],
        correct: 0,
    },
    {
        question: "ما هي المنطقة المسؤولة عن التمثيل الضوئي داخل النبات؟",
        options: ["الجذور", "الأوراق", "الزهور", "التربة"],
        correct: 1,
    },
    {
        question: "أي من هذه الجزيئات يحمل الشفرة الوراثية؟",
        options: ["السكر", "الحمض النووي", "الكلوروفيل", "الفيتامين"],
        correct: 1,
    },
    {
        question: "في علم الأحياء، ما المقصود بالانتخاب الطبيعي؟",
        options: [
            "اختيار الإنسان للنباتات",
            "بقاء الأنسب للتكاثر",
            "حركة الأعضاء",
            "تغير مفاجئ في البيئة",
        ],
        correct: 1,
    },
    {
        question: "أي من هذه الأعضاء يساعد في التوازن داخل الجسم؟",
        options: ["الأذن الداخلية", "الكبد", "المرارة", "الملحق"],
        correct: 0,
    },
    {
        question: "ما هي الوحدة الأساسية للتنوع الوراثي؟",
        options: ["الخلية", "الجين", "النسيج", "العضو"],
        correct: 1,
    },
];
let timerEl = document.getElementById("timer");
let timerInterval;
let startTime = 120000;
let timeLeft = startTime;
let isTimeExpired = false;

const quizData = [];

function updateTimerDisplay() {
    const totalSeconds = Math.ceil(timeLeft / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    timerEl.textContent = `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = startTime;
    isTimeExpired = false;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeLeft -= 1000;

        if (timeLeft <= 0) {
            timeLeft = 0;
            isTimeExpired = true;
            updateTimerDisplay();
            clearInterval(timerInterval);
            showResults();
            return;
        }

        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function selectCategory(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    quizData.length = 0;
    quizData.push(...questions.slice(0, 15));

    currentQuestionIndex = 0;
    score = 0;
    userAnswers.length = 0;
    startTimer();
    loadQuestion();
    document.querySelector(".cat-choice").style.display = "none";
    document.getElementById("quiz-section").style.direction = questions === englishQuestions ? "ltr" : "rtl";
    textalign = questions === englishQuestions ? "left" : "right";
    document.getElementById("quiz-section").style.display = "block";
}
let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;
let userAnswers = [];

const questionTextEl = document.getElementById("question-text");
const optionsContainerEl = document.getElementById("options-container");
const nextBtnEl = document.getElementById("next-btn");
const progressEl = document.getElementById("progress");

function loadQuestion() {

    selectedOptionIndex = null;
    nextBtnEl.disabled = true;

    const currentData = quizData[currentQuestionIndex];
    progressEl.textContent = `السؤال ${currentQuestionIndex + 1} من ${quizData.length}`;
    questionTextEl.textContent = currentData.question;

    optionsContainerEl.innerHTML = "";
    currentData.options.forEach((optionText, index) => {
        const button = document.createElement("button");
        button.className = "option-btn";
        button.textContent = optionText;
        button.onclick = () => selectOption(index, button);
        optionsContainerEl.appendChild(button);
    });


    if (currentQuestionIndex === quizData.length - 1) {
        nextBtnEl.textContent = "إنهاء الاختبار وإظهار النتيجة";
    } else {
        nextBtnEl.textContent = "السؤال التالي";
    }
}

function selectOption(index, button) {
    selectedOptionIndex = index;

    // إزالة التحديد من جميع الأزرار
    const buttons = optionsContainerEl.querySelectorAll(".option-btn");
    buttons.forEach((btn) => btn.classList.remove("selected"));

    // تحديد الزر المختار
    button.classList.add("selected");

    // تفعيل زر الانتقال
    nextBtnEl.disabled = false;
}

function handleNext() {
    if (selectedOptionIndex === null) return;

    // حفظ إجابة المستخدم
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        selected: selectedOptionIndex,
    });

    // التحقق من صحة الإجابة
    if (selectedOptionIndex === quizData[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    stopTimer();

    const answeredIndexes = new Set(userAnswers.map((answer) => answer.questionIndex));
    quizData.forEach((question, index) => {
        if (!answeredIndexes.has(index)) {
            userAnswers.push({
                questionIndex: index,
                selected: null,
                skipped: true,
            });
        }
    });

    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("result-section").style.display = "block";

    const scoreDisplay = document.getElementById("score-display");
    scoreDisplay.textContent = `درجتك: ${score} من ${quizData.length}`;

    const wrongListEl = document.getElementById("wrong-list");
    wrongListEl.innerHTML = "";

    let hasWrongAnswers = false;

    userAnswers.forEach((answer) => {
        const questionData = quizData[answer.questionIndex];
        const isCorrect = answer.selected === questionData.correct;

        if (!isCorrect) {
            hasWrongAnswers = true;

            const wrongItem = document.createElement("div");
            wrongItem.className = "wrong-item";

            const userAnswerText =
                answer.selected === null
                    ? "لم تجب"
                    : questionData.options[answer.selected];

            wrongItem.innerHTML = `
                      <div class="wrong-title">${questionData.question}</div>
                      <div class="answer-detail your-answer">إجابتك: ${userAnswerText}</div>
                      <div class="answer-detail correct-answer">الإجابة الصحيحة: ${questionData.options[questionData.correct]}</div>
                  `;

            wrongListEl.appendChild(wrongItem);
        }
    });

    if (!hasWrongAnswers) {
        document.getElementById("wrong-section").innerHTML =
            '<p style="color: #16a34a; text-align: center; font-weight: bold;">ممتاز! جميع إجاباتك كانت صحيحة.</p>';
    }
}

function restartQuiz() {
    location.reload();
}