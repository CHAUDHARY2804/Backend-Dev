import Member from "../models/member.js";

export const createMember = async (data) => {
  return await Member.create(data);
};