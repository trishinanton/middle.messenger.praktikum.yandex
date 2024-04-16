export interface CreateUserType {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string
}

export interface SignInUserType {
  login: string,
  password:string
}

export interface ChangePass {
  oldPassword: string,
  newPassword: string
}

export interface ChangeUserProfile {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string
}

export interface ChangeAvatar {
  avatar: FormData
}
