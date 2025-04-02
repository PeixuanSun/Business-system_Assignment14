declare module '*.tsx' {
  import React from 'react'

  // 允许默认导出
  const component: React.ComponentType<any>
  export default component

  // 允许命名导出
  export const Button: React.ComponentType<any> & {
    label?: string
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
    disabled?: boolean
    rounded?: boolean
    onClick?: () => void
  }

  export const Card: React.ComponentType<any>
  export const Dropdown: React.ComponentType<any>
  export const HeroImage: React.ComponentType<any>
  export const Image: React.ComponentType<any>
  export const Label: React.ComponentType<any>
  export const RadioButton: React.ComponentType<any>

  // Table组件及其子组件
  export const TableCell: React.ComponentType<any>
  export const TableFooter: React.ComponentType<any>
  export const TableHeader: React.ComponentType<any>
  export const TableRow: React.ComponentType<any>

  export const Table: React.ComponentType<any> & {
    Header: typeof TableHeader
    Row: typeof TableRow
    Cell: typeof TableCell
    Footer: typeof TableFooter
  }

  export const Text: React.ComponentType<any>
}

// Button组件类型
declare module '*/Button.tsx' {
  import React from 'react'
  export interface ButtonProps {
    label?: string
    children?: React.ReactNode
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
    disabled?: boolean
    rounded?: boolean
    onClick?: () => void
  }
  export const Button: React.FC<ButtonProps>
}

// Table组件类型
declare module '*/Table.tsx' {
  import React from 'react'

  // 子组件类型
  export interface TableCellProps {
    children: React.ReactNode
    disabled?: boolean
  }

  export interface TableRowProps {
    children: React.ReactNode
    disabled?: boolean
  }

  export interface TableHeaderProps {
    children: React.ReactNode
    disabled?: boolean
  }

  export interface TableFooterProps {
    children: React.ReactNode
    disabled?: boolean
  }

  // 主组件类型
  export interface TableProps {
    children: React.ReactNode
    disabled?: boolean
  }

  // Cell组件
  export const TableCell: React.FC<TableCellProps>

  // Row组件
  export const TableRow: React.FC<TableRowProps>

  // Header组件
  export const TableHeader: React.FC<TableHeaderProps>

  // Footer组件
  export const TableFooter: React.FC<TableFooterProps>

  // 主Table组件
  export const Table: React.FC<TableProps> & {
    Header: typeof TableHeader
    Row: typeof TableRow
    Cell: typeof TableCell
    Footer: typeof TableFooter
  }
}

declare module 'react-dom/client' {
  import * as ReactDOM from 'react-dom'

  export interface Root {
    render(element: React.ReactNode): void
    unmount(): void
  }

  export function createRoot(container: Element | DocumentFragment): Root

  export * from 'react-dom'
  export default ReactDOM
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.gif'
