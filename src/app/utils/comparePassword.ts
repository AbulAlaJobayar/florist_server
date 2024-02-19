import bcrypt from 'bcrypt';
const comparePassword = (password: string, hashedPassword: string) => {
  const result = bcrypt.compareSync(password, hashedPassword);
  return result;
};
export default comparePassword;