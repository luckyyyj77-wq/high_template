// Template: Dashboard 04 - Card-Based Performance
// 기능: 1. Mock Chart.js 그래프 렌더링, 2. 기간 변경 시 데이터 업데이트 모킹

console.log('Dashboard Template 04 Script Loaded (성과 분석 대시보드).');

const periodSelector = document.getElementById('period');
const lineChartCanvas = document.getElementById('lineChartMock');
const doughnutChartCanvas = document.getElementById('doughnutChartMock');

let lineChartInstance, doughnutChartInstance;

// 1. Mock 데이터 생성 함수 (Generate Mock Data)
function generateMockData(period) {
    const labels = period === 'monthly' ? ['Week 1', 'Week 2', 'Week 3', 'Week 4'] :
                   period === 'quarterly' ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] :
                   ['Q1', 'Q2', 'Q3', 'Q4'];
    
    // 기간에 따른 랜덤 데이터 생성
    const data = labels.map((_, index) => 50000 + Math.floor(Math.random() * 50000) * (index + 1));
    
    return {
        labels: labels,
        visitorsData: data,
        kpiData: {
            visitors: (Math.random() * 50000 + 100000).toFixed(0).toLocaleString(),
            conversion: (Math.random() * 2 + 3).toFixed(1) + '%',
            bounce: (Math.random() * 10 + 30).toFixed(1) + '%'
        },
        channelData: [
            { name: 'Organic Search', value: (Math.random() * 40 + 30).toFixed(1) + '%' },
            { name: 'Direct', value: (Math.random() * 20 + 15).toFixed(1) + '%' },
            { name: 'Referral', value: (Math.random() * 10 + 5).toFixed(1) + '%' },
            { name: 'Social Media', value: (Math.random() * 10 + 5).toFixed(1) + '%' }
        ]
    };
}

// 2. 차트 렌더링 함수 (Render Chart.js instances)
function renderCharts(data) {
    // 이전 차트 인스턴스가 있으면 파괴 (메모리 정리)
    if (lineChartInstance) lineChartInstance.destroy();
    if (doughnutChartInstance) doughnutChartInstance.destroy();
    
    // 라인 차트 (Line Chart)
    lineChartInstance = new Chart(lineChartCanvas, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: '총 방문자 수',
                data: data.visitorsData,
                borderColor: '#3b82f6',
                tension: 0.1,
                fill: true,
                backgroundColor: 'rgba(59, 130, 246, 0.1)'
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
    
    // 도넛 차트 (Doughnut Chart)
    doughnutChartInstance = new Chart(doughnutChartCanvas, {
        type: 'doughnut',
        data: {
            labels: data.channelData.map(c => c.name),
            datasets: [{
                data: data.channelData.map(c => parseFloat(c.value)),
                backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
                hoverOffset: 4
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
    
    // KPI 및 리스트 업데이트
    updateKpiAndList(data);
}

// 3. KPI 및 상세 리스트 업데이트 (Update KPI Cards and Detail List)
function updateKpiAndList(data) {
    // KPI 카드 업데이트
    document.querySelector('[data-kpi="visitors"]').textContent = data.kpiData.visitors;
    document.querySelector('[data-kpi="conversion"]').textContent = data.kpiData.conversion;
    document.querySelector('[data-kpi="bounce"]').textContent = data.kpiData.bounce;
    
    // 상세 채널 리스트 업데이트
    const channelList = document.getElementById('channelList');
    channelList.innerHTML = '';
    data.channelData.forEach(channel => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${channel.name}</span><span>${channel.value}</span>`;
        channelList.appendChild(li);
    });
    console.log(`Data updated for period: ${periodSelector.value}`);
}

// 4. 기간 선택 이벤트 리스너 (Period Change Listener)
periodSelector.addEventListener('change', () => {
    const period = periodSelector.value;
    const newData = generateMockData(period);
    renderCharts(newData);
});


// 초기 로드
window.addEventListener('load', () => {
    // 초기 차트 렌더링
    const initialData = generateMockData(periodSelector.value);
    renderCharts(initialData);
});