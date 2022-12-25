import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";



export const fatchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-2022-10-default-rtdb.europe-west1.firebasedatabase.app/Cart.json');

            if (!response.ok) {
                throw new Error("Could not fetch Cart!");
            }
            const data = await response.json();
            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Fetching cart data faild!"
            }));
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: "Sending...",
            message: 'Sending cart data!'
        }));
        const response = async () => {
            const responseData = await fetch('https://react-2022-10-default-rtdb.europe-west1.firebasedatabase.app/Cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                })
            });

            if (!responseData.ok) {
                throw new Error("Sending cart data feiled!");
            }
        }

        try{
            await response(); 

            dispatch(uiActions.showNotification({
                status: "success",
                title: "Success!",
                message: "Sent cart data success!"
            }));
        }catch(error){
            dispatch(uiActions.showNotification({
                status:"error",
                title: "Error!",
                message: "Sent cart data faild!"
              }))
        }
    }
}