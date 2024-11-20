import { renderChart } from './chart.js';
import { generateDailyData } from './data.js';

export function initializeTable() {

    const tableBody = document.getElementById('table-body');
    const data = generateDailyData();

    for (const [key, value] of Object.entries(data)) {
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${key}</td>
            <td>${value.currentDay}</td>
            <td>${value.yesterday}</td>
            <td>${value.weekday}</td>
        `;
        row.addEventListener('click', () => {
            document.getElementById('chart-container').style.display = 'block';
            renderChart(key, value);
        });
        tableBody.appendChild(row);
    }

    document.getElementById('back-button').addEventListener('click', () => {

        document.getElementById('chart-container').style.display = 'none';
        document.getElementById('main-container').style.display = 'block';
        
    });
}
