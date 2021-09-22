import { mutations } from "@/store/mutations"
import { mockCustomers } from "@/mock"

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
		const customers = mockCustomers
		mutations.setCustomers(state, customers)
		expect(state.customers.length).toBe(6)
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
})
