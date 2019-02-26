let users = [
  {username: 'karin', password: 'karin', firstname: 'Karin', lastname:''},
  {username: 'sven', password: 'sven', firstname: 'Sven', lastname:''},
  {username: 'serge', password: 'serge', firstname: 'Serge', lastname:''},
];
let accounts = {
  'karin': [
    {acc: 'Current Account', balance: 100, accnr: 'NL00 ANGU 4812 3456 01'},
    {acc: 'Savings Account', balance: 4000, accnr: 'NL00 ANGU 4812 3456 02'},],
  'sven': [
    {acc: 'Current Account', balance: 200, accnr: 'NL00 ANGU 4812 3456 03'},
    {acc: 'Savings Account', balance: 3000, accnr: 'NL00 ANGU 4812 3456 04'},],
  'serge': [
    {acc: 'Current Account', balance: 300, accnr: 'NL00 ANGU 4812 3456 05'},
    {acc: 'Savings Account', balance: 2000, accnr: 'NL00 ANGU 4812 3456 06'},],
};

export {
  users,
  accounts
}
