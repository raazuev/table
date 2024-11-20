export function generateDailyData() {

    return {
        'Выручка': { currentDay: Math.floor(Math.random() * 1000), yesterday: Math.floor(Math.random() * 1000), weekday: Math.floor(Math.random() * 1000) },
        'Наличные': { currentDay: Math.floor(Math.random() * 500), yesterday: Math.floor(Math.random() * 500), weekday: Math.floor(Math.random() * 500) },
        'Безналичный расчёт': { currentDay: Math.floor(Math.random() * 300), yesterday: Math.floor(Math.random() * 300), weekday: Math.floor(Math.random() * 300) },
        'Кредитные карты': { currentDay: Math.floor(Math.random() * 200), yesterday: Math.floor(Math.random() * 200), weekday: Math.floor(Math.random() * 200) },
        'Средний чек': { currentDay: Math.floor(Math.random() * 100), yesterday: Math.floor(Math.random() * 100), weekday: Math.floor(Math.random() * 100) },
        'Средний гость': { currentDay: Math.floor(Math.random() * 30), yesterday: Math.floor(Math.random() * 30), weekday: Math.floor(Math.random() * 30) },
        'Удаление из чека (после оплаты)': { currentDay: Math.floor(Math.random() * 10), yesterday: Math.floor(Math.random() * 10), weekday: Math.floor(Math.random() * 10) },
        'Удаление из чека (до оплаты)': { currentDay: Math.floor(Math.random() * 5), yesterday: Math.floor(Math.random() * 5), weekday: Math.floor(Math.random() * 5) },
        'Количество гостей': { currentDay: Math.floor(Math.random() * 50), yesterday: Math.floor(Math.random() * 50), weekday: Math.floor(Math.random() * 50) },
    };
    
}
