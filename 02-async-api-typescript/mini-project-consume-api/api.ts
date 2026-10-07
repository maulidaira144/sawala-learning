interface User {
  id: number;
  name: string;
  email: string;
  address: {
  city: string;
  };
}


async function getUsers(): Promise<User[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    if (!response.ok) {
      throw new Error(`Request gagal: ${response.status}`);
    }

    const data: User[] = await response.json();
    return data;
}
export { getUsers, User };