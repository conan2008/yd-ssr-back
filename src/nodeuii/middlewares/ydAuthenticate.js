
import Store from '../libs/loginValidate';
const ydAuthenticate = ()=>{
    return async (ctx, next)=>{
            //注入session
            const redisResult = (new Store(ctx)).get();
        
            await redisResult.then((res) => {
                ctx.session.userInfo = res;
            });
            await next();

    }
};
export default ydAuthenticate;