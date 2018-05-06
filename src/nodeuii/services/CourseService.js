
import config from '../config/config';
import safeRequest from '../libs/safeRequest';

export default class CrouseService {

    constructor(ctx) {
        this.ctx = ctx;
    }

    getScoreList() {
        const data = {
            uid: this.ctx.session.userInfo.uid
        };
        const safeRequestIns = new safeRequest(this.ctx, config.getStudentScoreList, data);
        return safeRequestIns.request();
    }
}