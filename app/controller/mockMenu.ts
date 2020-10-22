import { Controller } from 'egg';
import { MenuMock } from '../constants/menu';
import { response } from '../utils/response';

export default class MockMenuController extends Controller {
  // 返回模拟菜单
  public async index() {
    const { ctx } = this;
    ctx.body = response({
      data: JSON.stringify(MenuMock),
      result: 0,
    });
  }
}
