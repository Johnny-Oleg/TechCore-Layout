export const useSplitUsers = loc => {
	const usersClone = structuredClone(loc.users);

	if (loc.name === 'USA' && loc.id === 3) usersClone.length = 82; // 👈 mockup users

	// const usersToShow = usersClone
	// 	.filter(user => user.userId <= 8 - String(usersClone.length).length);
	
	const splitUsers = users => {                      // 👈 max users to show
        const index = String(users.length).length;

		if (users.length <= 7 ) return users.splice(0);

		if (users.length > 7 && users.length <= 16) {
			return users.splice(0, 9 - index);
		}

        if (index >= 6) return users.splice(0, 5);

		return users.splice(0, 8 - index);	
	}

	const usersToShow = splitUsers(usersClone);

	return [usersToShow, usersClone];
}