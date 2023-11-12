const { Child } = require("../../DB");
const { createChild } = require("../ChildControllers");
const createUser = require("./createUser");
module.exports = async (Userdata, ChildData) => {
  try {
    if (!Userdata || !ChildData) {
      throw new Error("Incomplete data");
    }
    const UserCreated = await createUser(Userdata);
    if (!UserCreated || !UserCreated.id)
      throw new Error("Error when creating user");
    ChildData.UserId = UserCreated.id;//relation user-child
    const ChildCreated = await createChild(ChildData);
    if (!ChildCreated) throw new Error("Error when creating child");
    return { user: UserCreated, child: ChildCreated };
  } catch (error) {
    throw new Error(`Error en el servidor 'registerUser': ${error.message}`);
  }
};
