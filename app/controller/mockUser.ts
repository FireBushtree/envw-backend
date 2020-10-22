import { Controller } from 'egg';
import { USER } from '../constants/user';
import { response } from '../utils/response';

export default class MockUserController extends Controller {
  // 返回模拟人员信息
  public async index() {
    const { ctx } = this;
    ctx.body = response({
      data: USER,
      result: 0,
    });
  }
}
