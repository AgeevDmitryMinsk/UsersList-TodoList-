export interface UserState {
	users: UserType[];
	loading: boolean;
	error: null | string;
	page: number
}

export interface UserType {
	id: number
	name: string
	username: string
	email: string
	address: AddressType
	phone: string
	website: string
	company: CompanyType
}

interface AddressType {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: GeoType
}
interface GeoType {
	lat: string
	lng: string
}
interface  CompanyType {
	name: string
		catchPhrase: string
		bs: string
}



export enum UserActionTypes {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
	FETCH_USERS_ERROR = 'FETCH_USERS_FETCH_USERS_ERROR',
	SET_USERS_PAGE = 'SET_USERS_PAGE'
}

interface FetchUsersAction {
	type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
	type: UserActionTypes.FETCH_USERS_SUCCESS;
	payload: any[]
}

interface FetchUsersErrorAction {
	type: UserActionTypes.FETCH_USERS_ERROR;
	payload: string;
}

interface SetUsersPage {
	type: UserActionTypes.SET_USERS_PAGE
	payload: number

}

export type UserAction = FetchUsersAction
	| FetchUsersErrorAction
	| FetchUsersSuccessAction
	| SetUsersPage
