// =========================================
// Love Rashifal - Complete Application
// =========================================

// ===== ZODIAC DATA =====
const zodiacData = {
    aries: {
        name: { hi: 'मेष', en: 'Aries' },
        symbol: '♈',
        emoji: '🔥',
        element: { hi: 'अग्नि', en: 'Fire' },
        love: {
            hi: [
                'आपकी उत्साही ऊर्जा आज किसी खास को आकर्षित करेगी ❤️',
                'एक अप्रत्याशित रोमांटिक इशारा आपका दिल चुरा लेगा 💕',
                'अकेले लोगों को किसी मित्र के माध्यम से प्यार मिल सकता है 💑',
                'अपनी भावनाओं को खुलकर व्यक्त करें - समय सही है 💌',
                'एक सरप्राइज डेट आपका दिन बना सकती है 🌹'
            ],
            en: [
                'Your passionate energy attracts someone special today ❤️',
                'An unexpected romantic gesture will make your heart skip 💕',
                'Singles may find love through a mutual friend 💑',
                'Express your feelings openly - the time is right 💌',
                'A surprise date invitation could change everything 🌹'
            ]
        },
        advice: {
            hi: 'दिल के मामलों में बहादुर बनें लेकिन धैर्य रखें 💪',
            en: 'Be bold but patient in matters of the heart 💪'
        }
    },
    taurus: {
        name: { hi: 'वृषभ', en: 'Taurus' },
        symbol: '♉',
        emoji: '🌹',
        element: { hi: 'पृथ्वी', en: 'Earth' },
        love: {
            hi: [
                'आपकी वफादारी और गर्मजोशी रिश्ते को और गहरा करेगी 💞',
                'एक रोमांटिक डिनर शाम को जादुई बना सकता है ✨',
                'आपका स्थिर स्वभाव आपको अप्रतिरोध्य बनाता है 💖',
                'कोई आपकी प्रशंसा कर रहा है - पहला कदम बढ़ाएं 🌸',
                'एक दिल की बात आपके रिश्ते को मजबूत करेगी 💕'
            ],
            en: [
                'Your loyalty and warmth will deepen an existing bond 💞',
                'A romantic dinner could lead to a magical evening ✨',
                'Your steady nature makes you irresistible today 💖',
                'Someone admires you from afar - make the first move 🌸',
                'A heartfelt conversation will strengthen your connection 💕'
            ]
        },
        advice: {
            hi: 'प्यार की धीमी और स्थिर लय पर भरोसा करें 🌊',
            en: 'Trust the slow and steady rhythm of love 🌊'
        }
    },
    gemini: {
        name: { hi: 'मिथुन', en: 'Gemini' },
        symbol: '♊',
        emoji: '💬',
        element: { hi: 'वायु', en: 'Air' },
        love: {
            hi: [
                'आपकी बुद्धिमत्ता और आकर्षण किसी नए को मोहित करेगी ✨',
                'एक गहरी बातचीत रोमांटिक चिंगारी पैदा कर सकती है 💕',
                'प्यार आपको सबसे अप्रत्याशित जगहों पर मिलता है 🌟',
                'आपकी चंचल ऊर्जा सकारात्मक ध्यान आकर्षित करती है 💫',
                'क्रश का संदेश आपका दिन रोशन कर सकता है 📱'
            ],
            en: [
                'Your wit and charm will captivate someone new ✨',
                'A deep conversation could spark a romantic flame 💕',
                'Love finds you in the most unexpected places 🌟',
                'Your playful energy attracts positive attention 💫',
                'A message from a crush might brighten your day 📱'
            ]
        },
        advice: {
            hi: 'अपनी जिज्ञासा को नए कनेक्शन की ओर ले जाने दें 🦋',
            en: 'Let your curiosity guide you to new connections 🦋'
        }
    },
    cancer: {
        name: { hi: 'कर्क', en: 'Cancer' },
        symbol: '♋',
        emoji: '🌊',
        element: { hi: 'जल', en: 'Water' },
        love: {
            hi: [
                'आपका देखभाल करने वाला स्वभाव आपको पार्टनर के करीब लाएगा 💕',
                'पार्टनर का रोमांटिक इशारा आपका दिल गर्म करेगा 💖',
                'अकेले लोगों को किसी परिचित चेहरे में प्यार मिल सकता है 🌸',
                'अपने अंतर्ज्ञान पर भरोसा करें - यह प्यार का रास्ता जानता है 🌙',
                'घर वह जगह है जहां दिल है - एक आरामदायक डेट प्लान करें 🏠'
            ],
            en: [
                'Your nurturing nature will bring you closer to your partner 💕',
                'A romantic gesture from your partner will warm your heart 💖',
                'Singles may find love in a familiar face 🌸',
                'Trust your intuition - it knows the way to love 🌙',
                'Home is where the heart is - plan a cozy date 🏠'
            ]
        },
        advice: {
            hi: 'आपकी भावनात्मक गहराई आपकी सबसे बड़ी ताकत है 💎',
            en: 'Your emotional depth is your greatest strength 💎'
        }
    },
    leo: {
        name: { hi: 'सिंह', en: 'Leo' },
        symbol: '♌',
        emoji: '👑',
        element: { hi: 'अग्नि', en: 'Fire' },
        love: {
            hi: [
                'आपका करिश्मा आज चमकता है, प्रशंसकों को आकर्षित करता है ✨',
                'एक शानदार रोमांटिक इशारा आपको प्यार का एहसास दिलाएगा 💕',
                'आपका आत्मविश्वास आपको दूसरों के लिए चुंबकीय बनाता है 🧲',
                'प्यार आज आपके जीवन में केंद्र स्थान लेता है 🌟',
                'एक भावुक मुलाकात कुछ और बन सकती है 💖'
            ],
            en: [
                'Your charisma shines bright today, attracting admirers ✨',
                'A grand romantic gesture will leave you feeling adored 💕',
                'Your confidence makes you magnetic to others 🧲',
                'Love takes center stage in your life today 🌟',
                'A passionate encounter could become something more 💖'
            ]
        },
        advice: {
            hi: 'अपने दिल को प्यार और आत्मविश्वास से दहाड़ने दें 🦁',
            en: 'Let your heart roar with love and confidence 🦁'
        }
    },
    virgo: {
        name: { hi: 'कन्या', en: 'Virgo' },
        symbol: '♍',
        emoji: '📝',
        element: { hi: 'पृथ्वी', en: 'Earth' },
        love: {
            hi: [
                'विवरणों पर आपका ध्यान पार्टनर को खास महसूस कराता है 💕',
                'एक विचारशील इशारा आपके प्यार के बारे में बहुत कुछ बताएगा 💌',
                'प्यार छोटे-छोटे पलों में बढ़ता है - उन्हें अपनाएं 🌸',
                'आपका व्यावहारिक स्वभाव रिश्तों में स्थिरता लाता है 🏠',
                'एक सार्थक बातचीत आपके बंधन को गहरा करेगी 💞'
            ],
            en: [
                'Your attention to detail makes your partner feel cherished 💕',
                'A thoughtful gesture will speak volumes about your love 💌',
                'Love grows in the little moments - embrace them 🌸',
                'Your practical nature brings stability to relationships 🏠',
                'A meaningful conversation will deepen your bond 💞'
            ]
        },
        advice: {
            hi: 'पूर्णता लक्ष्य नहीं है - प्यार और विकास है 🌱',
            en: "Perfection isn't the goal - love and growth are 🌱"
        }
    },
    libra: {
        name: { hi: 'तुला', en: 'Libra' },
        symbol: '♎',
        emoji: '⚖️',
        element: { hi: 'वायु', en: 'Air' },
        love: {
            hi: [
                'आपका आकर्षण और कूटनीति किसी भी संघर्ष को सुलझाएगी 🤝',
                'एक रोमांटिक साझेदारी सुंदर मोड़ लेती है 💕',
                'निष्पक्षता की आपकी भावना आपको एक अद्भुत पार्टनर बनाती है 💖',
                'प्यार आज आपके जीवन में सामंजस्य पाता है 🌈',
                'एक खूबसूरत डेट कुछ नई शुरुआत हो सकती है 🌹'
            ],
            en: [
                'Your charm and diplomacy will smooth over any conflict 🤝',
                'A romantic partnership takes a beautiful turn 💕',
                'Your sense of fairness makes you a wonderful partner 💖',
                'Love finds harmony in your life today 🌈',
                'A beautiful date could be the start of something new 🌹'
            ]
        },
        advice: {
            hi: 'सर्वोत्तम परिणामों के लिए अपने दिल और दिमाग को संतुलित करें ⚖️',
            en: 'Balance your heart and your head for the best outcomes ⚖️'
        }
    },
    scorpio: {
        name: { hi: 'वृश्चिक', en: 'Scorpio' },
        symbol: '♏',
        emoji: '🦂',
        element: { hi: 'जल', en: 'Water' },
        love: {
            hi: [
                'आपका गहन जुनून आज एक गहरा संबंध बनाएगा 🔥',
                'एक गुप्त क्रश आखिरकार सामने आ सकता है 💕',
                'अपनी प्रवृत्ति पर भरोसा करें - वे आपको प्यार की ओर ले जा रही हैं 🌙',
                'आपकी चुंबकीय उपस्थिति दूसरों को आकर्षित करती है 🧲',
                'आपके प्रेम जीवन में एक परिवर्तन क्षितिज पर है 🌅'
            ],
            en: [
                'Your intense passion will create a deep connection today 🔥',
                'A secret crush may finally be revealed 💕',
                'Trust your instincts - they\'re guiding you toward love 🌙',
                'Your magnetic presence draws others to you 🧲',
                'A transformation in your love life is on the horizon 🌅'
            ]
        },
        advice: {
            hi: 'भेद्यता वास्तविक अंतरंगता को खोलने की कुंजी है 🔑',
            en: 'Vulnerability is the key to unlocking true intimacy 🔑'
        }
    },
    sagittarius: {
        name: { hi: 'धनु', en: 'Sagittarius' },
        symbol: '♐',
        emoji: '🏹',
        element: { hi: 'अग्नि', en: 'Fire' },
        love: {
            hi: [
                'आपकी साहसिक भावना आपको एक रोमांचक रोमांस की ओर ले जाएगी 🌟',
                'प्यार एक यात्रा है - हर कदम का आनंद लें 🚀',
                'आपका आशावाद संक्रामक और आकर्षक है 💫',
                'एक मजेदार यात्रा रोमांटिक याद बन सकती है 🌄',
                'आपकी ईमानदारी आपके रिश्ते को मजबूत करेगी 💪'
            ],
            en: [
                'Your adventurous spirit will lead you to an exciting romance 🌟',
                'Love is a journey - enjoy every step of it 🚀',
                'Your optimism is contagious and attractive 💫',
                'A fun outing could turn into a romantic memory 🌄',
                'Your honesty will strengthen your relationship 💪'
            ]
        },
        advice: {
            hi: 'प्यार सबसे बड़ा साहसिक कार्य है 🌍',
            en: 'Love is the greatest adventure of all 🌍'
        }
    },
    capricorn: {
        name: { hi: 'मकर', en: 'Capricorn' },
        symbol: '♑',
        emoji: '🏔️',
        element: { hi: 'पृथ्वी', en: 'Earth' },
        love: {
            hi: [
                'आपका समर्पण गहरे प्यार से पुरस्कृत होगा 💎',
                'एक रोमांटिक मील का पत्थर पहुंच के भीतर है 🏆',
                'आपका जिम्मेदार स्वभाव आपको एक विश्वसनीय पार्टनर बनाता है 🤝',
                'प्यार विश्वास और सम्मान की नींव पर बनता है 🏠',
                'एक सार्थक प्रतिबद्धता क्षितिज पर हो सकती है 💍'
            ],
            en: [
                'Your dedication will be rewarded with deep love 💎',
                'A romantic milestone is within reach 🏆',
                'Your responsible nature makes you a reliable partner 🤝',
                'Love builds on a foundation of trust and respect 🏠',
                'A meaningful commitment could be on the horizon 💍'
            ]
        },
        advice: {
            hi: 'प्यार में सफलता धैर्य और प्रयास से मिलती है 🌱',
            en: 'Success in love comes from patience and effort 🌱'
        }
    },
    aquarius: {
        name: { hi: 'कुंभ', en: 'Aquarius' },
        symbol: '♒',
        emoji: '💡',
        element: { hi: 'वायु', en: 'Air' },
        love: {
            hi: [
                'आपका अनोखा दृष्टिकोण एक समान विचारधारा को आकर्षित करेगा ✨',
                'प्यार अपरंपरागत रूपों में आता है - इसे अपनाएं 🌈',
                'आपकी स्वतंत्रता आपको दूसरों के लिए आकर्षक बनाती है 💫',
                'एक रचनात्मक डेट आइडिया स्थायी प्रभाव छोड़ेगा 🎨',
                'आपकी प्रामाणिकता आपका सबसे आकर्षक गुण है 💎'
            ],
            en: [
                'Your unique perspective will attract a kindred spirit ✨',
                'Love comes in unconventional forms - embrace it 🌈',
                'Your independence makes you fascinating to others 💫',
                'A creative date idea will leave a lasting impression 🎨',
                'Your authenticity is your most attractive quality 💎'
            ]
        },
        advice: {
            hi: 'अपने आप से सच्चे रहें - सही प्यार आपका पीछा करेगा 🌟',
            en: 'Stay true to yourself - the right love will follow 🌟'
        }
    },
    pisces: {
        name: { hi: 'मीन', en: 'Pisces' },
        symbol: '♓',
        emoji: '🐟',
        element: { hi: 'जल', en: 'Water' },
        love: {
            hi: [
                'आपकी सहानुभूति और करुणा आपके संबंध को गहरा करेगी 💕',
                'एक रोमांटिक सपना एक खूबसूरत वास्तविकता बन सकता है 🌙',
                'आपकी कलात्मक आत्मा प्यार और प्रशंसा को आकर्षित करती है 🎨',
                'आपका एक दयालु शब्द किसी का दिन बना सकता है 💫',
                'प्यार पानी की तरह बहता है - इसे आपका मार्गदर्शन करने दें 🌊'
            ],
            en: [
                'Your empathy and compassion will deepen your connection 💕',
                'A romantic dream could become a beautiful reality 🌙',
                'Your artistic soul attracts love and admiration 🎨',
                'A kind word from you could make someone\'s day 💫',
                'Love flows like water - let it guide you 🌊'
            ]
        },
        advice: {
            hi: 'आपका दिल रास्ता जानता है - अपने सपनों पर भरोसा करें 🌙',
            en: 'Your heart knows the way - trust your dreams 🌙'
        }
    }
};

