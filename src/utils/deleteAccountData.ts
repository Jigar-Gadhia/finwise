export type dataType = {
  id: string;
  type: string;
  text?: string;
  items?: string[];
};

export const deleteAccountData: dataType[] = [
  {
    id: '1',
    type: 'paragraph',
    text: 'This action will permanently delete all of your data, and you will not be able to recover it. Please keep the following in mind before proceeding:',
  },
  {
    id: '2',
    type: 'points',
    items: [
      'All your expenses, income and associated transactions will be eliminated.',
      'You will not be able to access your account or any related information.',
      'This action cannot be undone.',
    ],
  },
];
