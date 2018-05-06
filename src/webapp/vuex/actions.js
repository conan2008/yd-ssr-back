import request  from "axios";
request.defaults.baseURL= "http://dev.yidengxuetang.com:8081/";

// export const getUserInfo = ({commit,state})=>{
// 	return request.get('users/getUserInfo').then((response)=>{
// 		if (response.statusText == 'OK') {
// 			commit("USER_INFO",response.data);
// 		}
// 	})
// }

export const getMainData = ({commit,state})=>{
	return request.get('notice').then((response)=>{
		if (response.statusText == 'OK') {
			commit("NOTICE",response.data);
		}
	})
}

export const getCourseData = ({commit,state})=>{
	return request.get('course').then((response)=>{
		if (response.statusText == 'OK') {
			commit("COURSE",response.data);
		}
	})
}