// ===== MATCH RASHI DATA =====
const matchRashi = {
    aries: { best: ['leo', 'sagittarius'], good: ['gemini', 'libra'], avoid: ['cancer', 'capricorn'] },
    taurus: { best: ['virgo', 'capricorn'], good: ['cancer', 'pisces'], avoid: ['leo', 'aquarius'] },
    gemini: { best: ['libra', 'aquarius'], good: ['aries', 'leo'], avoid: ['virgo', 'pisces'] },
    cancer: { best: ['scorpio', 'pisces'], good: ['taurus', 'virgo'], avoid: ['aries', 'libra'] },
    leo: { best: ['aries', 'sagittarius'], good: ['gemini', 'libra'], avoid: ['taurus', 'scorpio'] },
    virgo: { best: ['taurus', 'capricorn'], good: ['cancer', 'scorpio'], avoid: ['gemini', 'sagittarius'] },
    libra: { best: ['gemini', 'aquarius'], good: ['aries', 'leo'], avoid: ['cancer', 'capricorn'] },
    scorpio: { best: ['cancer', 'pisces'], good: ['virgo', 'capricorn'], avoid: ['leo', 'aquarius'] },
    sagittarius: { best: ['aries', 'leo'], good: ['libra', 'aquarius'], avoid: ['virgo', 'pisces'] },
    capricorn: { best: ['taurus', 'virgo'], good: ['scorpio', 'pisces'], avoid: ['aries', 'libra'] },
    aquarius: { best: ['gemini', 'libra'], good: ['aries', 'sagittarius'], avoid: ['taurus', 'scorpio'] },
    pisces: { best: ['cancer', 'scorpio'], good: ['taurus', 'capricorn'], avoid: ['gemini', 'sagittarius'] }
};

