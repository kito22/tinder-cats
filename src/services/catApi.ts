import { ICat, IVote } from "src/types/cat";
import api from "./api";

export const fetchCats = async (): Promise<ICat[]> => {
  try {
    const { data } = await api.get<ICat[]>("/breeds");

    return data;
  } catch (error) {
    console.error("Error fetching cats:", error);
    throw error;
  }
};

export const sendVote = async (vote: IVote) => {
  try {
    const { data } = await api.post("/votes", vote);
    return data;
  } catch (error) {
    console.error("Error sending vote:", error);
    throw error;
  }
};

export const fetchCatImage = async (referenceImageId: string) => {
  try {
    const { data } = await api.get(`/images/${referenceImageId}`);
    return data;
  } catch (error) {
    console.error(`Error fetching image for ${referenceImageId}:`, error);
    throw error;
  }
};
