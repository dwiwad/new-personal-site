import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Dylan Wiwad.</h2>;
  const three = <h3 className="big-heading">Researcher. Data Scientist.</h3>;
  const four = (
    <>
      <p>
        I'm a data professional who specializes in turning mountains of data into useful and
        interesting insights. Currently focused on building{' '}
        <a
          href="https://slack.com/features/slackbot?d=701ed00000HfDcoAAF&nc=701ed00000HfGAeAAN&utm_source=google&utm_medium=paid_search&utm_campaign=SEM_Google_AMER_USCA_US_EN_CONC_SLK_ENT-SEM-all--brand-slack-bot_BR&utm_content=all-segments_slack-na-br-cross-industry-all-branded_search_amer_701ed00000hfdcoaaf_english_slackbot&utm_term=slackbot_._slackbot_._e_._c_._793096828269&gclsrc=aw.ds&gad_source=1&gad_campaignid=23473727404&gbraid=0AAAAADSZEYge9FEE-QACR58n6UVlaZxgW&gclid=Cj0KCQiAp-zLBhDkARIsABcYc6uQ4KfadKdpgV-I4M0shEUzt5Ay0aRuD7SfHidurqHTZSWgMTrtxEcaAq2EEALw_wcB"
          target="_blank"
          rel="noreferrer">
          Slackbot
        </a>{' '}
        at Slack, and{' '}
        <a href="https://hockeydecoded.com/" target="_blank" rel="noreferrer">
          Hockey Decoded
        </a>{' '}
        in my own time.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="https://www.newline.co/courses/build-a-spotify-connected-app"
      target="_blank"
      rel="noreferrer">
      I need this to point somewhere cool!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