// ===== INSPIRATIONS =====
const inspirations = {
    hi: [
        '"प्यार वह ताकत है जो दिलों को जोड़ती है और आत्माओं को ऊपर उठाती है ❤️"',
        '"सच्चा प्यार वह नहीं जो मुश्किलों को देखता है, बल्कि वह जो उन्हें सहता है 💕"',
        '"प्यार में छोटी-छोटी बातें ही सबसे बड़ा अर्थ रखती हैं 🌸"',
        '"हर दिन प्यार का नया दिन है, इसे पूरी तरह जियो 💖"',
        '"प्यार की भाषा शब्दों से नहीं, दिल से बोली जाती है 💌"'
    ],
    en: [
        '"Love is the force that connects hearts and elevates souls ❤️"',
        '"True love is not the one that sees difficulties, but the one that endures them 💕"',
        '"In love, the little things hold the greatest meaning 🌸"',
        '"Every day is a new day of love, live it fully 💖"',
        '"The language of love is spoken not with words, but with the heart 💌"'
    ]
};

// ===== APP STATE =====
let currentFeature = 'horoscope';
let currentSign = null;
let currentLang = 'hi';
let currentTheme = 'dark';
let currentResultText = '';

// ===== DOM ELEMENTS =====
const loadingScreen = document.getElementById('loadingScreen');
const progressFill = document.querySelector('.progress-fill');
const loadingText = document.getElementById('loadingText');
const mainApp = document.getElementById('mainApp');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');
const currentDateDisplay = document.getElementById('currentDate');
const todayDay = document.getElementById('todayDay');
const featureCards = document.querySelectorAll('.feature-card');
const zodiacItems = document.querySelectorAll('.zodiac-item');
const resultPlaceholder = document.getElementById('resultPlaceholder');
const resultContent = document.getElementById('resultContent');
const shareSection = document.getElementById('shareSection');
const shareDropdown = document.getElementById('shareDropdown');
const shareResultBtn = document.getElementById('shareResultBtn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const toastIcon = document.getElementById('toastIcon');
const inspirationText = document.getElementById('inspirationText');
const inspirationSource = document.getElementById('inspirationSource');

// ===== LOADING =====
function startLoading() {
    let progress = 0;
    const steps = [
        { progress: 15, text: '🌟 राशियाँ लोड हो रही हैं...' },
        { progress: 30, text: '💫 ज्योतिषीय गणना हो रही है...' },
        { progress: 50, text: '❤️ प्रेम ऊर्जा मापी जा रही है...' },
        { progress: 70, text: '✨ आपके लिए तैयार किया जा रहा है...' },
        { progress: 90, text: '🌈 लगभग तैयार...' },
        { progress: 100, text: '🎉 तैयार! आपका राशिफल इंतज़ार कर रहा है...' }
    ];

    let stepIndex = 0;
    
    const interval = setInterval(() => {
        progress += 1.5;
        progressFill.style.width = progress + '%';
        
        if (stepIndex < steps.length && progress >= steps[stepIndex].progress) {
            loadingText.textContent = steps[stepIndex].text;
            stepIndex++;
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.classList.add('hide');
                mainApp.style.display = 'block';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    initApp();
                }, 800);
            }, 400);
        }
    }, 40);
}

