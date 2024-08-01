import { api } from '@/lib/axios'

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
  const response = await api.get<FetchIssuesResponse>('/search/issues', {
    params: {
      q: query,
    },
  })

  return response.data
}
