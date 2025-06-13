// Ecosup products data
const ecosupProducts = {
    'ויטמין סי ליפוזומלי': {
        matchingSupplements: ['ויטמין C'],
        benefits: [
            'פריצת דרך בספיגת ויטמין סי! טכנולוגיית בידלטס הליפוזומלית המהפכנית מבטיחה ספיגה מוגברת וזמינות ביולוגית מקסימלית - השקעה חכמה בבריאות שלך',
            '24 שעות של הגנה חיסונית - בזכות השחרור המושהה, כמוסה אחת ביום מספקת אספקת ויטמין סי רציפה לאורך כל היממה - לא עוד מנות מרובות!',
            'נמאס מכאבי בטן מוויטמין סי? הטכנולוגיה הליפוזומלית שלנו מגנה על הקיבה ומונעת גירויים - סוף סוף ויטמין סי שהגוף שלך אוהב',
            'בריאות העור מתחילה מבפנים - ייצור קולגן משופר הודות לזמינות גבוהה של ויטמין סי - לעור זוהר, מפרקים גמישים ואנרגיה לאורך היום'
        ]
    },
    'בי12 אולטרה': {
        matchingSupplements: ['ויטמין B12'],
        benefits: [
            'סוף לעייפות! בי12 אולטרה - הפורמולה הכפולה - שילוב ייחודי של שתי נגזרות פעילות של ויטמין בי12 שעובדות בסינרגיה מושלמת - לאנרגיה שנמשכת כל היום',
            'ספיגה מיידית תת-לשונית - ישירות לזרם הדם! עוקפים את מערכת העיכול ומבטיחים ספיגה מקסימלית - מושלם למי שסובל מבעיות ספיגה',
            'הפתרון המושלם לגיל 50+ - כשהגוף מתקשה לספוג בי12 ממזון, הנגזרות הפעילות שלנו נכנסות לפעולה מיידית - ללא צורך בהמרה',
            'חיוני לצמחונים וטבעונים - מקור אמין ונקי לוויטמין בי12 שחסר בתזונה צמחית - עם תמצית פטל טבעית וללא תוספים מיותרים'
        ]
    },
    'ויטמין די3 ליפוזומלי': {
        matchingSupplements: ['ויטמין D3'],
        benefits: [
            'מהפכה בספיגת ויטמין די3 - טכנולוגיה ליפוזומלית - מעטפת פוספוליפידים מגנה על הוויטמין מחומצת הקיבה ומבטיחה ספיגה מוגברת וזמינות ביולוגית מקסימלית',
            'לראשונה בישראל: די3 טבעוני 100% - לא מצמר כבשים, לא מכבד דגים - מקור צמחי טהור שמתאים לטבעונים, צמחונים וכל מי שמחפש אלטרנטיבה נקייה',
            'הפתרון המושלם לבעיות ספיגה - הטכנולוגיה הליפוזומלית עוקפת את אתגרי העיכול - מושלם למבוגרים, לסובלים ממחלות מעי ולכל מי שמתקשה בספיגת ויטמינים',
            '1000 יחבל בטעם לימון-ליים מרענן - מינון אופטימלי יומי בטעם נעים שילדים אוהבים - סוף סוף תוסף שכל המשפחה תשמח לקחת'
        ]
    },
    'איירון מקס': {
        matchingSupplements: ['ברזל'],
        benefits: [
            'סוף לתופעות הלוואי של ברזל! ברזל ביסגליצינאט בטכנולוגיית טראקס הפטנטית - ספיגה מקסימלית ללא כאבי בטן, עצירות או בחילות',
            'לא כל הברזל נוצר שווה - הפורמולה היחידה שלא מתנגשת עם קפה, מוצרי חלב או מזונות אחרים - תוכלו לקחת בכל שעה ללא הגבלות',
            'ברזל + ויטמין סי = ספיגה מושלמת - השילוב המדעי המוכח להעלאת רמות הברזל בדם - בטעם אוכמניות טבעי שתאהבו',
            'מומלץ לספורטאים ונשים - התשובה לעייפות, חולשה ומחסור בברזל - במיוחד למי שמאבד ברזל באימונים או במחזור החודשי'
        ]
    },
    'ביופולייט': {
        matchingSupplements: ['חומצה פולית (B9)'],
        benefits: [
            'חומצה פולית שהגוף שלך באמת מזהה - קוואטרפוליק - הדור הרביעי והמתקדם ביותר של חומצה פולית בצורתה הפעילה והטבעית, ללא צורך בהמרה',
            'הפתרון למי שיש לו מוטציית אם-טי-אייץ\'-אף-אר - 50% מהאוכלוסייה לא יכולים להמיר חומצה פולית רגילה - ביופולייט כבר מגיע בצורה הפעילה מתיל-פולאט',
            'חיוני לכל אישה בגיל הפוריות - התוסף החשוב ביותר להתפתחות תקינה של העובר - ועכשיו גם מוכח כחיוני לפוריות הגבר',
            'תומך בייצור די-אן-איי ותאי דם אדומים - מעבר להריון - חיוני לאנרגיה, למערכת העצבים ולבריאות הלב באמצעות ויסות רמות ההומוציסטאין'
        ]
    },
    'ליפו מאג': {
        matchingSupplements: ['מגנזיום'],
        benefits: [
            'כוח כפול לספיגת מגנזיום - ליפוזומלי + טראקס - השילוב היחיד בישראל! שתי טכנולוגיות פורצות דרך בבקבוק אחד להבטחת ספיגה מקסימלית',
            'סוף לשלשולים ממגנזיום! מגנזיום ביסגליצינאט ליפוזומלי שעדין למערכת העיכול - תיהנו מהיתרונות בלי תופעות הלוואי',
            'מתאים לכולם - גם למי שמתקשה לספוג - הליפוזומים מגנים על המגנזיום ומובילים אותו ישירות לתאים - מושלם לבעיות ספיגה וגיל מבוגר',
            'הבחירה של ספורטאים ומטפלים - בטוח לשימוש ארוך טווח, מומלץ להתכווצויות שרירים, שינה איכותית ורגיעה עמוקה'
        ]
    },
    'אומגה 3 ליפוזומלי': {
        matchingSupplements: ['אומגה 3'],
        benefits: [
            'אומגה 3 מאצות - לא מדגים, לא מריח, לא חוזר - מופק מאצת ים מיקרוסקופית בסביבה סטרילית - נקי ממתכות כבדות וללא טעם לוואי של דגים',
            'טכנולוגיה ליפוזומלית = ספיגה מקסימלית - מעטפת פוספוליפידים מגנה על האומגה 3 ומבטיחה הגעה מלאה לתאים - בלי לבזבז אף טיפה',
            'איי-פי-איי + די-אייץ\'-איי בפורמולה צמחית - כל היתרונות של אומגה 3 מדגים במקור טהור וטבעוני - מושלם לצמחונים, טבעונים וכל המשפחה',
            'נוזלי בטעם אננס - קל לילדים ומבוגרים - סוף סוף אומגה 3 שילדים מבקשים לקחת! ללא צורך לבלוע כמוסות ענקיות'
        ]
    },
    'בי-קומפליט': {
        matchingSupplements: ['תיאמין (B1)', 'B2 (ריבופלאבין)', 'B3 (ניאצין)', 'B5 (חומצה פנטותנית)', 'B6 (פירידוקסין)', 'B7 (ביוטין)'],
        benefits: [
            'כל קבוצת ויטמין בי בכף אחת נוזלית - פורמולה נוזלית מלאה עם ספיגה מיידית - יותר יעיל מטבליות וכדורים רגילים',
            'הנגזרות הפעילות שהגוף מזהה - בי12 מתילקובלמין, חומצה פולית מתיל-פולאט, בי6 פי5פי - ללא צורך בהמרה, ישר לפעולה',
            'בי3 ללא גלי חום ואדמומיות! ניאצין מסוג אן-אף-אן מיוחד שלא גורם לתחושת בעירה - תיהנו מהיתרונות בלי אי הנוחות',
            '300 מיקרוגרם ביוטין לשיער וציפורניים - תמיכה משולבת בייצור קולגן וקרטין - לשיער בריא, עור זוהר וציפורניים חזקות'
        ]
    }
};

