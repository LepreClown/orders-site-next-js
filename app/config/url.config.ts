export const getOrderUrl = (id: string) => `/order/${id}`
export const getSystemUrl = (slug: string) => `/system/${slug}`
export const getBuildingUrl = (slug: string) => `/building/${slug}`
export const getImportantUrl = (slug: string) => `/important/${slug}`
export const getStatusUrl = (slug: string) => `/status/${slug}`
export const getRoleUrl = (slug: string) => `/role/${slug}`

export const getAdminUrl = (url: string) => `/admin/${url}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)
