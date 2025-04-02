/// <reference types="react-scripts" />

// 扩展 React 以避免组件库类型错误
import React from 'react'

declare module 'react' {
  interface HTMLAttributes<T> {
    // 添加可能缺失的通用属性
    disabled?: boolean
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
    rounded?: boolean
  }

  interface ButtonHTMLAttributes<T> {
    // 添加可能缺失的按钮属性
    label?: string
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
    rounded?: boolean
    children?: React.ReactNode
  }
}

// 添加Button组件类型
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

// 为Table组件添加子组件类型
declare module '*/Table.tsx' {
  import React from 'react'

  export interface TableProps {
    children: React.ReactNode
    disabled?: boolean
  }

  export const Table: React.FC<TableProps> & {
    Header: React.FC<any>
    Row: React.FC<any>
    Cell: React.FC<any>
  }
}

// 对styled-components类型的扩展
declare module 'styled-components' {
  export interface DefaultTheme {
    [key: string]: any
  }
}
