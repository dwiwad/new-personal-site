import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledResearchSection = styled.section`
  max-width: 900px;

  .citation-metrics {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0;
    padding: 30px;
    background-color: var(--light-navy);
    border-radius: var(--border-radius);

    .metrics-row {
      display: flex;
      justify-content: center;
      gap: 200px;
      width: 100%;

      @media (max-width: 768px) {
        gap: 30px;
      }
    }

    .metric {
      text-align: center;

      .number {
        color: var(--green);
        font-size: var(--fz-heading);
        font-weight: 600;
        font-family: var(--font-mono);
      }

      .label {
        color: var(--light-slate);
        font-size: var(--fz-sm);
        margin-top: 5px;
      }
    }

    .citation-footer {
      margin-top: 20px;
      color: var(--slate);
      font-size: var(--fz-xs);
      font-family: var(--font-mono);

      a {
        color: var(--green);
        margin-left: 10px;
      }
    }
  }

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
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
  }, []);

  const papers = [
    {
      title:
        'Economic inequality reduces sense of control and increases the acceptability of self-interested unethical behavior.',
      image: '/images/research/paper1.png',
      link: '/papers/jepg_2023.pdf',
    },
    {
      title:
        'Recognizing the impact of COVID-19 on the poor alters attitudes towards poverty and inequality.',
      image: '/images/research/paper2.png',
      link: '/papers/jesp_2021.pdf',
    },
    {
      title:
        'Shifting attributions for poverty motivates opposition to inequality and enhances egalitarianism.',
      image: '/images/research/paper3.png',
      link: '/papers/nhb_2020.pdf',
    },
  ];

  return (
    <StyledResearchSection id="research" ref={revealContainer}>
      <h2 className="numbered-heading">Research</h2>

      <div className="citation-metrics">
        <div className="metrics-row">
          <div className="metric">
            <div className="number">985</div>
            <div className="label">Citations</div>
          </div>
          <div className="metric">
            <div className="number">9</div>
            <div className="label">h-index</div>
          </div>
          <div className="metric">
            <div className="number">9</div>
            <div className="label">i10-index</div>
          </div>
        </div>
        <div className="citation-footer">
          Last updated: February 2026
          <a
            href="https://scholar.google.com/citations?user=WWrGh74AAAAJ&hl=en"
            target="_blank"
            rel="noreferrer">
            View Google Scholar
          </a>
        </div>
      </div>

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
