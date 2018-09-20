// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Gzip from '../../../app/middleware/gzip';
import Robot from '../../../app/middleware/robot';

declare module 'egg' {
  interface IMiddleware {
    gzip: typeof Gzip;
    robot: typeof Robot;
  }
}
