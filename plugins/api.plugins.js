export default ({ app }, inject) => {

    inject('login', (body) => {
        return fetch(`${process.env.API_URL}/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "Application/json"
			},
			body: JSON.stringify(body)
		})
        .then(res => res.json())
    })

	inject('register', (body) => {
		return fetch(`${process.env.API_URL}/auth/register`, {
			method: "POST",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(body)
		})
		.then(res => res.json())
	})

    inject('getMe', (id, token) => {
        return fetch(`${process.env.API_URL}/user/${id}`,{
            headers: {
                "x-access-token": token
            }
        })
        .then(res => res.json())
    })

	// ------------------------------------------------------------------------------ //

	inject('editUser', (id, token, body) => {
		return fetch(`${process.env.API_URL}/user/${id}`, {
			method: "PATCH",
			headers: {
				"x-access-token": token,
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(body)
		})
			.then(res => res.json())
	})

	inject('editOrder', (id, token, body) => {
		return fetch(`${process.env.API_URL}/order/${id}`, {
			method: "PATCH",
			headers: {
				"x-access-token": token,
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(body)
		})
			.then(res => res.json())
	})

	inject('editProduct', (id, token, body) => {
		return fetch(`${process.env.API_URL}/product/${id}`, {
			method: "PATCH",
			headers: {
				"x-access-token": token,
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(body)
		})
			.then(res => res.json())
	})

	// ------------------------------------------------------------------------------ //

	inject('deleteOrder', (id, token) => {
		return fetch(`${process.env.API_URL}/order/${id}`, {
			method: "DELETE",
			headers: {
				"x-access-token": token,
			}
		})
			.then(res => res.json())
	})

	inject('deleteProduct', (id, token) => {
		return fetch(`${process.env.API_URL}/product/${id}`, {
			method: "DELETE",
			headers: {
				"x-access-token": token,
			}
		})
			.then(res => res.json())
	})

	inject('deleteUser', (id, token) => {
		return fetch(`${process.env.API_URL}/user/${id}`, {
			method: "DELETE",
			headers: {
				"x-access-token": token,
			}
		})
			.then(res => res.json())
	})

	// ------------------------------------------------------------------------------ //

	inject('getUserOrders', (id, token) => {
		return fetch(`${process.env.API_URL}/order/user/${id}`, {
			headers: {
				"x-access-token": token
			}
		})
		.then(res => res.json());
	})

	// ------------------------------------------------------------------------------ //

	inject('makeOrder', (body, token) => {
		return fetch(`${process.env.API_URL}/orders/`, {
				method: "POST",
				headers: {
					"x-access-token": token,
					"Content-Type": "Application/json",
				},
				body: JSON.stringify(body)
		})
		.then(res => res.json())
	})

	inject('makeProduct', (body, token) => {
		return fetch(`${process.env.API_URL}/products/`, {
				method: "POST",
				headers: {
					"x-access-token": token,
					"Content-Type": "Application/json",
				},
				body: JSON.stringify(body)
		})
		.then(res => res.json())
	})

	// ------------------------------------------------------------------------------ //

	inject('adminShowOrders', (token) => {
		return fetch(`${process.env.API_URL}/orders/`, {
			headers: {
				"x-access-token": token
			}
		})
			.then(res => res.json());
	})

	inject('adminShowProducts', (token) => {
		return fetch(`${process.env.API_URL}/products/`, {
			headers: {
				"x-access-token": token
			}
		})
			.then(res => res.json());
	})

	inject('adminShowUsers', (token) => {
		return fetch(`${process.env.API_URL}/users/`, {
			headers: {
				"x-access-token": token
			}
		})
			.then(res => res.json());
	})

	inject('adminShowOrder', (token, id) => {
		return fetch(`${process.env.API_URL}/order/${id}`, {
			headers: {
				"x-access-token": token
			}
		})
			.then(res => res.json());
	})

	inject('adminShowProduct', (token, id) => {
		return fetch(`${process.env.API_URL}/product/${id}`, {
			headers: {
				"x-access-token": token
			}
		})
			.then(res => res.json());
	})

	inject('adminShowUser', (token, id) => {
		return fetch(`${process.env.API_URL}/user/${id}`, {
			headers: {
				"x-access-token": token
			}
		})
			.then(res => res.json());
	})

	// ------------------------------------------------------------------------------ //

}