// ===== TOAST =====
function showToast(message, icon = 'fa-check-circle') {
    toastMessage.textContent = message;
    toastIcon.className = `fas ${icon}`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== FORMAT DATE =====
function formatDate(lang) {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return now.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-US', options);
}

function getDayName(lang) {
    const now = new Date();
    const options = { weekday: 'long' };
    return now.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-US', options);
}

// ===== RANDOM HELPER =====
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// ===== GET LOVE SCORE =====
function getLoveScore(sign) {
    const scores = {
        aries: 85, taurus: 88, gemini: 80, cancer: 90,
        leo: 92, virgo: 78, libra: 86, scorpio: 94,
        sagittarius: 82, capricorn: 76, aquarius: 84, pisces: 89
    };
    const base = scores[sign] || 80;
    const variation = Math.floor(Math.random() * 12) - 6;
    return Math.min(99, Math.max(60, base + variation));
}

// ===== GET MOOD =====
function getMood(sign) {
    const moods = [
        { emoji: '😊', text: { hi: 'खुश', en: 'Happy' }, score: 85 },
        { emoji: '🥰', text: { hi: 'प्यार में', en: 'In Love' }, score: 90 },
        { emoji: '😌', text: { hi: 'शांत', en: 'Calm' }, score: 75 },
        { emoji: '🤗', text: { hi: 'उत्साहित', en: 'Excited' }, score: 88 },
        { emoji: '😍', text: { hi: 'मोहित', en: 'Charmed' }, score: 92 },
        { emoji: '🤔', text: { hi: 'सोच में', en: 'Thoughtful' }, score: 70 },
        { emoji: '💕', text: { hi: 'रोमांटिक', en: 'Romantic' }, score: 95 },
        { emoji: '😇', text: { hi: 'शुभ', en: 'Blissful' }, score: 80 }
    ];
    return getRandom(moods);
}

// ===== GET LUCKY NUMBER =====
function getLuckyNumber(sign) {
    const numbers = {
        aries: 7, taurus: 3, gemini: 5, cancer: 2,
        leo: 1, virgo: 4, libra: 6, scorpio: 9,
        sagittarius: 8, capricorn: 3, aquarius: 7, pisces: 4
    };
    const base = numbers[sign] || 5;
    return base + Math.floor(Math.random() * 3);
}

// ===== GET MATCH RASHI =====
function getMatchRashi(sign, lang) {
    const data = matchRashi[sign];
    if (!data) return null;
    
    const best = data.best.map(s => zodiacData[s].name[lang] + ' ' + zodiacData[s].symbol);
    const good = data.good.map(s => zodiacData[s].name[lang] + ' ' + zodiacData[s].symbol);
    const avoid = data.avoid.map(s => zodiacData[s].name[lang] + ' ' + zodiacData[s].symbol);
    
    return { best, good, avoid };
}

// ===== SHOW FEATURE =====
function showFeature(feature) {
    currentFeature = feature;
    
    featureCards.forEach(card => {
        card.classList.remove('active');
        if (card.dataset.feature === feature) {
            card.classList.add('active');
        }
    });
    
    // Reset if sign was selected
    if (currentSign) {
        generateResult(currentSign, currentFeature, currentLang);
    } else {
        resultPlaceholder.style.display = 'block';
        resultContent.style.display = 'none';
        shareSection.style.display = 'none';
        
        const titles = {
            horoscope: { hi: '🌟 दैनिक राशिफल', en: '🌟 Daily Horoscope' },
            match: { hi: '💑 मैच राशि', en: '💑 Match Rashi' },
            mood: { hi: '😊 मूड स्कोर', en: '😊 Mood Score' },
            love: { hi: '💕 लव स्कोर', en: '💕 Love Score' },
            advice: { hi: '💡 आज की सलाह', en: '💡 Today\'s Advice' },
            lucky: { hi: '🎲 लकी नंबर', en: '🎲 Lucky Number' }
        };
        
        document.getElementById('placeholderTitle').textContent = 
            titles[feature][currentLang] || titles[feature].hi;
        document.getElementById('placeholderText').textContent = 
            currentLang === 'hi' ? 'राशि चुनें और फीचर चुनें' : 'Select zodiac and feature';
    }
    
    // Scroll to result
    document.getElementById('resultPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== GENERATE RESULT =====
function generateResult(sign, feature, lang) {
    const data = zodiacData[sign];
    if (!data) return;
    
    let html = '';
    let shareText = '';
    const signName = data.name[lang] || data.name.hi;
    const symbol = data.symbol;
    const emoji = data.emoji;
    
    switch(feature) {
        case 'horoscope':
            const prediction = getRandom(data.love[lang] || data.love.hi);
            const advice = data.advice[lang] || data.advice.hi;
            const score = getLoveScore(sign);
            html = `
                <div class="result-card">
                    <span class="result-emoji">${emoji}</span>
                    <p class="result-text">${prediction}</p>
                    <div style="margin: 10px 0;">
                        <span style="color: var(--primary); font-weight: 600;">💫 ${lang === 'hi' ? 'सलाह' : 'Advice'}:</span>
                        <span class="result-text" style="font-size: 0.9rem;">${advice}</span>
                    </div>
                    <div class="result-meta">
                        <span><i class="fas fa-sun"></i> ${symbol} ${signName}</span>
                        <span><i class="fas fa-heart" style="color: var(--primary);"></i> ${score}%</span>
                    </div>
                </div>
            `;
            shareText = `🌟 ${symbol} ${signName} का आज का प्रेम राशिफल 🌟\n\n${prediction}\n\n💫 सलाह: ${advice}\n\n❤️ Love Rashifal`;
            break;
            
        case 'match':
            const match = getMatchRashi(sign, lang);
            if (match) {
                html = `
                    <div class="result-card">
                        <span class="result-emoji">💑</span>
                        <p class="result-title">${symbol} ${signName} के लिए राशि मिलान</p>
                        <div style="margin: 8px 0; text-align: left; padding: 0 10px;">
                            <p class="result-text">✅ <span style="color: #2ecc71;">${lang === 'hi' ? 'सर्वोत्तम' : 'Best'}</span>: ${match.best.join(', ')}</p>
                            <p class="result-text">👍 <span style="color: #f39c12;">${lang === 'hi' ? 'अच्छी' : 'Good'}</span>: ${match.good.join(', ')}</p>
                            <p class="result-text">❌ <span style="color: #e74c3c;">${lang === 'hi' ? 'टालें' : 'Avoid'}</span>: ${match.avoid.join(', ')}</p>
                        </div>
                    </div>
                `;
                shareText = `💑 ${symbol} ${signName} के लिए मैच राशि 💑\n\n✅ सर्वोत्तम: ${match.best.join(', ')}\n👍 अच्छी: ${match.good.join(', ')}\n❌ टालें: ${match.avoid.join(', ')}\n\n❤️ Love Rashifal`;
            }
            break;
            
        case 'mood':
            const mood = getMood(sign);
            html = `
                <div class="result-card">
                    <span class="result-emoji">${mood.emoji}</span>
                    <div class="result-score">${mood.score}%</div>
                    <p class="result-title">${lang === 'hi' ? 'आज का मूड' : "Today's Mood"}</p>
                    <p class="result-text">${mood.text[lang] || mood.text.hi}</p>
                    <div class="result-meta">
                        <span><i class="fas fa-smile"></i> ${lang === 'hi' ? 'सकारात्मक' : 'Positive'}</span>
                        <span><i class="fas fa-star" style="color: var(--accent);"></i> ${lang === 'hi' ? 'बहुत अच्छा' : 'Great'}</span>
                    </div>
                </div>
            `;
            shareText = `😊 ${symbol} ${signName} का आज का मूड 😊\n\n${mood.emoji} ${mood.text.hi} - ${mood.score}%\n\n✨ सकारात्मक ऊर्जा!\n\n❤️ Love Rashifal`;
            break;
            
        case 'love':
            const loveScore = getLoveScore(sign);
            const loveStatus = loveScore > 85 ? '🌹 आप प्यार में सराबोर हैं!' : 
                              loveScore > 70 ? '💕 प्यार अच्छा चल रहा है!' : 
                              '🌸 प्यार को थोड़ा समय दें';
            html = `
                <div class="result-card">
                    <span class="result-emoji">💕</span>
                    <div class="result-score" style="border-color: ${loveScore > 85 ? '#2ecc71' : loveScore > 70 ? '#f39c12' : '#e74c3c'};
                              color: ${loveScore > 85 ? '#2ecc71' : loveScore > 70 ? '#f39c12' : '#e74c3c'};">
                        ${loveScore}%
                    </div>
                    <p class="result-title">${lang === 'hi' ? 'प्रेम ऊर्जा स्कोर' : 'Love Energy Score'}</p>
                    <p class="result-text">${loveStatus}</p>
                    <div class="result-meta">
                        <span><i class="fas fa-heart" style="color: ${loveScore > 85 ? '#2ecc71' : loveScore > 70 ? '#f39c12' : '#e74c3c'};"></i> ${lang === 'hi' ? 'बहुत अच्छा' : 'Excellent'}</span>
                        <span><i class="fas fa-star"></i> ${loveScore}%</span>
                    </div>
                </div>
            `;
            shareText = `💕 ${symbol} ${signName} का लव स्कोर 💕\n\n${loveScore}%\n${loveStatus}\n\n❤️ Love Rashifal`;
            break;
            
        case 'advice':
            const tips = {
                hi: [
                    'अपने पार्टनर को एक छोटा सा सरप्राइज़ दें ❤️',
                    'आज अपने पार्टनर की तारीफ करना न भूलें 💕',
                    'एक-दूसरे के लिए समय निकालें 🌸',
                    'प्यार में ईमानदारी सबसे महत्वपूर्ण है 💌',
                    'अपने पार्टनर के सपनों को सुनें 🌟',
                    'एक-दूसरे की भावनाओं को समझें 💖'
                ],
                en: [
                    'Surprise your partner with something small ❤️',
                    "Don't forget to compliment your partner today 💕",
                    'Make time for each other 🌸',
                    'Honesty is most important in love 💌',
                    'Listen to your partner\'s dreams 🌟',
                    'Understand each other\'s feelings 💖'
                ]
            };
            const tip = getRandom(tips[lang] || tips.hi);
            const adviceText = data.advice[lang] || data.advice.hi;
            html = `
                <div class="result-card">
                    <span class="result-emoji">💡</span>
                    <p class="result-title">${lang === 'hi' ? 'आज की प्रेम सलाह' : "Today's Love Advice"}</p>
                    <p class="result-text" style="font-size: 1.1rem; font-weight: 500;">💌 ${tip}</p>
                    <p class="result-text" style="font-size: 0.9rem; margin-top: 6px;">🌟 ${adviceText}</p>
                    <div class="result-meta">
                        <span><i class="fas fa-quote-right"></i> ${lang === 'hi' ? 'स्वीकार करें' : 'Embrace'}</span>
                        <span><i class="fas fa-heart" style="color: var(--primary);"></i> ${lang === 'hi' ? 'अपनाएं' : 'Apply'}</span>
                    </div>
                </div>
            `;
            shareText = `💡 ${symbol} ${signName} के लिए आज की सलाह 💡\n\n💌 ${tip}\n\n🌟 ${adviceText}\n\n❤️ Love Rashifal`;
            break;
            
        case 'lucky':
            const luckyNum = getLuckyNumber(sign);
            const colors = ['🔴 लाल', '🟠 नारंगी', '🟡 पीला', '🟢 हरा', '🔵 नीला', '🟣 बैंगनी'];
            const luckyColor = colors[luckyNum % colors.length];
            const luckyTime = `${Math.floor(Math.random() * 12 + 8)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`;
            html = `
                <div class="result-card">
                    <span class="result-emoji">🎲</span>
                    <div class="result-score" style="font-size: 2.2rem; border-color: var(--accent); color: var(--accent);">
                        ${luckyNum}
                    </div>
                    <p class="result-title">${lang === 'hi' ? 'आज का लकी नंबर' : "Today's Lucky Number"}</p>
                    <p class="result-text">${lang === 'hi' ? 'भाग्यशाली रंग' : 'Lucky Color'}: ${luckyColor}</p>
                    <p class="result-text">⏰ ${lang === 'hi' ? 'शुभ समय' : 'Lucky Time'}: ${luckyTime}</p>
                    <div class="result-meta">
                        <span><i class="fas fa-dice"></i> ${lang === 'hi' ? 'शुभ' : 'Lucky'}</span>
                        <span><i class="fas fa-star" style="color: var(--accent);"></i> ${lang === 'hi' ? 'आज का दिन' : 'Today'}</span>
                    </div>
                </div>
            `;
            shareText = `🎲 ${symbol} ${signName} का आज का लकी नंबर 🎲\n\nलकी नंबर: ${luckyNum}\nभाग्यशाली रंग: ${luckyColor}\nशुभ समय: ${luckyTime}\n\n❤️ Love Rashifal`;
            break;
    }
    
    // Update UI
    resultPlaceholder.style.display = 'none';
    resultContent.style.display = 'block';
    resultContent.innerHTML = html;
    shareSection.style.display = 'block';
    currentResultText = shareText;
    
    // Update active zodiac
    zodiacItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.sign === sign) {
            item.classList.add('active');
        }
    });
}

