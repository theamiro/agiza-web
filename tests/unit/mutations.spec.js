import { mutations } from "@/store/mutations"
import { mockUsers } from "@/mock"
import { Role } from "@/helpers/Role"

describe("mutations", () => {
	it("should set a token", () => {
		const state = { token: null }
		const token = "thisisatoken"
		mutations.setToken(state, token)
		expect(state.token).toBe(token)
	})
	it("should add a customer", () => {
		const customer = { id: "999", name: "Johansen Doe" }
		const state = { customers: [] }
		mutations.addCustomer(state, customer)
		expect(state.customers).toEqual([customer])
	})
	it("should logout user", () => {
		const state = { token: "thisisanothertoken" }
		mutations.logout(state)
		expect(state.token).toBeNull()
	})
	it("should set customers", () => {
		const state = { customers: [] }
		const customers = mockUsers.filter((user) => Role.Customer === user.role)
		mutations.setCustomers(state, customers)
		expect(state.customers.length).toBe(2)
	})
	it("should Set Customer Form", () => {
		const state = { customerForm: {} }
		const form = {
			firstName: "John",
			lastName: "Doe",
			emailAddress: "john@mail.com",
			phoneNUmber: "+25470999999",
			country: "Kenya",
		}
		mutations.setCustomerForm(state, form)
		expect(state).toEqual({
			customerForm: {
				firstName: "John",
				lastName: "Doe",
				emailAddress: "john@mail.com",
				phoneNUmber: "+25470999999",
				country: "Kenya",
			},
		})
	})
	it("should clear customer Form", () => {
		const state = {
			customerForm: {
				firstName: "John",
				lastName: "Doe",
				emailAddress: "john@mail.com",
				phoneNUmber: "+25470999999",
				country: "Kenya",
			},
		}
		mutations.clearCustomerForm(state)
		expect(state.customerForm).toEqual({})
	})
	it("should set User", () => {
		const state = { currentUser: {} }
		const user = { emailAddress: "agent@agent.com", password: "agent" }
		mutations.setCurrentUser(state, user)
		expect(state.currentUser).toEqual({ emailAddress: "agent@agent.com", password: "agent" })
	})
	it("should place order", () => {
		const state = { orders: [] }
		const product = { id: "1", title: "Baseball bat" }
		mutations.placeOrder(state, product)
		expect(state.orders.length).toBe(1)
	})
})
