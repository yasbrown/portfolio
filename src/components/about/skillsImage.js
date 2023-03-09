import RUBY from '../../assets/Ruby.png'
import RAILS from '../../assets/Rails.png'
import REACT from '../../assets/React.png'
import JS from '../../assets/Javascript.png'
import HTML from '../../assets/HTML5.png'
import CSS from '../../assets/CSS3.png'
import POSTGRES from '../../assets/Postgresql.png'
import HEROKU from '../../assets/Heroku.png'
import GIT from '../../assets/git.png'
import FIGMA from '../../assets/Figma.png'

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
      case 'html':
          return HTML;
      case 'css':
          return CSS;
      case 'javascript':
          return JS;
      case 'react':
          return REACT;
      case 'postgresql':
          return POSTGRES;
      case 'ruby':
          return RUBY;
      case 'rails':
          return RAILS;
      case 'heroku':
        return HEROKU;
      case 'git':
        return GIT;
      case 'figma':
        return FIGMA;
      default:
          break;
  }
}
