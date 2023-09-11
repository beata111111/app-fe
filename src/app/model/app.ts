import {UserQueuedWord} from "./queue";
import {UserWordsBundle} from "./user-words";
import {User} from "./user";

export interface AppState {
  user: User,
  queue: UserQueuedWord[],
  userWords: UserWordsBundle[],
}
