import { api } from '@/lib/axios'

interface GetProfileResponse {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string | null
  bio: string
  followers: number
}

export async function getProfile(username: string) {
  const response = await api.get<GetProfileResponse>(`/users/${username}`)

  return response.data
}
