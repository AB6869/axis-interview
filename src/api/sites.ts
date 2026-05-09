import type { Site } from '@/types'
import { apiClient } from './client'

export function getSitesByOwner(owner: string): Promise<Site[]> {
  return apiClient.get<Site[]>(`/sites?owner=${encodeURIComponent(owner)}`)
}

export function getSiteById(id: number): Promise<Site> {
  return apiClient.get<Site>(`/sites/${id}`)
}
