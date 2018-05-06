
import { resolve } from "dns";
import config from '../config/config';
import safeRequest from '../libs/safeRequest';

export default class NoticeService {

    constructor(ctx) {
        this.ctx = ctx;
    }

    getData() {
        return new Promise((resolve, reject) => {
            const safeRequestIns = new safeRequest(this.ctx, config.getTgetLastNotice, {});
            resolve(safeRequestIns.request())
 
        });
    }
}
