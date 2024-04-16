import { resource } from '../../fetch';
import { YandexApi } from '../../config';
import {
  GetUserInfoType,
  PostCreateUserType,
  PostSignInUserType,
  PutChangeAvatar,
  PutChangePassType,
  PutChangeUserProfileType,
} from '../../types/user';
import {
  ChangePass,
  ChangeUserProfile,
  CreateUserType,
  SignInUserType,
} from '../../../types/user';
import { CreateUserSource, UserInfo } from './user.source';

export const getUserInfo = () => {
  const response = resource.get<GetUserInfoType>(`${YandexApi}v2/auth/user`, {
    data: {},
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  }).then((res:UserInfo) => res);

  return response;
};
export const postCreateUser = (user:CreateUserType) => {
  const response = resource.post<PostCreateUserType>(`${YandexApi}v2/auth/signup`, {
    data: user,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  }).then((res:CreateUserSource) => res.id);

  return response;
};

export const postSignInUser = (user:SignInUserType) => {
  const response = resource.post<PostSignInUserType>(`${YandexApi}v2/auth/signin`, {
    data: user,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  });

  return response;
};

export const postLogOut = () => {
  const response = resource.post<{}>(`${YandexApi}v2/auth/logout`, {});

  return response;
};

export const putChangePass = (data: ChangePass) => {
  const response = resource.put<PutChangePassType>(`${YandexApi}v2/user/password`, {
    data,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  });

  return response;
};

export const putChangeAvatar = (data:FormData) => {
  const response = resource.put<PutChangeAvatar>(`${YandexApi}v2/user/profile/avatar`, {
    data,
  });

  return response;
};

export const putChangeUserProfile = (data: ChangeUserProfile) => {
  const response = resource.put<PutChangeUserProfileType>(`${YandexApi}v2/user/profile`, {
    data,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  });

  return response;
};
