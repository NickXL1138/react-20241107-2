import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/users-slice";
import { User } from "./user";
import { useRequest } from "../../redux/hooks/use-request";
import { getUsers } from "../../redux/entities/users/get-users";
import { LoadingScreen } from "../loading-screen/loading-screen";

export const UserContainer = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));

  const requestStatus = useRequest(getUsers);

  if (requestStatus === "pending") {
    return <LoadingScreen />;
  }

  if (requestStatus === "rejected") {
    return "error";
  }

  if (!user) {
    return null;
  }

  return <User name={user.name} />;
};