// Data structure for supplements and their symptoms
const supplementsData = {
    'תיאמין (B1)': {
        symptoms: [
            'עייפות וחולשה כללית',
            'בעיות זיכרון וקושי בריכוז',
            'אובדן תיאבון וירידה במשקל',
            'עצבנות ורגישות יתר',
            'כאבי שרירים וחולשת שרירים',
            'דפיקות לב מהירות'
        ]
    },
    'ויטמין D3': {
        symptoms: [
            'כאבי עצמות ושרירים',
            'חולשת שרירים',
            'עייפות כרונית',
            'דיכאון ומצב רוח ירוד',
            'נשירת שיער',
            'ריפוי איטי של פצעים',
            'זיהומים חוזרים'
        ]
    },
    'ויטמין B12': {
        symptoms: [
            'עייפות וחולשה קיצונית',
            'קוצר נשימה וסחרחורת',
            'עור חיוור או צהבהב',
            'עקצוצים בידיים וברגליים',
            'בעיות שיווי משקל',
            'בעיות זיכרון ובלבול',
            'דיכאון ושינויים במצב הרוח',
            'לשון נפוחה ואדומה'
        ]
    },
    'חומצה פולית (B9)': {
        symptoms: [
            'עייפות וחולשה',
            'קוצר נשימה',
            'כאבי ראש',
            'רגזנות',
            'קושי בריכוז',
            'דפיקות לב',
            'פצעים בפה ובלשון'
        ]
    },
    'מגנזיום': {
        symptoms: [
            'התכווצויות שרירים ועוויתות',
            'עייפות וחולשה',
            'עקצוצים ונימול',
            'הפרעות בקצב הלב',
            'דיכאון וחרדה',
            'כאבי ראש ומיגרנות',
            'בעיות שינה'
        ]
    },
    'ויטמין C': {
        symptoms: [
            'עייפות וחולשה',
            'כאבי שרירים ומפרקים',
            'חבורות בקלות',
            'דימום מהחניכיים',
            'ריפוי איטי של פצעים',
            'עור יבש ומחוספס',
            'חיסון מוחלש וזיהומים תכופים'
        ]
    },
    'ברזל': {
        symptoms: [
            'עייפות קיצונית וחולשה',
            'עור חיוור',
            'קוצר נשימה',
            'סחרחורות',
            'ידיים ורגליים קרות',
            'ציפורניים שבירות',
            'כאבי ראש תכופים',
            'דפיקות לב מהירות'
        ]
    },
    'אומגה 3': {
        symptoms: [
            'עור יבש וקשקשי',
            'שיער יבש ודליל',
            'ציפורניים שבירות',
            'עייפות ובעיות שינה',
            'קשיי ריכוז',
            'כאבי מפרקים',
            'דיכאון ומצבי רוח משתנים',
            'יובש בעיניים'
        ]
    },
    'B2 (ריבופלאבין)': {
        symptoms: [
            'סדקים בזוויות הפה',
            'שפתיים יבשות וסדוקות',
            'לשון אדומה וכואבת',
            'פריחות עוריות',
            'רגישות לאור',
            'עיניים אדומות ודומעות'
        ]
    },
    'B3 (ניאצין)': {
        symptoms: [
            'עור יבש ומחוספס',
            'לשון אדומה ונפוחה',
            'עייפות וחולשה',
            'בעיות עיכול',
            'דיכאון ובלבול'
        ]
    },
    'B5 (חומצה פנטותנית)': {
        symptoms: [
            'עייפות וחולשה',
            'כאבי ראש',
            'תחושת צריבה ברגליים',
            'בעיות שינה',
            'בחילות וכאבי בטן'
        ]
    },
    'B6 (פירידוקסין)': {
        symptoms: [
            'פריחות עוריות',
            'סדקים בזוויות הפה',
            'לשון נפוחה',
            'דיכאון ובלבול',
            'חולשת מערכת חיסון',
            'אנמיה'
        ]
    },
    'B7 (ביוטין)': {
        symptoms: [
            'נשירת שיער',
            'פריחה אדומה סביב העיניים והאף',
            'ציפורניים שבירות',
            'דיכאון',
            'עייפות',
            'עקצוצים בידיים וברגליים'
        ]
    }
};

