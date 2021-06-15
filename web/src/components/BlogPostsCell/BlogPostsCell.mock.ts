// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  posts: [
    { id: 42, title: 'first', body: 'first', createdAt: new Date().toISOString() },
    { id: 43, title: 'second', body: 'second', createdAt: new Date().toISOString() },
    { id: 44, title: 'third', body: 'third', createdAt: new Date().toISOString() },
  ],
});
