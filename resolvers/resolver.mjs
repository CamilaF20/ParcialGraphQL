import Database from "../models/database.js";

const resolvers = {
  Query: {
    getAll: async () => await Database.find(),
    getById: async (_, { id }) => await Database.findById(id),
    getBetweenCalories: async (_, { min, max }) =>
      await Database.find({ calories: { $gte: min, $lte: max } }),
  },

  Mutation: {
    createDatabase: async (_, args) => {
      const record = new Database(args);
      await record.save();
      return record;
    },

    updateDatabase: async (_, { id, ...data }) =>
      await Database.findByIdAndUpdate(id, data, { new: true }),

    deleteDatabase: async (_, { id }) => {
      await Database.findByIdAndDelete(id);
      return "Registro eliminado correctamente";
    },
  },
};

export default resolvers;
