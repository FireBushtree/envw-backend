// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportMockMenu from '../../../app/controller/mockMenu';
import ExportMockUser from '../../../app/controller/mockUser';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    mockMenu: ExportMockMenu;
    mockUser: ExportMockUser;
  }
}
