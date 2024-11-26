import request from '@/utils/request'


export function getQueueRecords(){
    return [
        {
            number:"11",
            time:"2023-32-32-90-909",
            status:0
        },
        {
            number:"22",
            time:"1998-32-32-90-909",
            status:1
        },
    ]
    // request.get('/queue_records',{
    //     params:{
    //         id
    //     }
    // })
}