import { Controller } from 'egg';

export default class ShopController extends Controller {
    public async create() {
        const { ctx } = this;
        ctx.body = 'shop create';
    }
};
