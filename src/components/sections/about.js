import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Python', 'C++', 'Java', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'SQL Developer', 'IntelliJ IDEA', 'Android Studio', 'Git', 'Sage', 'SPARQL', 'GraphDB', 'Unity', 'Godot' ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

<nav>
   <ul>
      <li><a href="LettreAmine.pdf" download>📄 Téléchargez Ma Lettre De Motivation</a></li>
   </ul>
</nav>


      <div className="inner">
        <StyledText>
          <div>

          <p>Étudiant en deuxième année de <strong>BUT Informatique</strong>, je suis à la recherche d’un 
          <strong>stage en développement logiciel</strong> afin d’approfondir mes compétences en 
          <strong>programmation, gestion de bases de données</strong> et <strong>sécurité informatique</strong>.  
          </p>
<p>
  Passionné par les nouvelles technologies, je fais preuve de <strong>rigueur</strong>, 
  d’<strong>adaptabilité</strong> et d’une grande <strong>curiosité</strong>. Je suis motivé à m’investir 
  pleinement dans des projets variés et innovants au sein de votre entreprise.  
</p>
<h3>Mon Projet Académique et Professionnel</h3>
            <p> 
              Je souhaite poursuivre ma formation en effectuant la troisième année afin d’approfondir 
              mes compétences et d’obtenir mon diplôme.
              Toujours en quête de nouvelles expériences enrichissantes, 
              je suis également ouvert à l’idée de réaliser cette dernière année à l’étranger, 
              notamment au Canada, afin de découvrir un nouvel environnement académique et culturel 
              tout en développant mon expertise en informatique.
              Après l’obtention de mon BUT, mon objectif est d’intégrer une école d’ingénieurs pour me 
              spécialiser dans un domaine qui me passionne : la cybersécurité. Ce secteur en constante 
              évolution représente pour moi un défi stimulant, où je pourrai mettre en pratique 
              mes connaissances en développement, en gestion des systèmes et en sécurité des réseaux.
              Grâce à cette formation, je souhaite acquérir une expertise avancée pour contribuer 
              à la protection des infrastructures numériques et à la lutte contre les cybermenaces, 
              tout en évoluant dans un domaine qui me motive profondément.
            </p>

            <p>
            Tout au long de mon parcours en informatique, j’ai eu l’occasion de travailler avec une
            large gamme d’outils et de technologies. En programmation, j’ai utilisé des langages tels
            que Python, C++, Java et JavaScript pour développer diverses applications. En développement web, 
            j’ai acquis de l’expérience avec HTML, CSS ainsi que SQL Developer pour la gestion des bases de données.
            J’ai également manipulé des environnements et outils professionnels, notamment Sage pour la gestion comptable, 
            IntelliJ IDEA et Android Studio pour le développement d’applications, ainsi que Git pour le versioning et la 
            collaboration sur des projets. En modélisation et gestion de données, j’ai utilisé SPARQL et GraphDB.
            Enfin, dans le domaine du jeu vidéo et des simulations interactives, j’ai eu l’opportunité de travailler 
            avec des moteurs tels que Unity et Godot. Ces expériences m’ont permis de développer une approche 
            polyvalente et une capacité d’adaptation aux différentes technologies du secteur.
            </p>

            <p>Voici les technologies avec lesquelles j'ai récemment travaillé :</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
