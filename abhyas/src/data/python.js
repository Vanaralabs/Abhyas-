import { pythonFundamentals } from './python-fundamentals'
import { pythonLogicFlow } from './python-logic-flow'
import { pythonOOP } from './python-oop'

const pythonCourse = {
  id: 'python',
  title: 'Learn Python',
  icon: '🐍',
  description: 'A free, interactive Python course. Write code on every lesson, get hints when stuck, and master Python from basics to OOP.',
  totalLessons: 219,
  sections: [
    pythonFundamentals,
    pythonLogicFlow,
    pythonOOP
  ]
}

export default pythonCourse
