import {icons} from './icons';

export type NotificationType =
  | 'reminder'
  | 'update'
  | 'transaction'
  | 'expense_record';

export type NotificationGroup = 'today' | 'yesterday' | 'weekend';

export type NotificationItem = {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  meta?: string;
  time: string;
  icon: keyof typeof icons;
};

export type BackendNotificationResponse = {
  today: NotificationItem[];
  yesterday: NotificationItem[];
  weekend: NotificationItem[];
};

export const notifications: BackendNotificationResponse = {
  today: [
    {
      id: 'notif_001',
      type: 'reminder',
      title: 'Reminder!',
      description: 'Set up your automatic savings to meet your savings goal...',
      time: '2025-04-24T17:00:00',
      icon: 'bell',
    },
    {
      id: 'notif_002',
      type: 'update',
      title: 'New Update',
      description: 'Set up your automatic savings to meet your savings goal...',
      time: '2025-04-24T17:00:00',
      icon: 'star',
    },
  ],

  yesterday: [
    {
      id: 'notif_003',
      type: 'transaction',
      title: 'Transactions',
      description: 'A new transaction has been registered',
      meta: 'Groceries | Pantry | -$100.00',
      time: '2025-04-23T17:00:00',
      icon: 'dollar',
    },
    {
      id: 'notif_004',
      type: 'reminder',
      title: 'Reminder!',
      description: 'Set up your automatic savings to meet your savings goal...',
      time: '2025-04-23T17:00:00',
      icon: 'bell',
    },
  ],

  weekend: [
    {
      id: 'notif_005',
      type: 'expense_record',
      title: 'Expense Record',
      description: 'We recommend that you be more attentive to your finances.',
      time: '2025-04-21T17:00:00',
      icon: 'arrowDownNoti',
    },
    {
      id: 'notif_006',
      type: 'transaction',
      title: 'Transactions',
      description: 'A new transaction has been registered',
      meta: 'Food | Dinner | -$70.40',
      time: '2025-04-21T17:00:00',
      icon: 'dollar',
    },
  ],
};
