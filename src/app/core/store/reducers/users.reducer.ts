import { UserInfo } from 'firebase';
import { GET_USER_SUCCESS, UsersAction } from '../actions/users.action';

export interface UsersState {
	user?: UserInfo;
}

export const initialState: UsersState = {};

export function usersReducer(state = initialState, action: UsersAction): UsersState {
	switch (action.type) {
		case GET_USER_SUCCESS: {
			const { uid, providerId, displayName, photoURL, phoneNumber, email } = action.payload;

			return {
				...state,
				user: { uid, providerId, displayName, photoURL, phoneNumber, email }
			};
		}

		default: {
			return state;
		}
	}
}
