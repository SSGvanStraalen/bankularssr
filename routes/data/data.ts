let users = [
  {username: 'purr', password: 'purr', firstname: 'Purr', lastname: 'Meow', prefix: 'Mr.',img:'purr.jpg'},
  {username: 'kitty', password: 'kitty', firstname: 'Kitty', lastname: 'Meow', prefix: 'Miss',img:'kitty.jpg'},
  {username: 'squeak', password: 'squeak', firstname: 'Tiny', lastname: 'Squeak', prefix: 'Mr.',img:'squeak.jpg'},
];
let accounts = {
  'purr': [
    {acc: 'Foody Account', balance: 1100, accnr: 'NL00 ANGU 4812 3456 01'},
    {acc: 'Mice Hole Account', balance: 4700, accnr: 'NL00 ANGU 4812 3456 02'},
  ],
  'kitty': [
    {acc: 'Foody Account', balance: 1200, accnr: 'NL00 ANGU 4812 3456 03'},
    {acc: 'Mice Nest Account', balance: 3800, accnr: 'NL00 ANGU 4812 3456 04'},
  ],
  'squeak': [
    {acc: 'Cheese Stash', balance: 1500, accnr: 'NL00 ANGU 4812 3456 05'},
    {acc: 'Nuts Stash', balance: 3500, accnr: 'NL00 ANGU 4812 3456 06'},
  ],
};

export {
  users,
  accounts
}
