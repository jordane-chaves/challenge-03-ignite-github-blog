import { appConfig } from '@/config/app'
import { api } from '@/lib/axios'

import { Issue } from './fetch-issues'

const { REPOSITORY, USERNAME } = appConfig

interface User {
  login: string
}

export interface IssueDetails extends Issue {
  comments: number
  user: User
  html_url: string
}

export async function getIssueDetails(id: string) {
  const response = await api.get<IssueDetails>(
    `/repos/${USERNAME}/${REPOSITORY}/issues/${id}`,
  )

  return response.data
}
