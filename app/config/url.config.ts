export const getOrderUrl = (id: string) => `home/order/${id}`
export const getProfile = (id: string) => `/profile`

export const getAdminUrl = (url: string) => `/admin/${url}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)
