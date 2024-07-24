import { api } from '@/lib/axios'

interface Issue {
  title: string
  body: string
  created_at: string
  number: number
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
