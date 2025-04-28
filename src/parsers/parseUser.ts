 import { User } from "../model/User.ts";
//
// // TODO implement parser
  export const parseUser = (data: User): User => {
      return {
          name: data.name,
          dateOfBirth: data.dateOfBirth,
          weight: data.weight,
          height: data.height,
          diagnosis: data.diagnosis,
      };
  };
