import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet'; // ✅ Ajout de Helmet
import { Head, Loader, Nav, Social, Email, Footer } from '@components';
import { GlobalStyle, theme } from '@styles';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  // ✅ Optimisation : Gestion des liens externes une seule fois
  useEffect(() => {
    const handleExternalLinks = () => {
      document.querySelectorAll('a').forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    };

    if (!isLoading) {
      handleExternalLinks();

      if (location.hash) {
        const id = location.hash.substring(1);
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            el.focus();
          }
        }, 0);
      }
    }
  }, [isLoading]);

  return (
    <>
      {/* ✅ Ajout de Helmet pour gérer le titre et les métadonnées */}
      <Helmet>
        <title>{isHome ? 'Portfolio | Amine Quaily' : 'Amine Quaily'}</title>
        <meta name="description" content="Portfolio de Amine Quaily, étudiant en BUT informatique." />
        <meta name="keywords" content="Amine Quaily, Développement Web, Informatique, Portfolio" />
      </Helmet>

      <Head />

      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <a className="skip-to-content" href="#content">
            Passer au contenu
          </a>

          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />

              <div id="content">
                {children}
                <Footer />
              </div>
            </StyledContent>
          )}
        </ThemeProvider>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
