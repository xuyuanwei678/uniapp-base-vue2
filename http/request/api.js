/* 
 *
 */
import request from '../axios.js'
import {
	API_TEST
} from '../api/api.js'
/**
 * 
 * @param {get请求参数，Object} params 
 */
export const API_TEST_GET = (params)=>{
	return request.req({
		url: API_TEST,
		method: 'GET',
		param
	})
}
/**
 * 
 * @param {post请求参数，Object} data 
 */
export const API_TEST_POST = (data)=>{
	return request.req({
		url: API_TEST,
		method: 'POST',
		data
	})
}