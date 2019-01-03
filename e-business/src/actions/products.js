import axios from 'axios';
export const getListData = data=>{
	return {
		type:'GETLISTS',
		payload : data
	}
}

export function fetchList(params = {page:1}){
	return (dispatch) => {
		const url = `http://localhost:8000/products?_page=${params.page}&_limit=5`;
        axios({
            url   : url,
            method: 'get'
        }).then(res=>{

            var jsonData = {
                total: +res.headers['x-total-count'],
                rows : res.data
            }

            dispatch(getListData(jsonData));
        })
	}
}