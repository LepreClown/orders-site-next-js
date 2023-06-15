import { NextPage } from 'next'

export type TypeRoles = { isOnlyAdmin?: string; isOnlyUser?: string }

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles

export type TypeComponentAuthFields = { Component: TypeRoles }
