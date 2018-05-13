import { route, GET, POST, before } from 'awilix-koa';
@route("/notice")
export default class UserController {
    constructor({ noticeService }) {
        this.noticeService = noticeService;
    }
    // 路由 users 123
    // @route("/:id")
    // @GET()
    // async getUser(ctx, next) {
    //     const result = await this.userService.getData(ctx.params.id);
    //     ctx.body = { data: result };
    // }

     @GET()
     async getUserInfo(ctx, next) {
        let result = {};
        const data = await this.noticeService.getData();
        ctx.body = data.result.notice;
    }
}