// ===== SELECT ZODIAC =====
function selectZodiac(sign) {
    currentSign = sign;
    
    zodiacItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.sign === sign) {
            item.classList.add('active');
        }
    });
    
    if (currentFeature) {
        generateResult(sign, currentFeature, currentLang);
    }
}

// ===== SHARE RESULT =====
function shareResult(platform) {
    if (!currentResultText) {
        showToast('❌ पहले राशिफल चेक करें', 'fa-exclamation-circle');
        return;
    }
    
    const text = currentResultText + '\n\n📱 ' + window.location.href;
    
    switch(platform) {
        case 'whatsapp':
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
            break;
        case 'telegram':
            window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(currentResultText)}`, '_blank');
            break;
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
            break;
        case 'instagram':
            navigator.clipboard.writeText(text)
                .then(() => showToast('📋 कॉपी किया! Instagram पर पेस्ट करें', 'fa-copy'))
                .catch(() => showToast('❌ कॉपी नहीं हुआ', 'fa-exclamation-circle'));
            break;
        case 'copy':
            navigator.clipboard.writeText(text)
                .then(() => showToast('📋 कॉपी किया गया!', 'fa-copy'))
                .catch(() => {
                    const textArea = document.createElement('textarea');
                    textArea.value = text;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    showToast('📋 कॉपी किया गया!', 'fa-copy');
                });
            break;
    }
    
    shareDropdown.classList.remove('show');
}

// ===== THEME TOGGLE =====
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.querySelector('i').className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    showToast(currentTheme === 'dark' ? '🌙 डार्क मोड' : '☀️ लाइट मोड', 'fa-adjust');
}

// ===== LANGUAGE TOGGLE =====
function toggleLanguage() {
    currentLang = currentLang === 'hi' ? 'en' : 'hi';
    langLabel.textContent = currentLang === 'hi' ? 'हिंदी' : 'English';
    updateLanguage(currentLang);
    if (currentSign && currentFeature) {
        generateResult(currentSign, currentFeature, currentLang);
    }
    showToast(currentLang === 'hi' ? '🇮🇳 हिंदी' : '🇬🇧 English', 'fa-language');
}

// ===== UPDATE LANGUAGE =====
function updateLanguage(lang) {
    const texts = {
        fHoroscope: lang === 'hi' ? '🌟 दैनिक राशिफल' : '🌟 Daily Horoscope',
        fHoroscopeDesc: lang === 'hi' ? 'आज का प्रेम' : "Today's Love",
        fMatch: lang === 'hi' ? '💑 मैच राशि' : '💑 Match Rashi',
        fMatchDesc: lang === 'hi' ? 'राशि मिलान' : 'Zodiac Match',
        fMood: lang === 'hi' ? '😊 मूड स्कोर' : '😊 Mood Score',
        fMoodDesc: lang === 'hi' ? 'आज का मूड' : "Today's Mood",
        fLove: lang === 'hi' ? '💕 लव स्कोर' : '💕 Love Score',
        fLoveDesc: lang === 'hi' ? 'प्रेम ऊर्जा' : 'Love Energy',
        fAdvice: lang === 'hi' ? '💡 आज की सलाह' : '💡 Today\'s Advice',
        fAdviceDesc: lang === 'hi' ? 'प्रेम टिप्स' : 'Love Tips',
        fLucky: lang === 'hi' ? '🎲 लकी नंबर' : '🎲 Lucky Number',
        fLuckyDesc: lang === 'hi' ? 'भाग्यशाली' : 'Lucky',
        selectZodiacText: lang === 'hi' ? '✨ अपनी राशि चुनें' : '✨ Select Your Zodiac',
        shareBtnText: lang === 'hi' ? 'शेयर करें' : 'Share',
        shareTopText: lang === 'hi' ? 'शेयर' : 'Share',
        footerText: lang === 'hi' ? 'Love Rashifal - हर दिन सटीक प्रेम राशिफल' : 'Love Rashifal - Accurate love horoscope daily',
        footerCredit: lang === 'hi' ? '❤️ प्यार से बनाया' : '❤️ Made with love',
        tagline: lang === 'hi' ? '❤️ जानें अपने दिल के राज़ ❤️' : '❤️ Discover your heart\'s secrets ❤️',
        statZodiac: lang === 'hi' ? 'राशियाँ' : 'Zodiacs',
        statAccuracy: lang === 'hi' ? 'सटीकता' : 'Accuracy',
        statUsers: lang === 'hi' ? 'खुश यूज़र्स' : 'Happy Users',
        todayDay: lang === 'hi' ? 'आज' : 'Today',
        featuresTitle: lang === 'hi' ? '✨ चुनें अपना फीचर' : '✨ Choose Your Feature',
        placeholderTitle: lang === 'hi' ? '✨ आपका परिणाम' : '✨ Your Result',
        placeholderText: lang === 'hi' ? 'राशि चुनें और फीचर चुनें' : 'Select zodiac and feature'
    };
    
    Object.keys(texts).forEach(key => {
        const el = document.getElementById(key);
        if (el) el.textContent = texts[key];
    });
    
    // Update zodiac names
    document.querySelectorAll('.zodiac-item').forEach(item => {
        const sign = item.dataset.sign;
        if (sign && zodiacData[sign]) {
            const name = zodiacData[sign].name[lang] || zodiacData[sign].name.hi;
            item.querySelector('span').textContent = name;
        }
    });
    
    // Update share platform labels
    document.querySelectorAll('.share-platform').forEach(btn => {
        const platform = btn.dataset.platform;
        const labels = {
            whatsapp: 'WhatsApp',
            telegram: 'Telegram',
            twitter: 'Twitter',
            instagram: 'Instagram',
            copy: lang === 'hi' ? 'कॉपी' : 'Copy'
        };
        const span = btn.querySelector('span');
        if (span && labels[platform]) {
            span.textContent = labels[platform];
        }
    });
    
    // Update inspiration
    const insp = getRandom(inspirations[lang] || inspirations.hi);
    inspirationText.textContent = insp;
    inspirationSource.textContent = lang === 'hi' ? '- प्रेम राशिफल' : '- Love Rashifal';
    
    // Update date
    currentDateDisplay.textContent = formatDate(lang);
    todayDay.textContent = getDayName(lang);
}

// ===== CREATE FLOATING HEARTS =====
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const emojis = ['❤️', '💕', '💖', '💗', '❤️‍🔥', '💝'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('span');
        heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 20 + 15) + 's';
        heart.style.animationDelay = (Math.random() * 15) + 's';
        container.appendChild(heart);
    }
}

// ===== INIT PARTICLES =====
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 50, density: { enable: true, value_area: 800 } },
                color: { value: '#ff6b9d' },
                shape: { type: 'circle' },
                opacity: { value: 0.12, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#ff6b9d', opacity: 0.05, width: 1 },
                move: { enable: true, speed: 0.8, direction: 'none', random: true, out_mode: 'out' }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' }
                },
                modes: { grab: { distance: 140, line_linked: { opacity: 0.1 } } }
            }
        });
    }
}

// ===== INIT APP =====
function initApp() {
    createFloatingHearts();
    initParticles();
    updateLanguage('hi');
    showFeature('horoscope');
    
    console.log('❤️ Love Rashifal v3.0');
    console.log('✨ Features: Horoscope, Match Rashi, Mood Score, Love Score, Advice, Lucky Number');
}

// ===== EVENT LISTENERS =====
// Feature cards
featureCards.forEach(card => {
    card.addEventListener('click', function() {
        showFeature(this.dataset.feature);
    });
});

// Zodiac selection
zodiacItems.forEach(item => {
    item.addEventListener('click', function() {
        selectZodiac(this.dataset.sign);
    });
});

// Share button
shareResultBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    shareDropdown.classList.toggle('show');
});

// Share platforms
document.querySelectorAll('.share-platform').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        shareResult(this.dataset.platform);
    });
});

// Close share dropdown
document.addEventListener('click', function() {
    shareDropdown.classList.remove('show');
});

// Theme toggle
themeToggle.addEventListener('click', toggleTheme);

// Language toggle
langToggle.addEventListener('click', toggleLanguage);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        toggleTheme();
    } else if (e.key === 'l' || e.key === 'L') {
        e.preventDefault();
        toggleLanguage();
    } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        if (currentResultText) {
            shareDropdown.classList.toggle('show');
        }
    }
});

// ===== START =====
startLoading();
