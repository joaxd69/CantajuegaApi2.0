const { Membership ,Stage} = require("../../DB");

module.exports = async (id) => {
  try {
    const memberships = !id
      ? await Membership.findAll({ include: ["Users",Stage] })
      : await Membership.findByPk(id, { include: ["Users",Stage] });
    if (id && !memberships) throw new Error("Membresia no existe.");
    if (!id && !memberships.length)
      throw new Error("Membresias no encontradas.");
    return memberships;
  } catch (error) {
    throw new Error(`Error en el servidor 'getMembership': ${error.message}`);
  }
};
