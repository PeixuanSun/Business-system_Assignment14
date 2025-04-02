import React from 'react'
import styled from 'styled-components'
import { Card } from '../../stories/Card'

const SectionContainer = styled.section`
  margin-bottom: 40px;
`

const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
  position: relative;
  padding-bottom: 10px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 3px;
    background-color: #4a90e2;
  }
`

const SetupGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`

const SetupCard = styled(Card)`
  padding: 20px;
`

const SetupTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: #444;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
`

const SetupContent = styled.div`
  font-size: 15px;
  line-height: 1.6;
  color: #666;
`

const CodeBlock = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 15px;
  margin: 10px 0;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 14px;
  overflow-x: auto;
  color: #333;
`

const ExtensionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
`

const ExtensionItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  &:before {
    content: '•';
    margin-right: 10px;
    color: #4a90e2;
    font-size: 20px;
  }
`

const settingItems = [
  {
    title: 'VS Code 设置',
    content: (
      <>
        <p>我的首选编辑器是VS Code，以下是我的配置：</p>
        <CodeBlock>{`{
  "editor.fontSize": 14,
  "editor.fontFamily": "JetBrains Mono, Consolas, 'Courier New', monospace",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "workbench.colorTheme": "GitHub Dark",
  "terminal.integrated.fontSize": 14
}`}</CodeBlock>
        <p>推荐的VS Code插件：</p>
        <ExtensionList>
          <ExtensionItem>ESLint</ExtensionItem>
          <ExtensionItem>Prettier - Code formatter</ExtensionItem>
          <ExtensionItem>GitLens</ExtensionItem>
          <ExtensionItem>JavaScript and TypeScript Nightly</ExtensionItem>
          <ExtensionItem>Live Server</ExtensionItem>
        </ExtensionList>
      </>
    ),
  },
  {
    title: '终端设置',
    content: (
      <>
        <p>我使用zsh作为首选终端，配合Oh My Zsh：</p>
        <CodeBlock>{`# 安装 Oh My Zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 在 .zshrc 中添加的别名
alias gs="git status"
alias gc="git commit -m"
alias gl="git log --oneline"
alias nrd="npm run dev"
alias nrs="npm run start"`}</CodeBlock>
        <p>终端主题：Powerlevel10k</p>
        <p>命令行工具：</p>
        <ExtensionList>
          <ExtensionItem>fzf - 模糊查找工具</ExtensionItem>
          <ExtensionItem>bat - 增强版cat命令</ExtensionItem>
          <ExtensionItem>exa - 现代化的ls替代品</ExtensionItem>
        </ExtensionList>
      </>
    ),
  },
  {
    title: '首选编辑器字体',
    content: (
      <>
        <p>我最喜欢的编程字体：</p>
        <ExtensionList>
          <ExtensionItem>
            JetBrains Mono - 主要使用的等宽字体，对代码友好
          </ExtensionItem>
          <ExtensionItem>
            Fira Code - 另一个很好的选择，带有连字功能
          </ExtensionItem>
          <ExtensionItem>Cascadia Code - 微软出品的优质等宽字体</ExtensionItem>
        </ExtensionList>
        <p>字体设置：</p>
        <CodeBlock>{`"editor.fontFamily": "JetBrains Mono",
"editor.fontSize": 14,
"editor.fontLigatures": true,
"editor.fontWeight": "400"`}</CodeBlock>
      </>
    ),
  },
]

const DeveloperSetupSection: React.FC = () => {
  return (
    <SectionContainer>
      <SectionTitle>开发者设置</SectionTitle>
      <SetupGrid>
        {settingItems.map((item, index) => (
          <SetupCard key={index}>
            <SetupTitle>{item.title}</SetupTitle>
            <SetupContent>{item.content}</SetupContent>
          </SetupCard>
        ))}
      </SetupGrid>
    </SectionContainer>
  )
}

export default DeveloperSetupSection
