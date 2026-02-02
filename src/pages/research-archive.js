import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Layout } from '@components';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';
import PropTypes from 'prop-types';

const StyledTableContainer = styled.div`
  margin: 100px -20px;

  @media (max-width: 768px) {
    margin: 50px -10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--light-navy);
      }
    }

    th,
    td {
      padding: 10px;
      text-align: left;

      &:first-child {
        padding-left: 20px;

        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }
      &:last-child {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    tr {
      cursor: default;

      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    td {
      &.year {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--lightest-slate);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;
      }

      &.journal {
        font-size: var(--fz-lg);
        white-space: nowrap;
        font-style: italic;
      }

      &.authors {
        font-size: var(--fz-sm);
        color: var(--slate);
        line-height: 1.5;
      }

      &.links {
        min-width: 50px;

        div {
          display: flex;
          align-items: center;

          a {
            ${({ theme }) => theme.mixins.flexCenter};
            flex-shrink: 0;
          }

          a + a {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;

const ResearchArchivePage = ({ location }) => {
  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealPapers = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig(200, 0));
    revealPapers.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  // Add your publications here
  const publications = [
    {
      year: 2023,
      title: 'Inequality increases the acceptability of unethical behavior',
      authors: 'To, C., Wiwad, D., & Kouchaki, M.',
      journal: 'Journal of Experimental Psychology: General',
      link: 'https://doi.org/10.1037/xge0001423',
    },
    {
      year: 2021,
      title:
        'Recognizing the impact of COVID-19 on the poor alters attitudes towards poverty and inequality',
      authors: 'Wiwad, D., Mercier, B., Piff, P. K., Shariff, A. F., & Aknin, L. B.',
      journal: 'Journal of Experimental Social Psychology',
      link: 'https://doi.org/10.1016/j.jesp.2020.104083',
    },
    {
      year: 2020,
      title:
        'Shifting attributions for poverty motivates opposition to inequality and promotes egalitarianism',
      authors: 'Piff, P. K., Wiwad, D., Robinson, A. R., Aknin, L. B., & Shariff, A. F.',
      journal: 'Nature Human Behavior',
      link: 'https://doi.org/10.1038/s41562-020-0835-8',
    },
    {
      year: 2020,
      title: 'Does belief in free will increase support for economic inequality?',
      authors: 'Mercier, B., Wiwad, D., Aknin, L. B., Piff, P. K., & Shariff, A. F.',
      journal: 'Collabra: Psychology',
      link: 'https://doi.org/10.1525/Collabra.303',
    },
    {
      year: 2019,
      title: 'The support for economic inequality scale: Development and adjudication',
      authors:
        'Wiwad, D., Mercier, B., Maraun, M. D., Robinson, A. R., Piff, P. K., Aknin, L. B., & Shariff, A. F.',
      journal: 'PLoS ONE',
      link: 'https://doi.org/10.1371/journal.pone.0218685',
    },
    {
      year: 2019,
      title: 'Not all gifts are good: The potential practical costs of motivated gifts',
      authors: 'Aknin, L. B., Wiwad, D., & Girme, Y. U.',
      journal: 'Journal of Applied Social Psychology',
      link: 'https://doi.org/10.1111/jasp.12566',
    },
    {
      year: 2018,
      title: 'Buying well-being: Spending behavior and happiness',
      authors: 'Aknin, L. B., Wiwad, D., & Hanniball, K.',
      journal: 'Social and Personality Psychology Compass',
      link: 'https://doi.org/10.1111/spc3.12386',
    },
    {
      year: 2017,
      title:
        'Motives matter: The emotional consequences of recalled self- and other-focused prosocial behavior',
      authors: 'Wiwad, D., & Aknin, L. B.',
      journal: 'Motivation and Emotion',
      link: 'https://doi.org/10.1007/s11031-017-9638-2',
    },
    {
      year: 2016,
      title:
        'Income mobility breeds tolerance for economic inequality: Cross-national and experimental evidence',
      authors: 'Shariff, A. F., Wiwad, D., & Aknin, L. B.',
      journal: 'Perspectives on Psychological Science',
      link: 'https://doi.org/10.1177/1745691616635596',
    },
  ];

  return (
    <Layout location={location}>
      <Helmet title="Research Archive" />

      <main>
        <header ref={revealTitle}>
          <h1 className="big-heading">Research Archive</h1>
          <p className="subtitle">A list of my academic publications</p>
        </header>

        <StyledTableContainer ref={revealTable}>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th className="hide-on-mobile">Journal</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {publications.map((paper, i) => (
                <tr key={i} ref={el => (revealPapers.current[i] = el)}>
                  <td className="overline year">{paper.year}</td>

                  <td className="title">{paper.title}</td>

                  <td className="journal hide-on-mobile">{paper.journal}</td>

                  <td className="links">
                    <div>
                      {paper.link && (
                        <a
                          href={paper.link}
                          aria-label="Paper Link"
                          target="_blank"
                          rel="noreferrer">
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </StyledTableContainer>
      </main>
    </Layout>
  );
};

ResearchArchivePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ResearchArchivePage;
