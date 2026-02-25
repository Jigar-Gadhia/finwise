export type termsType = {
  id: string;
  type: string;
  text?: string;
  items?: string[];
};

export const TERMS: termsType[] = [
  {
    id: '1',
    type: 'title',
    text: 'Est Fugiat Assumenda Aut Reprehenderit',
  },
  {
    id: '2',
    type: 'paragraph',
    text: 'Lorem ipsum dolor sit amet. Et odio officia aut voluptate internos est omnis vitae ut architecto sunt non tenetur fuga ut provident vero. Quo aspernatur facere et consectetur ipsum et facere corrupti est asperiores facere. Est fugiat assumenda aut reprehenderit voluptatem sed.',
  },
  {
    id: '3',
    type: 'list',
    items: [
      'Ea voluptates omnis aut sequi sequi.',
      'Est dolore quae in aliquid ducimus.',
      'Aut ipsum quis qui porro quasi.',
      'Sit consequatur neque ab vitae facere.',
    ],
  },
  {
    id: '4',
    type: 'paragraph',
    text: 'Aut quidem accusantium nam alias autem eum officiis placeat et omnis autem id officiis perspiciatis qui corrupti officia eum aliquam provident. Eum voluptas error et optio dolorum cum molestiae nobis et odit molestiae quo magnam impedit sed fugiat nihil non nihil vitae.',
  },
  {
    id: '5',
    type: 'points',
    items: [
      'Aut fuga sequi eum voluptatibus provident.',
      'Eos consequuntur voluptas vel amet eaque aut dignissimos velit.',
    ],
  },
  {
    id: '6',
    type: 'paragraph',
    text: 'Vel exercitationem quam vel eligendi rerum At harum obcaecati et nostrum beatae? Ea accusantium dolores qui rerum aliquam est perferendis mollitia et ipsum ipsa qui enim autem At corporis sunt. Aut odit quisquam est reprehenderit itaque aut accusantium dolor qui neque repellat.',
  },
];
