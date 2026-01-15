import { createBrowserRouter } from 'react-router'
import App from './App'
import {
  HomePage,
  LibPage,
  NotFoundPage,
  ExercisePage,
  TemplatesPage,
  CreateTemplatesPage,
} from '../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: HomePage },
      {
        path: 'lib',
        Component: LibPage,
        children: [
          { index: true, Component: ExercisePage },
          { path: 'templates', Component: TemplatesPage },
          { path: 'create-templates', Component: CreateTemplatesPage },
        ],
      },
      { path: '*', Component: NotFoundPage },
    ],
  },
])
