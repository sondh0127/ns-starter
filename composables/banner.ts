import { useStorage } from '@vueuse/core'
export const ENABLED_BANNER = useStorage('ENABLED_BANNER', useAppConfig().banner.enabled)
