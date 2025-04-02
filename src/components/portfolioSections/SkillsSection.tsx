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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`

const SkillCard = styled(Card)`
  padding: 20px;
`

const SkillCategory = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: #444;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
`

const SkillDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 15px;
  color: #666;
`

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &:before {
    content: '•';
    margin-right: 10px;
    color: #4a90e2;
    font-size: 20px;
  }
`

const skillsData = [
  {
    category: '编程语言',
    description: '我熟悉的编程语言，用于各类应用和网站开发。',
    items: ['JavaScript/TypeScript', 'HTML5', 'CSS3/Sass', 'Python', 'Java'],
  },
  {
    category: '框架与库',
    description: '我擅长使用的前端框架和库，用于构建现代化的应用程序。',
    items: ['React', 'Vue.js', 'Next.js', 'Redux', 'styled-components'],
  },
  {
    category: '开发工具',
    description: '日常开发中使用的工具和软件，提高工作效率。',
    items: ['Git & GitHub', 'VS Code', 'Figma', 'Webpack', 'npm/yarn'],
  },
]

const SkillsSection: React.FC = () => {
  return (
    <SectionContainer>
      <SectionTitle>技能</SectionTitle>
      <SkillsGrid>
        {skillsData.map((skill, index) => (
          <SkillCard key={index}>
            <SkillCategory>{skill.category}</SkillCategory>
            <SkillDescription>{skill.description}</SkillDescription>
            <SkillsList>
              {skill.items.map((item, itemIndex) => (
                <SkillItem key={itemIndex}>{item}</SkillItem>
              ))}
            </SkillsList>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SectionContainer>
  )
}

export default SkillsSection
