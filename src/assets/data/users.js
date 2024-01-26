const users = [
    {
        id: 1,
        email: 'test@test.com',
        password: 'test1234',
        firstname: 'John',
        lastname: 'Smith',
        categories: [
            {
                id: 1,
                name: 'Action',
                content: [1,5,8,20,45]
            },
            {
                id: 2,
                name: 'Horror',
                content: [15,23,24,28,31,36]
            },
            {
                id: 3,
                name: 'Science-fiction',
                content: [2,20,30]
            },
            {
                id: 4,
                name: 'Romance',
                content: []
            },
        ]
    },
]

export default users