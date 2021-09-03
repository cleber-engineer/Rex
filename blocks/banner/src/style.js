import styled from '@kuba/styled'

export default styled.style`
  .banner {
    display: inline-flex;
    margin-bottom: var(--spacing-sm);
    margin-top: var(--spacing-nano);
    width: 100%;
  }

  @media (min-width: 961px) {
    .banner {
      margin-bottom: var(--spacing-lg);
    }
  }

  .banner__figure {
    position: relative;
  }

  .banner__picture {
    border-radius: var(--border-radius-sm);
    padding-top: calc(400 / 736 * 100%) !important;
  }

  @media (min-width: 769px) {
    .banner__picture {
      padding-top: calc(300 / 928 * 100%) !important;
    }
  }

  @media (min-width: 961px) {
    .banner__picture {
      padding-top: calc(200 / 1198 * 100%) !important;
    }
  }

  .banner__figcaption {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    margin: 0 auto;
    padding-top: var(--spacing_inset-xs);
    width: 89%;
  }

  @media (min-width: 426px) {
    .banner__figcaption {
      width: 68%;
    }
  }

  @media (min-width: 769px) {
    .banner__figcaption {
      align-items: center;
      flex-direction: row;
      height: 100%;
      justify-content: space-between;
      left: 0;
      padding: 0 var(--spacing_inset-lg);
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  .banner__hgroup {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    width: 100%;
  }

  @media (min-width: 769px) {
    .banner__hgroup {
      align-items: flex-start;
      width: 42%;
    }
  }

  .banner__text {
    line-height: var(--line-height-lg);
    text-align: center;
  }

  @media (min-width: 769px) {
    .banner__text {
      text-align: left;
    }
  }
`
