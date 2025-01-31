
import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const userSchema = new Schema({
    userName: String,
    passwordHash: String,
});
const UserModel = model('User', userSchema);
export default UserModel;