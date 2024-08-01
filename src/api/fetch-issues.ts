import { appConfig } from '@/config/app'
import { api } from '@/lib/axios'

const { REPOSITORY, USERNAME } = appConfig

export interface Issue {
  title: string
  body: string
  number: number
  created_at: string
}

interface FetchIssuesResponse {
  items: Issue[]
}

export async function fetchIssues(query?: string) {
  const queryData = [query, `repo:${USERNAME}/${REPOSITORY}`].join(' ')

  const response = await api.get<FetchIssuesResponse>('/search/issues', {
    params: {
      q: queryData,
    },
  })

  return response.data
}
