import { UserDiagnoses } from "../components/UserDiagnoses";

/**
 * TODO
 *
 * 1. Load user from browser localStorage (use useEffect() hook)
 * 2. Set user to component state (use useState() hook)
 * 3. Display name of the user in <h1> tag (see Todo)
 * 4. Display rest in of the data using UserDiagnoses
 */
export const Home = () => {
  return (
    <div>
      <h1>Todo: Display name of the user here</h1>
      <UserDiagnoses />
    </div>
  );
};
