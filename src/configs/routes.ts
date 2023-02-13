import MainLayout from 'Layouts/MainLayout'
import { lazy } from 'react'

const Home = lazy(() => import('pages/Home'))

const routes = [
  // * ================= Home routes =================
  {
    path: '/claim-nft',
    title: 'Claim NFT',
    component: Home,
    layout: MainLayout,
  },
]

export default routes
