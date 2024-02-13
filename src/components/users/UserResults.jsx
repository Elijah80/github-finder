import React from 'react'
import { useEffect } from 'react'

function UserResults() {
	useEffect(() => {
    fetchUsers()
  }, [])

	const fetchUsers = async () => {
		const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
			headers: {
				Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
			},
		})
		const data = await res.json()
    console.log(data)
	}

	return <div>UserResults</div>
}

export default UserResults