// Mapping of general symptoms to specific ones
const symptomMapping = {
    'עייפות': [
        'עייפות וחולשה כללית',
        'עייפות כרונית',
        'עייפות וחולשה קיצונית',
        'עייפות וחולשה',
        'עייפות קיצונית וחולשה',
        'עייפות ובעיות שינה',
        'עייפות'
    ],
    'דיכאון': [
        'דיכאון ומצב רוח ירוד',
        'דיכאון ושינויים במצב הרוח',
        'דיכאון וחרדה',
        'דיכאון ומצבי רוח משתנים',
        'דיכאון ובלבול',
        'דיכאון'
    ],
    'כאבי ראש': [
        'כאבי ראש',
        'כאבי ראש ומיגרנות',
        'כאבי ראש תכופים'
    ],
    'בעיות זיכרון וריכוז': [
        'בעיות זיכרון וקושי בריכוז',
        'בעיות זיכרון ובלבול',
        'קושי בריכוז',
        'קשיי ריכוז'
    ],
    'כאבי שרירים': [
        'כאבי שרירים וחולשת שרירים',
        'כאבי עצמות ושרירים',
        'כאבי שרירים ומפרקים',
        'חולשת שרירים'
    ],
    'דפיקות לב': [
        'דפיקות לב מהירות',
        'דפיקות לב',
        'הפרעות בקצב הלב'
    ],
    'קוצר נשימה': [
        'קוצר נשימה וסחרחורת',
        'קוצר נשימה'
    ],
    'בעיות עור': [
        'עור חיוור או צהבהב',
        'עור חיוור',
        'עור יבש ומחוספס',
        'עור יבש וקשקשי',
        'פריחות עוריות',
        'פריחה אדומה סביב העיניים והאף'
    ],
    'בעיות בפה ולשון': [
        'לשון נפוחה ואדומה',
        'פצעים בפה ובלשון',
        'סדקים בזוויות הפה',
        'שפתיים יבשות וסדוקות',
        'לשון אדומה וכואבת',
        'לשון אדומה ונפוחה',
        'לשון נפוחה'
    ],
    'ציפורניים שבירות': [
        'ציפורניים שבירות'
    ],
    'נשירת שיער': [
        'נשירת שיער',
        'שיער יבש ודליל'
    ],
    'בעיות שינה': [
        'עייפות ובעיות שינה',
        'בעיות שינה'
    ],
    'עקצוצים ונימול': [
        'עקצוצים בידיים וברגליים',
        'עקצוצים ונימול'
    ],
    'בעיות עיכול': [
        'בעיות עיכול',
        'בחילות וכאבי בטן'
    ],
    'זיהומים חוזרים': [
        'זיהומים חוזרים',
        'חיסון מוחלש וזיהומים תכופים',
        'חולשת מערכת חיסון'
    ]
};

