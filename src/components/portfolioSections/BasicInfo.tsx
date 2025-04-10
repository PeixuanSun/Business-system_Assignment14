import React from 'react'
import styled from 'styled-components'
import { Card } from '../../stories/Card'

const BasicInfoContainer = styled.section`
  margin-bottom: 40px;
`

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  color: #333;
`

const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #666;
`

const ProfileCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin-bottom: 20px;
`

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 3px solid #4a90e2;
`

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`

const BasicInfo: React.FC = () => {
  return (
    <BasicInfoContainer>
      <Title>peixuan的投资组合</Title>
      <Subtitle>Web开发与设计</Subtitle>
      <ProfileCard>
        <Avatar src="https://via.placeholder.com/150" alt="个人头像" />
        <Description>
          我是一名热爱网络开发的学生，专注于创建交互式和用户友好的网络应用。
          我正在学习最新的前端技术，包括React、TypeScript和组件设计。
          这是我在课程中创建的作品集，展示了我的技能和项目。
        </Description>
      </ProfileCard>
    </BasicInfoContainer>
  )
}

export default BasicInfo
