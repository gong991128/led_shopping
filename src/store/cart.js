// import { postaddcart } from '../api/user'
// import { List } from 'vant'
const cart = {
    state: {
        cartlists: [],
        text:[]
    },

    mutations: {
        ADDCARTLIST(state, cartlists) {
            state.cartlists = cartlists;
        },
        // 单选
        DXUAN(state,item){
            state.cartlists.forEach(element => {
                if(element.id == item.id){
                    
                }
            });
        }


    },
    getters:{
        // num(state){
        //     var add=1
        //     state.cartlists.map(ele=>{
        //         add+=Number(ele.price);
        //     })
        //     return add*100;
        // }
    },
    actions: {
        // 拿到购物车的数据
        ADDCARTLIST(context, cartlists) {
            context.commit("ADDCARTLIST", cartlists)
        },
        // 单选
        DXUAN(context,item){
            context.commit('DXUAN',item);
        }
    }
}
export default cart;