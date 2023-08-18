import { useCallback, useContext } from "react";
import { UserContext } from "../contexts/user/Provider";
import { UserRight } from "../contexts/user/types";

export default function useAuth() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useAuth must be used within a UserProvider");

  const { dispatch } = context;

  const logout = useCallback(async () => {
    /**
     * Loading window or state
     */

    // try {
    // 	await axios.get(`/ur/logout`, {
    // 		headers: { 'Content-Type': 'application/json' },
    // 		withCredentials: true,
    // 	});
    // 	/**
    // 	 * Success window or state
    // 	 */
    // } catch (error) {
    // 	/**
    // 	 * Handle Errors
    // 	 */
    // }
    localStorage.removeItem("access_token");
    dispatch({ type: "REM_AUTH" });
    /**
     * Redirect login page / home page
     */
  }, [dispatch]);

  const login = useCallback(async () => {
    /**
     * Loading window or state
     */

    // try {
    // 	await axios.get(`/ur/logout`, {
    // 		headers: { 'Content-Type': 'application/json' },
    // 		withCredentials: true,
    // 	});
    // 	/**
    // 	 * Success window or state
    // 	 */
    // } catch (error) {
    // 	/**
    // 	 * Handle Errors
    // 	 */
    // }
    // localStorage.setItem("access_token", "");
    dispatch({
      type: "SET_AUTH",
      payload: {
        fullname: "Zubayer",
        id: 1,
        rights: UserRight.USER,
        username: "zubayer",
      },
    });
    /**
     * Redirect login page / home page
     */
  }, [dispatch]);
  return { ...context, logout, login };
}
