import fs from 'fs';
import update from 'react-addons-update'
let state;

state = {
    order: JSON.parse(fs.readFileSync('./data.json').toString())
}

let updateOrder = update(state.order, {
    //해당 패스 값을 변경
    receive:{
        $set:"서울시  강남구 논현동"
    },
    //해당 패스 값을 변경
    payment:{
        method:{
            $set:"Mobile"
        }
    },

    //배열 인덱스로 찾아서 변경 가능
    products:{
        0:{
            amount:{
                $set: 5
            }
        },
        //배열 요소 세로 추가
        $push: [{
            "no":"p001-001",
            "name":"스트라이프 팬츠",
            "price":1000,
            "amount":2
        }]
    }
});

// updateOrder.payment.method = "Mobile";

console.log(state.order ,updateOrder, updateOrder === state.order );