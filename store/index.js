export const state = () => ({
    auth: false,
	cart: [],
	error: "",
	success: "",
})

export const getters = {
	// ---------------------- //
	//  CART RELATED GETTERS  //
	// ---------------------- //

	cart: (state) => state.cart,
	price: state => {
		return state.cart.reduce(
			(accumulator, item) => accumulator + item.price,
			0
		);
	},
	totalItems: state => {
		return state.cart.length;
	},
	shippingCost: state => {
		return state.cart.length > 0 ? 10 : 0;
	},

	// ---------------------- //
	//  ALERT RELATED GETTERS //
	// ---------------------- //

	error: (state) => state.error,
	success: (state) => state.success,

}

export const mutations = {
	// ----------------------- //
	//  CART RELATED MUTATION  //
	// ----------------------- //
	ADD_ITEM(state, product) {
		state.cart.push(product);
	},
	REMOVE_ITEM(state, id) {
		const index = state.cart.map(item => item.id).indexOf(id);
		state.cart.splice(index, 1);
	},
	CLEAR_CART(state) {
		state.cart = [];
	},

	// ----------------------- //
	//  AUTH RELATED MUTATION  //
	// ----------------------- //
    isAuth(state) {
        state.auth = true;
    },
    loggedOut(state) {
        state.auth = false
    },

	// ----------------------- //
	//  ALERT RELATED MUTATION //
	// ----------------------- //
	ADD_ERROR(state, message) {
		this.state.error = message;
	},
	ADD_SUCCESS(state, message) {
		this.state.success = message;
	},
	CLEAR_ALERT(state) {
		this.state.error = "";
		this.state.success = "";
	},
}

export const actions = {
	// ----------------------- //
	//  CART RELATED ACTIONS   //
	// ----------------------- //
	addItemToCart(context, product) {
		context.commit("ADD_ITEM", product);
	},

	removeItemFromCart(context, id) {
		context.commit("REMOVE_ITEM", id);
	},

	clearCart(context) {
		context.commit("CLEAR_CART");
	},

	// ----------------------- //
	//  ALERT RELATED ACTIONS  //
	// ----------------------- //
	addError(context, error) {
		context.commit("ADD_ERROR", error);

		setTimeout(() => {
			context.commit("CLEAR_ALERT")
		}, 3000);
	},
	addSuccess(context, message) {
		context.commit("ADD_SUCCESS", message);

		setTimeout(() => {
			context.commit("CLEAR_ALERT")
		}, 3000);
	},
	clearAlert(context) {
		context.commit("CLEAR_ALERT");
	},
}
