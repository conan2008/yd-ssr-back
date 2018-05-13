
import config from '../config/config';
import safeRequest from '../libs/safeRequest';

export default class CrouseService {

    constructor(ctx) {
        this.ctx = ctx;
    }

    getScoreList(ctxx) {
        const data = {
            // uid: this.ctx.session.userInfo.uid
            uid: ctxx.session.userInfo.uid
        };
        const safeRequestIns = new safeRequest(ctxx, config.getStudentScoreList, data);
        return safeRequestIns.request();
    }
}