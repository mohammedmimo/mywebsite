// تعريف الترجمة لكل لغة
const translations = {
    "ar": {
        "title": "تعلم الصلاة والوضوء",
        "wudu-title": "كيفية الوضوء",
        "wudu-text": "1. النية\n2. غسل اليدين\n3. المضمضة\n4. الاستنشاق\n5. غسل الوجه\n6. غسل اليدين إلى المرفقين\n7. مسح الرأس\n8. غسل القدمين",
        "prayer-title": "كيفية الصلاة",
        "prayer-text": "1. تكبيرة الإحرام\n2. قراءة الفاتحة\n3. الركوع\n4. السجود\n5. التشهد\n6. التسليم",
        "wudu-image": "images/wudu1.jpg",
        "prayer-image": "images/prayer1.jpg"
    },
    "en": {
        "title": "Learn Wudu and Prayer",
        "wudu-title": "How to Perform Wudu",
        "wudu-text": "1. Intention\n2. Washing hands\n3. Rinsing mouth\n4. Inhaling water\n5. Washing face\n6. Washing arms up to elbows\n7. Wiping head\n8. Washing feet",
        "prayer-title": "How to Perform Prayer",
        "prayer-text": "1. Takbir (Allahu Akbar)\n2. Reciting Al-Fatiha\n3. Bowing (Ruku)\n4. Prostration (Sujood)\n5. Tashahhud\n6. Salam (Ending prayer)",
        "wudu-image": "images/wudu1.jpg",
        "prayer-image": "images/prayer1.jpg"
    },
    "es": {
        "title": "Aprender Wudu y Oración",
        "wudu-title": "Cómo realizar Wudu",
        "wudu-text": "1. Intención\n2. Lavado de manos\n3. Enjuague de boca\n4. Inhalación de agua\n5. Lavado de cara\n6. Lavado de brazos hasta los codos\n7. Limpieza de cabeza\n8. Lavado de pies",
        "prayer-title": "Cómo realizar la oración",
        "prayer-text": "1. Takbir (Allahu Akbar)\n2. Recitar Al-Fatiha\n3. Inclinación (Ruku)\n4. Postración (Sujood)\n5. Tashahhud\n6. Salam (Finalizar oración)",
        "wudu-image": "images/wudu1.jpg",
        "prayer-image": "images/prayer1.jpg"
    },
    "fr": {
        "title": "Apprendre Wudu et Prière",
        "wudu-title": "Comment effectuer Wudu",
        "wudu-text": "1. Intention\n2. Lavage des mains\n3. Rinçage de la bouche\n4. Inhalation d'eau\n5. Lavage du visage\n6. Lavage des bras jusqu'aux coudes\n7. Essuyage de la tête\n8. Lavage des pieds",
        "prayer-title": "Comment effectuer la prière",
        "prayer-text": "1. Takbir (Allahu Akbar)\n2. Réciter Al-Fatiha\n3. Inclinaison (Ruku)\n4. Prosternation (Sujood)\n5. Tashahhud\n6. Salam (Fin de la prière)",
        "wudu-image": "images/wudu1.jpg",
        "prayer-image": "images/prayer1.jpg"
    },
    "de": {
        "title": "Wudu und Gebet lernen",
        "wudu-title": "Wie man Wudu macht",
        "wudu-text": "1. Absicht\n2. Hände waschen\n3. Mund spülen\n4. Nase einziehen\n5. Gesicht waschen\n6. Arme bis zu den Ellbogen waschen\n7. Kopf abwischen\n8. Füße waschen",
        "prayer-title": "Wie man betet",
        "prayer-text": "1. Takbir (Allahu Akbar)\n2. Al-Fatiha rezitieren\n3. Verbeugung (Ruku)\n4. Niederwerfung (Sujood)\n5. Tashahhud\n6. Salam (Gebet beenden)",
        "wudu-image": "images/wudu1.jpg",
        "prayer-image": "images/prayer1.jpg"
    }
};

// دالة لتغيير اللغة
function changeLanguage(lang) {
    document.getElementById("title").innerText = translations[lang]["title"];
    document.getElementById("wudu-title").innerText = translations[lang]["wudu-title"];
    document.getElementById("wudu-text").innerText = translations[lang]["wudu-text"];
    document.getElementById("prayer-title").innerText = translations[lang]["prayer-title"];
    document.getElementById("prayer-text").innerText = translations[lang]["prayer-text"];
    document.getElementById("wudu-image").src = translations[lang]["wudu-image"];
    document.getElementById("prayer-image").src = translations[lang]["prayer-image"];
}
