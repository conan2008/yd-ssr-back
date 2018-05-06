import {
    createApp
} from './main.js';
//核心的目的 有2个 
//摘取每一个当前路由 index/test -> vue router=>compents
//compents异步的数据 组装成一个页面
//把后端请求的这套流程的数据交给 context.state
export default context => {
    return new Promise((resolve, reject) => {
        const {
            app,
            router,
            store
        } = createApp();
        //后台真实的路由 a/b 
        //router是前端的路由 context.url后台给你的环境
        router.push(context.url);
        router.onReady(() => {
            const matchCompents = router.getMatchedComponents();
            console.log("matchCompents", matchCompents);
            Promise.all(matchCompents.map((Component) => {
                    if (Component.asyncData) {

                        return Component.asyncData({
                            store
                        })
                        // Component.asyncData.map((asyncData) => {
                        //     console.log("asyncData", asyncData);
                        //     return asyncData({
                        //         store
                        //     })
                        // })

                    }
                }))
                .then(() => {
                    console.log("store.state", store.state);
                    //读取完
                    context.state = store.state;
                    resolve(app);
                }).catch(reject)
        }, reject);
    });
}