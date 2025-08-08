export interface StatisticItem {
  value: number;
  suffix?: string;
  label: string;
}

export const HOME_STATISTICS: StatisticItem[] = [
  {
    value: 27,
    label: 'Local Government Areas'
  },
  {
    value: 8,
    label: 'Key Departments'
  },
  {
    value: 14,
    label: 'Dedicated Agencies'
  },
  {
    value: 10,
    label: 'Active Projects'
  }
];

export const PROJECTS_STATISTICS: StatisticItem[] = [
  {
    value: 10,
    label: 'Current Projects'
  },
  {
    value: 27,
    label: 'LGAs Covered'
  },
  {
    value: 14,
    label: 'Partner Agencies'
  },
  {
    value: 8,
    label: 'Key Departments'
  }
];
