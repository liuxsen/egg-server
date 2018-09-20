// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Home from '../../../app/controller/home';
import Shop from '../../../app/controller/shop';
import User from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    home: Home;
    shop: Shop;
    user: User;
  }
}
