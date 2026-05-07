import type { Device } from '@/types'
import { apiClient } from './client'

export function getDevicesBySiteId(siteId: number): Promise<Device[]> {
  return apiClient.get<Device[]>(`/devices?site_id=${siteId}`)
}
