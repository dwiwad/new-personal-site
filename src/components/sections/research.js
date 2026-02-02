import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledResearchSection = styled.section`
  max-width: 900px;

  .archive-link-wrapper {
    text-align: center;
    margin-top: 50px;
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .research-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 50px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .research-item {
    text-align: center;

    a {
      display: block;

      &:hover .img-wrapper {
        transform: translateY(-7px);

        &:before {
          background: transparent;
        }

        img {
          filter: none;
          mix-blend-mode: normal;
        }
      }
    }

    .img-wrapper {
      position: relative;
      background-color: var(--green);
      border-radius: var(--border-radius);
      transition: var(--transition);

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--navy);
        mix-blend-mode: screen;
        border-radius: var(--border-radius);
      }

      img {
        width: 100%;
        display: block;
        border-radius: var(--border-radius);
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1) brightness(90%);
        transition: var(--transition);
      }
    }

    .title {
      margin-top: 15px;
      color: var(--lightest-slate);
      font-size: var(--fz-lg);
      font-weight: 500;
    }
  }
`;

const Research = () => {
  const revealContainer = useRef(null);
  const revealArchiveLink = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {return;}
    sr.reveal(revealContainer.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
  }, []);

  const papers = [
    {
      title:
        'Economic inequality reduces sense of control and increases the acceptability of self-interested unethical behavior.',
      image: '/images/research/paper1.png',
      link: 'https://doi.org/your-paper-link',
    },
    {
      title:
        'Recognizing the impact of COVID-19 on the poor alters attitudes towards poverty and inequality.',
      image: '/images/research/paper2.png',
      link: 'https://doi.org/your-paper-link',
    },
    {
      title:
        'Shifting attributions for poverty motivates opposition to inequality and enhances egalitarianism.',
      image: '/images/research/paper3.png',
      link: 'https://doi.org/your-paper-link',
    },
  ];

  return (
    <StyledResearchSection id="research" ref={revealContainer}>
      <h2 className="numbered-heading">Research</h2>

      <div className="research-grid">
        {papers.map((paper, i) => (
          <div className="research-item" key={i}>
            <a href={paper.link} target="_blank" rel="noreferrer">
              <div className="img-wrapper">
                <img src={paper.image} alt={paper.title} />
              </div>
              <p className="title">{paper.title}</p>
            </a>
          </div>
        ))}
      </div>

      <div className="archive-link-wrapper">
        <Link className="inline-link archive-link" to="/research-archive" ref={revealArchiveLink}>
          view my research archive
        </Link>
      </div>
    </StyledResearchSection>
  );
};

export default Research;
