import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
	const {users, error, loading, page} = useTypedSelector(state => state.user)
	const {fetchUsers, setUsersPage} = useActions()
	const pages = [1, 2, 3, 4, 5]

	useEffect(() => {
		fetchUsers(page)
	}, [page])

	if (loading) {
		return <h1>Идет загрузка...</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}

	return (

		<div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}><b>Users
			List:</b>
			{users.map(user =>
				<div key={user.id}
					 style={{border: `1px solid gray`, width: `250px`, padding: `10px`}}>{user.id} - {user.name},
					<div>email: {user.username},</div>
					<div>adress: {user.address.city},</div>
					<div>zipcode: {user.address.zipcode},</div>
					<div>phone: {user.phone},</div>
				</div>
			)}
			<div style={{display: "flex"}}>
				{pages.map((p, ind) =>
					<div key={ind}
						 onClick={() => setUsersPage(p)}
						 style={{border: p === page ? '2px solid red' : '1px solid gray', padding: 10}}
					> {p}</div>)}
			</div>
		</div>


	);
};

export default UserList;
