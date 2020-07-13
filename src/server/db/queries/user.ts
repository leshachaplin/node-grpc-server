// import UserModel from "../../models/user";
// const {User} = require('../models/user')
//
// function findUser(UserId:string) {
//     return User.query()
//         .select('UserId', 'Password', 'Confirmed')
//         .where('UserId', '=', UserId);
// }
//
// async function ifExistUser(id:string) {
//     console.log(id);
//     let user = await User.query().findOne({UserId: id});
//     console.log(user);
//     if (!user) {
//         return false;
//     }
//     return true;
// }
//
// function addUser(user:UserModel) {
//     return User.query()
//         .insert({
//             UserId: user.UserId,
//             Password: user.Password,
//             Confirmed: user.Confirmed
//         });
// }
//
// function deleteUser(id:string) {
//     return User.query()
//         .delete()
//         .where('UserId', '=', id);
// }
//
// module.exports = {
//     findUser,
//     ifExistUser,
//     addUser,
//     deleteUser
// };
