export interface GetAllChats {
  data :{},
  headers: Record<string, string>
}

export interface GetChatToken {
  data: {},
  headers: Record<string, string>
}

export interface CreateChat {
  data: {
    title: string
  },
  headers: Record<string, string>
}

export interface DeleteChat {
  data: {
    chatId: number
  },
  headers: Record<string, string>
}

export interface AddUsersToChat {
  data: {
    chatId: number,
    users: Array<number>
  },
  headers: Record<string, string>
}
