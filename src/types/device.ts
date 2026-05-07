export type StorageState = 'ok' | 'unavailable'

export interface Storage {
  id: string
  state: StorageState
}

export interface Device {
  id: number
  site_id: number
  title: string
  description: string
  model: string
  version: string
  enabled: boolean
  connected: boolean
  timezone: string
  storages: readonly Storage[]
}
