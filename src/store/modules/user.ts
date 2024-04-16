import {
  postCreateUser,
  postLogOut,
  postSignInUser, putChangeAvatar,
  putChangePass,
  putChangeUserProfile,
} from '../../api/resources';
import {
  ChangePass, ChangeUserProfile, CreateUserType, SignInUserType,
} from '../../types/user';

interface UserStore {
  id: null | number
}

const initialState:UserStore = {
  id: null,
};

export const createUserThunk = (data: CreateUserType) => postCreateUser(data)
  .then((id) => {
    initialState.id = id;
  });

export const signInUserThunk = (data: SignInUserType) => postSignInUser(data);

export const changePass = (data: ChangePass) => putChangePass(data);

export const changeAvatarThunk = (data: FormData) => putChangeAvatar(data);

export const changeUserProfile = (data:ChangeUserProfile) => putChangeUserProfile(data);

export const logOutUserThunk = () => postLogOut();
