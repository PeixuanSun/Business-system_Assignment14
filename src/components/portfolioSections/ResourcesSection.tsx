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

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
`

const ResourceCard = styled(Card)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const ResourceIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #e8f0fe;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 24px;
  color: #4a90e2;
`

const ResourceTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #444;
`

const ResourceSummary = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  margin-bottom: 15px;
  flex-grow: 1;
`

const ResourceLink = styled.a`
  color: #4a90e2;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`

const resourcesData = [
  {
    icon: '📚',
    title: 'MDN Web 文档',
    summary:
      'Mozilla 的 Web 文档是 Web 标准、JavaScript、CSS 和 HTML 的权威参考资源。',
    link: 'https://developer.mozilla.org/',
  },
  {
    icon: '⚛️',
    title: 'React 官方文档',
    summary:
      'React 官方文档提供了全面的指南、API 参考和示例，帮助开发者学习和使用 React。',
    link: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    icon: '🎨',
    title: 'CSS-Tricks',
    summary: '提供有关 CSS 和前端开发的技巧、教程和最佳实践的网站。',
    link: 'https://css-tricks.com/',
  },
  {
    icon: '🧪',
    title: 'Testing Library',
    summary: '一套用于测试 UI 组件的工具，鼓励良好的测试实践。',
    link: 'https://testing-library.com/',
  },
  {
    icon: '📘',
    title: 'TypeScript 手册',
    summary: 'TypeScript 的官方文档，提供语言特性的详细说明和示例。',
    link: 'https://www.typescriptlang.org/docs/',
  },
  {
    icon: '🎭',
    title: 'Storybook',
    summary: '用于独立开发、测试和文档化 UI 组件的工具。',
    link: 'https://storybook.js.org/',
  },
]

const ResourcesSection: React.FC = () => {
  return (
    <SectionContainer>
      <SectionTitle>学习资源</SectionTitle>
      <ResourcesGrid>
        {resourcesData.map((resource, index) => (
          <ResourceCard key={index}>
            <ResourceIcon>{resource.icon}</ResourceIcon>
            <ResourceTitle>{resource.title}</ResourceTitle>
            <ResourceSummary>{resource.summary}</ResourceSummary>
            <ResourceLink
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              访问资源
            </ResourceLink>
          </ResourceCard>
        ))}
      </ResourcesGrid>
    </SectionContainer>
  )
}

export default ResourcesSection
