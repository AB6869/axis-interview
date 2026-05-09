import { useQuery } from '@tanstack/react-query'
import { getDevicesBySiteId } from '@/api'

export function useDevices(siteId: number) {
  return useQuery({
    queryKey: ['devices', siteId],
    queryFn: () => getDevicesBySiteId(siteId),
    enabled: !Number.isNaN(siteId),
  })
}
