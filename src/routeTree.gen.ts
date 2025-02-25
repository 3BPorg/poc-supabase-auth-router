/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthedImport } from './routes/_authed'
import { Route as AuthOtpCallbackImport } from './routes/auth/otp-callback'

// Create Virtual Routes

const AuthIndexLazyImport = createFileRoute('/auth/')()
const AuthedIndexLazyImport = createFileRoute('/_authed/')()
const AuthLinkAccountLazyImport = createFileRoute('/auth/link-account')()
const AuthedAboutLazyImport = createFileRoute('/_authed/about')()

// Create/Update Routes

const AuthedRoute = AuthedImport.update({
  id: '/_authed',
  getParentRoute: () => rootRoute,
} as any)

const AuthIndexLazyRoute = AuthIndexLazyImport.update({
  id: '/auth/',
  path: '/auth/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/auth/index.lazy').then((d) => d.Route))

const AuthedIndexLazyRoute = AuthedIndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthedRoute,
} as any).lazy(() => import('./routes/_authed/index.lazy').then((d) => d.Route))

const AuthLinkAccountLazyRoute = AuthLinkAccountLazyImport.update({
  id: '/auth/link-account',
  path: '/auth/link-account',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/auth/link-account.lazy').then((d) => d.Route),
)

const AuthedAboutLazyRoute = AuthedAboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => AuthedRoute,
} as any).lazy(() => import('./routes/_authed/about.lazy').then((d) => d.Route))

const AuthOtpCallbackRoute = AuthOtpCallbackImport.update({
  id: '/auth/otp-callback',
  path: '/auth/otp-callback',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authed': {
      id: '/_authed'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthedImport
      parentRoute: typeof rootRoute
    }
    '/auth/otp-callback': {
      id: '/auth/otp-callback'
      path: '/auth/otp-callback'
      fullPath: '/auth/otp-callback'
      preLoaderRoute: typeof AuthOtpCallbackImport
      parentRoute: typeof rootRoute
    }
    '/_authed/about': {
      id: '/_authed/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AuthedAboutLazyImport
      parentRoute: typeof AuthedImport
    }
    '/auth/link-account': {
      id: '/auth/link-account'
      path: '/auth/link-account'
      fullPath: '/auth/link-account'
      preLoaderRoute: typeof AuthLinkAccountLazyImport
      parentRoute: typeof rootRoute
    }
    '/_authed/': {
      id: '/_authed/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthedIndexLazyImport
      parentRoute: typeof AuthedImport
    }
    '/auth/': {
      id: '/auth/'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface AuthedRouteChildren {
  AuthedAboutLazyRoute: typeof AuthedAboutLazyRoute
  AuthedIndexLazyRoute: typeof AuthedIndexLazyRoute
}

const AuthedRouteChildren: AuthedRouteChildren = {
  AuthedAboutLazyRoute: AuthedAboutLazyRoute,
  AuthedIndexLazyRoute: AuthedIndexLazyRoute,
}

const AuthedRouteWithChildren =
  AuthedRoute._addFileChildren(AuthedRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof AuthedRouteWithChildren
  '/auth/otp-callback': typeof AuthOtpCallbackRoute
  '/about': typeof AuthedAboutLazyRoute
  '/auth/link-account': typeof AuthLinkAccountLazyRoute
  '/': typeof AuthedIndexLazyRoute
  '/auth': typeof AuthIndexLazyRoute
}

export interface FileRoutesByTo {
  '/auth/otp-callback': typeof AuthOtpCallbackRoute
  '/about': typeof AuthedAboutLazyRoute
  '/auth/link-account': typeof AuthLinkAccountLazyRoute
  '/': typeof AuthedIndexLazyRoute
  '/auth': typeof AuthIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_authed': typeof AuthedRouteWithChildren
  '/auth/otp-callback': typeof AuthOtpCallbackRoute
  '/_authed/about': typeof AuthedAboutLazyRoute
  '/auth/link-account': typeof AuthLinkAccountLazyRoute
  '/_authed/': typeof AuthedIndexLazyRoute
  '/auth/': typeof AuthIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/auth/otp-callback'
    | '/about'
    | '/auth/link-account'
    | '/'
    | '/auth'
  fileRoutesByTo: FileRoutesByTo
  to: '/auth/otp-callback' | '/about' | '/auth/link-account' | '/' | '/auth'
  id:
    | '__root__'
    | '/_authed'
    | '/auth/otp-callback'
    | '/_authed/about'
    | '/auth/link-account'
    | '/_authed/'
    | '/auth/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthedRoute: typeof AuthedRouteWithChildren
  AuthOtpCallbackRoute: typeof AuthOtpCallbackRoute
  AuthLinkAccountLazyRoute: typeof AuthLinkAccountLazyRoute
  AuthIndexLazyRoute: typeof AuthIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthedRoute: AuthedRouteWithChildren,
  AuthOtpCallbackRoute: AuthOtpCallbackRoute,
  AuthLinkAccountLazyRoute: AuthLinkAccountLazyRoute,
  AuthIndexLazyRoute: AuthIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authed",
        "/auth/otp-callback",
        "/auth/link-account",
        "/auth/"
      ]
    },
    "/_authed": {
      "filePath": "_authed.tsx",
      "children": [
        "/_authed/about",
        "/_authed/"
      ]
    },
    "/auth/otp-callback": {
      "filePath": "auth/otp-callback.tsx"
    },
    "/_authed/about": {
      "filePath": "_authed/about.lazy.tsx",
      "parent": "/_authed"
    },
    "/auth/link-account": {
      "filePath": "auth/link-account.lazy.tsx"
    },
    "/_authed/": {
      "filePath": "_authed/index.lazy.tsx",
      "parent": "/_authed"
    },
    "/auth/": {
      "filePath": "auth/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
