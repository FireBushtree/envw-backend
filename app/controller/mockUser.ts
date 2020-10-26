import { Controller } from 'egg';
import { CAPTCHA } from '../constants/captcha';
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

  // 返回验证码
  public async captcha() {
    const { ctx } = this;
    ctx.body = CAPTCHA;
  }
}