let userRatings = {};

function startAssessment() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('symptomsContainer').style.display = 'block';
    displaySymptoms();
    updateProgress();
}

function displaySymptoms() {
    const container = document.getElementById('symptomsList');
    container.innerHTML = '';
    
    // Display general symptoms
    Object.keys(symptomMapping).forEach((generalSymptom, index) => {
        const item = document.createElement('div');
        item.className = 'symptom-item';
        item.id = `symptom-item-${index}`;
        
        const name = document.createElement('div');
        name.className = 'symptom-name';
        name.textContent = generalSymptom;
        
        const ratingContainer = document.createElement('div');
        ratingContainer.className = 'rating-container';
        
        const label = document.createElement('span');
        label.className = 'rating-label';
        label.textContent = 'דרג:';
        
        const buttons = document.createElement('div');
        buttons.className = 'rating-buttons';
        
        for (let i = 0; i <= 5; i++) {
            const btn = document.createElement('button');
            btn.className = 'rating-btn';
            btn.textContent = i;
            btn.onclick = () => selectRating(generalSymptom, i, btn, index);
            buttons.appendChild(btn);
        }
        
        ratingContainer.appendChild(label);
        ratingContainer.appendChild(buttons);
        
        item.appendChild(name);
        item.appendChild(ratingContainer);
        container.appendChild(item);
    });
    
    // Add unique symptoms not in mapping
    const allMappedSymptoms = new Set();
    Object.values(symptomMapping).forEach(symptoms => {
        symptoms.forEach(s => allMappedSymptoms.add(s));
    });
    
    let additionalIndex = Object.keys(symptomMapping).length;
    for (const [supplement, data] of Object.entries(supplementsData)) {
        data.symptoms.forEach(symptom => {
            if (!allMappedSymptoms.has(symptom)) {
                const item = document.createElement('div');
                item.className = 'symptom-item';
                item.id = `symptom-item-${additionalIndex}`;
                
                const name = document.createElement('div');
                name.className = 'symptom-name';
                name.textContent = symptom;
                
                const ratingContainer = document.createElement('div');
                ratingContainer.className = 'rating-container';
                
                const label = document.createElement('span');
                label.className = 'rating-label';
                label.textContent = 'דרג:';
                
                const buttons = document.createElement('div');
                buttons.className = 'rating-buttons';
                
                for (let i = 0; i <= 5; i++) {
                    const btn = document.createElement('button');
                    btn.className = 'rating-btn';
                    btn.textContent = i;
                    btn.onclick = () => selectRating(symptom, i, btn, additionalIndex);
                    buttons.appendChild(btn);
                }
                
                ratingContainer.appendChild(label);
                ratingContainer.appendChild(buttons);
                
                item.appendChild(name);
                item.appendChild(ratingContainer);
                container.appendChild(item);
                
                allMappedSymptoms.add(symptom);
                additionalIndex++;
            }
        });
    }
}

