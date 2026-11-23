import { v4 as uuidv4 } from "uuid";

// DAO = Data Access Object: the only code that touches the users data.
export default function UsersDao(db: any) {
  const createUser = (user: any) => {
    const newUser = { ...user, _id: uuidv4() };
    db.users = [...db.users, newUser];
    return newUser;
  };

  const findAllUsers = () => db.users;

  const findUserById = (userId: string) =>
    db.users.find((user: any) => user._id === userId);

  const findUserByUsername = (username: string) =>
    db.users.find((user: any) => user.username === username);

  const findUserByCredentials = (username: string, password: string) =>
    db.users.find(
      (user: any) => user.username === username && user.password === password
    );

  // Merge the changed fields into the existing user
  const updateUser = (userId: string, updates: any) => {
    db.users = db.users.map((u: any) =>
      u._id === userId ? { ...u, ...updates, _id: userId } : u
    );
    return findUserById(userId);
  };

  const deleteUser = (userId: string) => {
    db.users = db.users.filter((u: any) => u._id !== userId);
  };

  return {
    createUser,
    findAllUsers,
    findUserById,
    findUserByUsername,
    findUserByCredentials,
    updateUser,
    deleteUser,
  };
}
