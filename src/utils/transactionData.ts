import {icons} from './icons';

export type TransactionType = 'income' | 'expense';

export type TransactionFrequency =
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'rent'
  | 'pantry';

export type IconName = keyof typeof icons;

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  frequency: TransactionFrequency;
  occurredAt: string;
  account: string;
  category: {
    id: string;
    label: string;
    icon: IconName;
  };
}

export const transactionData: Transaction[] = [
  {
    id: 'txn_001',
    type: 'income',
    category: {
      id: 'salary',
      label: 'Salary',
      icon: 'salary',
    },
    amount: 4000,
    frequency: 'monthly',
    occurredAt: '2025-04-30T18:27:00',
    account: 'main',
  },
  {
    id: 'txn_002',
    type: 'expense',
    category: {
      id: 'groceries',
      label: 'Groceries',
      icon: 'groceries',
    },
    amount: 100,
    frequency: 'pantry',
    occurredAt: '2025-04-24T17:00:00',
    account: 'main',
  },
  {
    id: 'txn_003',
    type: 'expense',
    category: {
      id: 'rent',
      label: 'Rent',
      icon: 'rent',
    },
    amount: 674.4,
    frequency: 'rent',
    occurredAt: '2025-04-15T08:30:00',
    account: 'main',
  },
  {
    id: 'txn_004',
    type: 'expense',
    category: {
      id: 'food',
      label: 'Food',
      icon: 'food',
    },
    amount: 45.75,
    frequency: 'daily',
    occurredAt: '2025-05-01T13:10:00',
    account: 'main',
  },
  {
    id: 'txn_005',
    type: 'expense',
    category: {
      id: 'transport',
      label: 'Transport',
      icon: 'transport',
    },
    amount: 22.5,
    frequency: 'daily',
    occurredAt: '2025-05-01T09:00:00',
    account: 'main',
  },
  {
    id: 'txn_006',
    type: 'expense',
    category: {
      id: 'entertainment',
      label: 'Entertainment',
      icon: 'entertainment',
    },
    amount: 120,
    frequency: 'weekly',
    occurredAt: '2025-04-28T20:30:00',
    account: 'main',
  },
  {
    id: 'txn_007',
    type: 'income',
    category: {
      id: 'freelance',
      label: 'Freelance',
      icon: 'saving',
    },
    amount: 850,
    frequency: 'weekly',
    occurredAt: '2025-04-27T16:45:00',
    account: 'main',
  },
  {
    id: 'txn_008',
    type: 'expense',
    category: {
      id: 'medicine',
      label: 'Medicine',
      icon: 'medicine',
    },
    amount: 60.25,
    frequency: 'monthly',
    occurredAt: '2025-04-26T11:20:00',
    account: 'main',
  },
];