function selectRating(symptom, rating, button, itemIndex) {
    // Remove previous selection
    const buttons = button.parentElement.querySelectorAll('.rating-btn');
    buttons.forEach(btn => btn.className = 'rating-btn');
    
    // Add selection
    button.className = `rating-btn selected selected-${rating}`;
    
    // Mark item as rated
    const item = document.getElementById(`symptom-item-${itemIndex}`);
    if (item) {
        if (rating > 0) {
            item.classList.add('rated');
        } else {
            item.classList.remove('rated');
        }
    }
    
    // Store rating
    userRatings[symptom] = rating;
    
    // Update progress
    updateProgress();
}

function updateProgress() {
    const totalSymptoms = document.querySelectorAll('.symptom-item').length;
    const ratedSymptoms = Object.keys(userRatings).length;
    const progress = (ratedSymptoms / totalSymptoms) * 100;
    
    const progressFill = document.getElementById('progressFill');
    const progressInfo = document.getElementById('progressInfo');
    
    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }
    
    if (progressInfo) {
        progressInfo.textContent = `${ratedSymptoms} מתוך ${totalSymptoms} סימפטומים דורגו`;
    }
    
    // Enable/disable calculate button
    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        if (ratedSymptoms > 0) {
            calculateBtn.disabled = false;
        } else {
            calculateBtn.disabled = true;
        }
    }
}

function calculateResults() {
    const results = {};
    
    // Calculate scores for each supplement
    for (const [supplement, data] of Object.entries(supplementsData)) {
        let totalScore = 0;
        const foundSymptoms = [];
        
        data.symptoms.forEach(symptom => {
            let rating = 0;
            
            // Check if symptom was rated directly
            if (userRatings[symptom] !== undefined) {
                rating = userRatings[symptom];
            } else {
                // Check if symptom is in a general category
                for (const [generalSymptom, specificSymptoms] of Object.entries(symptomMapping)) {
                    if (specificSymptoms.includes(symptom) && userRatings[generalSymptom] !== undefined) {
                        rating = userRatings[generalSymptom];
                        break;
                    }
                }
            }
            
            if (rating > 0) {
                totalScore += rating;
                foundSymptoms.push({ symptom, rating });
            }
        });
        
        if (totalScore > 0) {
            results[supplement] = {
                score: totalScore,
                foundSymptoms
            };
        }
    }
    
    // Sort by score (descending)
    const sortedResults = Object.entries(results)
        .sort((a, b) => b[1].score - a[1].score);
    
    displayResults(sortedResults);
}

