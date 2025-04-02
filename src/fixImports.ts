// 这个文件帮助解决组件导入问题
// 实际上不会被使用，但提供类型检查支持

import * as React from 'react'

// 按钮组件
export interface ButtonProps {
  label?: string
  children?: React.ReactNode
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  rounded?: boolean
  onClick?: () => void
}
export const Button: React.FC<ButtonProps> = () => null

// 卡片组件
export interface CardProps {
  children: React.ReactNode
  disabled?: boolean
}
export const Card: React.FC<CardProps> = () => null

// 下拉菜单组件
export const Dropdown: React.FC<any> = () => null

// 英雄图片组件
export const HeroImage: React.FC<any> = () => null

// 图片组件
export interface ImageProps {
  src: string
  alt: string
  disabled?: boolean
}
export const Image: React.FC<ImageProps> = () => null

// 标签组件
export const Label: React.FC<any> = () => null

// 单选按钮组件
export const RadioButton: React.FC<any> = () => null

// 表格组件
export interface TableProps {
  children: React.ReactNode
  disabled?: boolean
}

// 表格单元格组件
export const TableCell: React.FC<any> = () => null

// 表格头部组件
export const TableHeader: React.FC<any> = () => null

// 表格底部组件
export const TableFooter: React.FC<any> = () => null

// 表格行组件
export const TableRow: React.FC<any> = () => null

// 表格组件，包含子组件属性
const TableComponent: React.FC<TableProps> = () => null
// 添加子组件引用
;(TableComponent as any).Header = TableHeader
;(TableComponent as any).Row = TableRow
;(TableComponent as any).Cell = TableCell
;(TableComponent as any).Footer = TableFooter

// 导出增强的表格组件
export const Table = TableComponent as React.FC<TableProps> & {
  Header: typeof TableHeader
  Row: typeof TableRow
  Cell: typeof TableCell
  Footer: typeof TableFooter
}

// 文本组件
export const Text: React.FC<any> = () => null
