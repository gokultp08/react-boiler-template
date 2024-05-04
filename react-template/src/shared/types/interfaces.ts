export interface IUser {
  name: string;
}

export interface IUserState {
  user: IUser | null;
  token: string | null;
}

export interface IToastContext {
  message: string;
  showToast: (type: "success" | "error" | "info", message: string) => void;
}

export interface ILoginBody {
  username: string;
  password: string;
}
