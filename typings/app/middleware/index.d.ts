// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import AuthToken from '../../../app/middleware/auth_token';
import ErrorHandler from '../../../app/middleware/error_handler';
import Gzip from '../../../app/middleware/gzip';
import NotfoundHandler from '../../../app/middleware/notfound_handler';
import Robot from '../../../app/middleware/robot';

declare module 'egg' {
  interface IMiddleware {
    authToken: typeof AuthToken;
    errorHandler: typeof ErrorHandler;
    gzip: typeof Gzip;
    notfoundHandler: typeof NotfoundHandler;
    robot: typeof Robot;
  }
}
