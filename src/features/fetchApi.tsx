import { getObjInLocalStorage } from "../data/localStorage";
import { IUsers, IRooms, IBookings } from "./interfaces";
import fetch from "cross-fetch";

const tokenAndIdObj = getObjInLocalStorage("auth");

export const fetchApi = async (
  body: string | IUsers | IRooms | IBookings,
  method: string,
  url: string
) => {
  try {
    const response = await fetch(url, {
      method: method,
      mode: "cors",
      headers: {
        Authorization: `Bearer ${tokenAndIdObj?.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    } else {
      return await response.json();
    }
  } catch (err) {
    console.error(err);
  }
};

export const getApi = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${tokenAndIdObj?.token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    } else {
      return await response.json();
    }
  } catch (err) {
    console.error(err);
  }
};
