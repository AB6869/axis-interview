import { useQuery } from '@tanstack/react-query'
import { getSiteById } from '@/api'

export function useSite(siteId: number) {
  return useQuery({
    queryKey: ['site', siteId],
    queryFn: () => getSiteById(siteId),
    enabled: !Number.isNaN(siteId),
  })
}
