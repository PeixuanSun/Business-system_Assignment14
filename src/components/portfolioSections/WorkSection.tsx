import React from 'react'
import styled from 'styled-components'
import { Card } from '../../stories/Card'
import { Image } from '../../stories/Image'

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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const ProjectTitle = styled.h3`
  font-size: 20px;
  margin: 15px 0 10px;
  color: #444;
`

const ProjectDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin-bottom: 15px;
  flex-grow: 1;
`

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`

const TechTag = styled.span`
  background-color: #e8f0fe;
  color: #4a90e2;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 500;
`

const ProjectLink = styled.a`
  color: #4a90e2;
  text-decoration: none;
  font-weight: 500;
  margin-top: 10px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`

const ProjectImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 6px;
  margin-bottom: 10px;
`

const projects = [
  {
    id: 1,
    title: '组件库开发',
    description:
      '开发了一个React组件库，包含各种UI组件如按钮、卡片、表格等，使用TypeScript和Styled Components。',
    image: 'https://via.placeholder.com/300x180',
    link: 'https://github.com/username/component-library',
    techs: ['React', 'TypeScript', 'Styled Components', 'Storybook'],
  },
  {
    id: 2,
    title: '响应式网页设计',
    description:
      '创建了一个完全响应式的网站，适应各种屏幕尺寸，实现了移动优先的设计理念。',
    image: 'https://via.placeholder.com/300x180',
    link: 'https://github.com/username/responsive-website',
    techs: ['HTML', 'CSS', 'JavaScript', 'Media Queries'],
  },
  {
    id: 3,
    title: 'API集成项目',
    description: '实现了与外部API的集成，处理数据获取、状态管理和错误处理。',
    image: 'https://via.placeholder.com/300x180',
    link: 'https://github.com/username/api-integration',
    techs: ['React', 'Axios', 'REST API', 'State Management'],
  },
]

const WorkSection: React.FC = () => {
  return (
    <SectionContainer>
      <SectionTitle>课程作品</SectionTitle>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImageWrapper>
              <Image src={project.image} alt={project.title} />
            </ProjectImageWrapper>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechList>
              {project.techs.map((tech, index) => (
                <TechTag key={index}>{tech}</TechTag>
              ))}
            </TechList>
            <ProjectLink
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              查看项目
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </SectionContainer>
  )
}

export default WorkSection