function displayResults(results) {
    document.getElementById('symptomsContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'block';
    
    const container = document.getElementById('resultsList');
    container.innerHTML = '';
    
    if (results.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <h3>🎉 מצוין! לא נמצאו חוסרים משמעותיים</h3>
            <p>על פי הסימפטומים שדירגת, נראה שאין לך חוסרים משמעותיים בויטמינים או מינרלים.</p>
            <p>המשך לשמור על תזונה מאוזנת ואורח חיים בריא!</p>
        `;
        container.appendChild(noResults);
        return;
    }
    
    // Group results by matching Ecosup products
    const productRecommendations = {};
    
    results.forEach(([supplement, data]) => {
        // Find matching Ecosup product
        for (const [productName, productData] of Object.entries(ecosupProducts)) {
            if (productData.matchingSupplements.includes(supplement)) {
                if (!productRecommendations[productName]) {
                    productRecommendations[productName] = {
                        score: 0,
                        supplements: [],
                        symptoms: []
                    };
                }
                productRecommendations[productName].score += data.score;
                productRecommendations[productName].supplements.push(supplement);
                productRecommendations[productName].symptoms.push(...data.foundSymptoms);
            }
        }
    });
    
    // Sort products by score
    const sortedProducts = Object.entries(productRecommendations)
        .sort((a, b) => b[1].score - a[1].score);
    
    // Add explanation about the order of supplements
    const orderExplanation = document.createElement('div');
    orderExplanation.style.cssText = `
        background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
        border: 2px solid #f39c12;
        border-radius: 15px;
        padding: 25px;
        margin-bottom: 30px;
        text-align: center;
        box-shadow: 0 5px 15px rgba(243, 156, 18, 0.2);
    `;
    
    const explanationTitle = document.createElement('h3');
    explanationTitle.style.cssText = `
        color: #e67e22;
        font-size: 1.5rem;
        margin-bottom: 15px;
        font-weight: bold;
    `;
    explanationTitle.textContent = '📊 התוספים מסודרים לפי דרגת הנחיצות שלך';
    
    const explanationText = document.createElement('p');
    explanationText.style.cssText = `
        color: #8b4513;
        font-size: 1.1rem;
        line-height: 1.7;
        margin-bottom: 10px;
    `;
    explanationText.textContent = 'התוספים הבאים מסודרים לפי דרגת החשיבות והנחיצות שלהם עבורך אישית. התוספים שמופיעים ראשונים קיבלו את הציון הגבוה ביותר באבחון, כלומר הם הכי רלוונטיים לסימפטומים שדירגת.';
    
    const priorityText = document.createElement('p');
    priorityText.style.cssText = `
        color: #d35400;
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 0;
    `;
    priorityText.textContent = '💡 מומלץ להתחיל מהתוסף הראשון - הוא הכי נחוץ לך כרגע!';
    
    orderExplanation.appendChild(explanationTitle);
    orderExplanation.appendChild(explanationText);
    orderExplanation.appendChild(priorityText);
    container.appendChild(orderExplanation);

    // Display products
    sortedProducts.forEach(([productName, data], index) => {
        const card = document.createElement('div');
        card.className = 'supplement-card';
        
        // Add priority class
        if (data.score >= 20) {
            card.classList.add('high-priority');
        } else if (data.score >= 10) {
            card.classList.add('medium-priority');
        } else {
            card.classList.add('low-priority');
        }
        
        // Header with recommendation explanation
        const recommendationIntro = document.createElement('div');
        recommendationIntro.className = 'recommendation-intro';
        recommendationIntro.style.cssText = `
            background: linear-gradient(135deg, #f8f9ff 0%, #e8ecff 100%);
            padding: 20px;
            border-radius: 12px;
            margin-bottom: 20px;
            border-right: 4px solid #667eea;
        `;
        
        const introTitle = document.createElement('h3');
        introTitle.style.cssText = `
            color: #667eea;
            font-size: 1.4rem;
            margin-bottom: 10px;
            font-weight: bold;
        `;
        const priorityNumber = index + 1;
        const priorityEmoji = priorityNumber === 1 ? '🥇' : priorityNumber === 2 ? '🥈' : priorityNumber === 3 ? '🥉' : '⭐';
        introTitle.textContent = `${priorityEmoji} תוסף מס' ${priorityNumber}: ${productName} מומלץ לך`;
        
        const reasonText = document.createElement('p');
        reasonText.style.cssText = `
            color: #555;
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 0;
        `;
        
        // Create symptoms list for the reason
        const symptomsForReason = [];
        const uniqueSymptomsForIntro = {};
        data.symptoms.forEach(({ symptom, rating }) => {
            if (!uniqueSymptomsForIntro[symptom] || uniqueSymptomsForIntro[symptom] < rating) {
                uniqueSymptomsForIntro[symptom] = rating;
            }
        });
        
        Object.entries(uniqueSymptomsForIntro).slice(0, 3).forEach(([symptom, rating]) => {
            symptomsForReason.push(symptom);
        });
        
        let priorityMessage = '';
        if (index === 0) {
            priorityMessage = '🎯 זהו התוסף החשוב ביותר עבורך! ';
        } else if (index === 1) {
            priorityMessage = '📈 תוסף חשוב שני בסדר העדיפויות. ';
        } else if (index === 2) {
            priorityMessage = '✨ תוסף משלים חשוב. ';
        }
        
        reasonText.textContent = `${priorityMessage}לפי הסימפטומים שדירגת: ${symptomsForReason.join(', ')} - התוסף הזה יכול לעזור לך להתמודד עם הבעיות הללו ולשפר את מצבך הכללי.`;
        
        recommendationIntro.appendChild(introTitle);
        recommendationIntro.appendChild(reasonText);
        card.appendChild(recommendationIntro);
        
        // Header
        const header = document.createElement('div');
        header.className = 'supplement-header';
        
        const name = document.createElement('h3');
        name.className = 'supplement-name';
        name.textContent = productName;
        
        const badge = document.createElement('div');
        badge.className = 'score-badge';
        if (data.score >= 20) badge.classList.add('high');
        else if (data.score >= 10) badge.classList.add('medium');
        badge.textContent = `ציון התאמה: ${data.score}`;
        
        header.appendChild(name);
        header.appendChild(badge);
        card.appendChild(header);
        
        // Found symptoms
        const symptomsSection = document.createElement('div');
        symptomsSection.className = 'symptoms-found';
        
        const symptomsTitle = document.createElement('h4');
        symptomsTitle.textContent = 'הסימפטומים שזוהו:';
        symptomsSection.appendChild(symptomsTitle);
        
        const symptomsContainer = document.createElement('div');
        // Remove duplicates and display symptoms
        const uniqueSymptoms = {};
        data.symptoms.forEach(({ symptom, rating }) => {
            if (!uniqueSymptoms[symptom] || uniqueSymptoms[symptom] < rating) {
                uniqueSymptoms[symptom] = rating;
            }
        });
        
        Object.entries(uniqueSymptoms).forEach(([symptom, rating]) => {
            const chip = document.createElement('span');
            chip.className = 'symptom-chip';
            chip.textContent = `${symptom} (${rating})`;
            symptomsContainer.appendChild(chip);
        });
        symptomsSection.appendChild(symptomsContainer);
        card.appendChild(symptomsSection);
        
        // Product recommendation
        const recommendation = document.createElement('div');
        recommendation.className = 'product-recommendation';
        
        const productTitle = document.createElement('h3');
        productTitle.className = 'product-name';
        productTitle.style.cssText = `
            font-size: 1.6rem;
            color: #667eea;
            font-weight: bold;
            margin-bottom: 20px;
            text-align: center;
        `;
        // Create a more specific title that emphasizes EcoSupp's uniqueness
        let specificTitle = '';
        if (productName.includes('ויטמין סי')) {
            specificTitle = `למה ויטמין הסי הליפוזומלי של אקוסאפ מושלם בשבילך?`;
        } else if (productName.includes('בי12')) {
            specificTitle = `למה הבי12 המתקדם של אקוסאפ מושלם בשבילך?`;
        } else if (productName.includes('ויטמין די3')) {
            specificTitle = `למה ויטמין הדי3 הטבעוני של אקוסאפ מושלם בשבילך?`;
        } else if (productName.includes('איירון')) {
            specificTitle = `למה הברזל המתקדם של אקוסאפ מושלם בשבילך?`;
        } else if (productName.includes('ביופולייט')) {
            specificTitle = `למה חומצה הפולית המתקדמת של אקוסאפ מושלמת בשבילך?`;
        } else if (productName.includes('ליפו מאג')) {
            specificTitle = `למה המגנזיום הליפוזומלי של אקוסאפ מושלם בשבילך?`;
        } else if (productName.includes('אומגה 3')) {
            specificTitle = `למה האומגה 3 הטבעוני של אקוסאפ מושלם בשבילך?`;
        } else if (productName.includes('בי-קומפליט')) {
            specificTitle = `למה קומפלקס הבי המתקדם של אקוסאפ מושלם בשבילך?`;
        } else {
            specificTitle = `מה היתרונות הייחודיים של ${productName} מבית אקוסאפ?`;
        }
        
        productTitle.textContent = specificTitle;
        recommendation.appendChild(productTitle);
        
        const benefitsContainer = document.createElement('div');
        benefitsContainer.className = 'product-benefits';
        
        ecosupProducts[productName].benefits.forEach((benefit, index) => {
            const benefitItem = document.createElement('div');
            benefitItem.className = 'benefit-item';
            benefitItem.style.cssText = `
                background: white;
                padding: 18px;
                margin-bottom: 15px;
                border-radius: 12px;
                box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
                display: flex;
                align-items: flex-start;
                border-right: 3px solid #28a745;
            `;
            
            const icon = document.createElement('span');
            icon.className = 'benefit-icon';
            icon.style.cssText = `
                color: #28a745;
                font-size: 1.4rem;
                margin-left: 15px;
                margin-top: 2px;
                font-weight: bold;
            `;
            icon.textContent = '✓';
            
            const textContainer = document.createElement('div');
            textContainer.style.cssText = `
                flex: 1;
            `;
            
            const benefitTitle = document.createElement('div');
            benefitTitle.style.cssText = `
                font-weight: bold;
                color: #667eea;
                margin-bottom: 8px;
                font-size: 1.1rem;
            `;
            
            const text = document.createElement('div');
            text.className = 'benefit-text';
            text.style.cssText = `
                color: #444;
                line-height: 1.7;
                font-size: 1rem;
            `;
            
            // Make benefits more marketing-oriented and emphasize EcoSupp's uniqueness
            let enhancedBenefit = benefit;
            
            // Add EcoSupp branding and emphasis
            enhancedBenefit = enhancedBenefit.replace(/בידלטס|טראקס|קוואטרפוליק/g, (match) => `${match} של אקוסאפ`);
            enhancedBenefit = enhancedBenefit.replace(/הטכנולוגיה הליפוזומלית/g, 'הטכנולוגיה הליפוזומלית הייחודית של אקוסאפ');
            enhancedBenefit = enhancedBenefit.replace(/הפורמולה/g, 'הפורמולה הייחודית של אקוסאפ');
            enhancedBenefit = enhancedBenefit.replace(/לראשונה בישראל/g, 'לראשונה בישראל! אקוסאפ מביאה לכם');
            enhancedBenefit = enhancedBenefit.replace(/השילוב היחיד בישראל/g, 'השילוב הייחודי שרק אקוסאפ מביאה');
            
            // Emphasize the product name
            enhancedBenefit = enhancedBenefit.replace(productName, `${productName} של אקוסאפ`);
            
            // Add benefit titles
            const benefitTitles = [
                '🚀 יעילות מקסימלית',
                '⚡ פעולה מהירה',
                '💪 חוזק וביטחון',
                '🌟 איכות פרימיום'
            ];
            
            benefitTitle.textContent = benefitTitles[index] || '✨ יתרון מיוחד';
            text.textContent = enhancedBenefit;
            
            textContainer.appendChild(benefitTitle);
            textContainer.appendChild(text);
            benefitItem.appendChild(icon);
            benefitItem.appendChild(textContainer);
            benefitsContainer.appendChild(benefitItem);
        });
        
        recommendation.appendChild(benefitsContainer);
        
        const ctaButton = document.createElement('button');
        ctaButton.className = 'cta-button';
        ctaButton.style.cssText = `
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            color: white;
            border: none;
            padding: 18px 40px;
            font-size: 1.2rem;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
            font-weight: bold;
            margin-top: 25px;
            width: 100%;
        `;
        ctaButton.textContent = `🛒 רוצה את ${productName} של אקוסאפ? לחץ כאן!`;
        ctaButton.onmouseover = () => {
            ctaButton.style.transform = 'translateY(-3px)';
            ctaButton.style.boxShadow = '0 8px 25px rgba(40, 167, 69, 0.6)';
        };
        ctaButton.onmouseout = () => {
            ctaButton.style.transform = 'translateY(0)';
            ctaButton.style.boxShadow = '0 6px 20px rgba(40, 167, 69, 0.4)';
        };
        ctaButton.onclick = () => {
            alert(`מעוניין ב-${productName} של אקוסאפ? צור קשר איתנו או בקר באתר אקוסאפ לרכישה!`);
        };
        recommendation.appendChild(ctaButton);
        
        card.appendChild(recommendation);
        container.appendChild(card);
    });

    // גלילה אוטומטית לראש הדף לאחר הצגת התוצאות
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetAssessment() {
    userRatings = {};
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('intro').style.display = 'block';
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = '0%';
    }
    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.disabled = true;
    }
} 