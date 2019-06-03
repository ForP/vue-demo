import fetch from '../util/fetch.js'

export default methodName () {
	return fetch({
        url: 'url',
        method: 'post',
        data: dataUtil(data),
    })
}