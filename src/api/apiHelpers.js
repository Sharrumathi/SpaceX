import axios from 'axios';

export const getSpaceList = () => {
    try {
        return axios.get(`https://api.spaceXdata.com/v3/launches?limit=100`)
            .then(res => {
                if(res.status === 200) {
                    return res.data
                }
            })
    } catch (error) {
        console.log('Get Space List Error', error)
    }
}