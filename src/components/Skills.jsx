import React from 'react';
import { FaCss3, FaReact, FaDatabase, FaJs, FaGitAlt } from 'react-icons/fa';
import { FaTools, FaFigma, FaVuejs, FaPhp, FaPython, FaNodeJs, FaGem } from 'react-icons/fa'; // Import other icons you might need
import styles from './Skills.module.css';

const iconMap = {
  'CSS e seus frameworks': FaCss3,
  'ReactJS': FaReact,
  'SQL': FaDatabase,
  'JavaScript': FaJs,
  'Git': FaGitAlt,
  'Front-end toolings': FaTools,
  'Design System e prótotipos (Figma)': FaFigma,
  'VueJS': FaVuejs,
  'PHP (Laravel)': FaPhp,
  'Pythons': FaPython,
  'TypeScript': FaJs,
  'NodeJS': FaNodeJs,
  'Ruby on Rails': FaGem,
};

const BadgeList = ({ badges }) => (
  <div className={styles.badge}>
    {badges.map((badge, index) => {
      const Icon = iconMap[badge]; 
      return (
        <span className={styles.badgeContent} key={index}>
          <Icon className={styles.icon} /> {badge}
        </span>
      );
    })}
  </div>
);

const SkillsComponent = ({ skills }) => (
  <div>
    {skills.map((skill) => (
      <div className={styles.badgeList} key={skill.id}>
        <h5>{skill.titulo}</h5>
        <BadgeList badges={skill.badges} />
      </div>
    ))}
  </div>
);

export default SkillsComponent;
