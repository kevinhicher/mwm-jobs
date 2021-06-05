import axios from "axios";
import { API_URL } from "../constants/api";

export class JobService {

  static async getJobsByTeam() {
    const { data } = await axios.get(API_URL);
    return data;
  }
}