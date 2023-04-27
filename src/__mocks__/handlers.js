import { rest } from 'msw';

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(list));
  }),

  rest.post('/users', async (req, res, ctx) => {
    const newData = await req.json();
    list.push(newData);
    return res(ctx.status(201), ctx.json({ result: 'ok' }));
  }),

  rest.get('/issues', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(issues));
  }),

  rest.get('/labels', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(labels));
  }),

  rest.post('/labels', async (req, res, ctx) => {
    const newData = await req.json();

    if (Math.floor(Math.random() * 10) > 5) {
      return res(ctx.status(500), ctx.json({ error: '서버에러 발생' }));
    }

    labels.push(newData);
    return res(ctx.status(201), ctx.json(labels));
  }),
  rest.get('/labels-delay', async (req, res, ctx) => {
    await new Promise((resolve) => setTimeout(() => resolve(), 5000));
    return res(ctx.status(200), ctx.json(labels));
  }),
];

const issues = [
  {
    title: 'new issue',
    _id: 123,
    tags: [
      {
        tagName: 'bug',
        color: 'brown',
      },
      {
        tagName: 'document',
        color: 'blue',
      },
    ],
    status: 'open',
    'open-date': '6hours',
    creator: 'crongro',
    projects: '',
    milestones: 'sprint2',
    assignee: 'crong',
    subtask: ['loream', 'loreamlorem'],
    'comments-count': 4,
  },

  {
    title: 'new issue 124',
    _id: 124,
    tags: [
      {
        tagName: 'bug',
        color: 'brown',
      },
      {
        tagName: 'document',
        color: 'green',
      },
    ],
    status: 'close',
    'open-date': '6hours',
    creator: 'crongro',
    projects: '',
    milestones: 'sprint2',
    assignee: 'crong',
    subtask: ['loream', 'loreamlorem'],
    'comments-count': 4,
  },

  {
    title: 'new issue 126',
    _id: 125,
    tags: [
      {
        tagName: 'feature',
        color: 'black',
      },
      {
        tagName: 'backend',
        color: 'red',
      },
    ],
    status: 'open',
    'open-date': '3hours',
    creator: 'crongro',
    projects: '',
    milestones: '',
    assignee: 'crong',
    subtask: ['loream', 'loreamlorem'],
    'comments-count': 4,
  },
  {
    title: 'research : lorem...',
    _id: 129,
    tags: [],
    status: 'open',
    'open-date': '3hours',
    creator: 'honux',
    projects: '',
    milestones: '',
    assignee: 'crong',
    subtask: [],
    'comments-count': 0,
  },
];

const labels = [
  {
    name: 'bug',
    color: 'bfdadc',
    description: 'this is red',
  },
  {
    name: 'documentation',
    color: '0075ca',
    description: 'this is documetation',
  },
  {
    name: 'enhancement',
    color: 'a2eeef',
    description: 'this is enhancement',
  },
  {
    name: 'question',
    color: 'd876e3',
    description: 'this is question',
  },
  {
    name: 'invalid',
    color: 'e4e669',
    description: 'this is not valid',
  },
  {
    name: 'duplicate',
    color: 'cfd3d7',
    description: 'this is dulicate',
  },
];
