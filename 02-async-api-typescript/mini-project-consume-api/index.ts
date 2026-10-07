import { getUsers, User } from "./api"; 

async function main() {
  console.log("Loading...");

  try {
    const users: User[] = await getUsers();

    console.log("\n=== DATA SISWA ===");

    users.forEach((user) => {
      console.log(`ID     : ${user.id}`);
      console.log(`Nama   : ${user.name}`);
      console.log(`Email  : ${user.email}`);
      console.log(`Kota   : ${user.address.city}`);
      console.log("------------------------");
    });

    console.log(`Total data: ${users.length}`);
  } catch (error) {
    console.log("\nError:");

    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

main();