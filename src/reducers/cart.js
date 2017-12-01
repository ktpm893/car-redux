import * as Types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data
    ? data
    : [];
/* var initialState = [
    {
       product:{
        id: 1,
        name: 'Iphone 7 plust',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'sp do apple',
        price: 500,
        inventory: 10,
        rating: 4
        },
        quantity:5
    },
    {
        product: {
            id: 3,
            name: 'Iphone 8+ plus',
            image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description: 'sp do apple',
            price: 1500,
            inventory: 15,
            rating :4
        },
        quantity:6
    }
]; */

const cart = (state = initialState, action) => {
    var {product, quantity} = action;
    var index = -1;
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({product, quantity})
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}
var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }

        }
    }
    return index;
}

export default cart;