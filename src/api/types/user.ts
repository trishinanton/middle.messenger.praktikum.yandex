export interface PostCreateUserType {
  data :{
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    password: string,
    phone: string
  },
  headers: Record<string, string>
}

export interface PostSignInUserType {
  data: {
    login: string,
    password: string,
  },
  headers: Record<string, string>
}

export interface PutChangePassType {
  data: {
    oldPassword: string,
    newPassword: string
  },
  headers: Record<string, string>
}

export interface PutChangeAvatar {
  data: FormData,
}

export interface PutChangeUserProfileType {
  data: {
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string
  },
  headers: Record<string, string>
}
