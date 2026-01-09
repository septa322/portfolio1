import { createBrowserRouter } from 'react-router'
import App from './App'
import HomePage from '../pages/HomePage/HomePage.ui'
import LibPage from '../pages/LibPage/LibPage.ui'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.ui'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: 'lib', Component: LibPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
])
