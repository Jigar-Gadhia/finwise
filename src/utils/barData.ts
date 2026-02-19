const dailyBarData = [
  {label: 'Mon', income: 400, expense: 900},
  {label: 'Tue', income: 700, expense: 1200},
  {label: 'Wed', income: 500, expense: 1500},
  {label: 'Thu', income: 1100, expense: 800},
];

const weeklyBarData = [
  {label: '1st Week', income: 2000, expense: 4000},
  {label: '2nd Week', income: 2500, expense: 7000},
  {label: '3rd Week', income: 4000, expense: 12000},
  {label: '4th Week', income: 10000, expense: 6000},
];

const monthlyBarData = [
  {label: 'Jan', income: 8000, expense: 12000},
  {label: 'Feb', income: 9500, expense: 15000},
  {label: 'Mar', income: 11000, expense: 9000},
  {label: 'Apr', income: 7000, expense: 17000},
];

const yearlyBarData = [
  {label: '2023', income: 85000, expense: 92000},
  {label: '2024', income: 105000, expense: 99000},
  {label: '2025', income: 120000, expense: 110000},
];

export const barDataByFilter = {
  daily: dailyBarData,
  weekly: weeklyBarData,
  monthly: monthlyBarData,
  yearly: yearlyBarData,
};
