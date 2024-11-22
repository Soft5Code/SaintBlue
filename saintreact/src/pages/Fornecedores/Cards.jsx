import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__img"><svg viewBox="0 0 128 128" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><rect className="st1" height="78.6" transform="matrix(0.9761 0.2175 -0.2175 0.9761 15.4391 -12.3278)" width="101.2" x="13.1" y="24.7" /><rect className="st53" height="78.6" transform="matrix(0.9761 0.2175 -0.2175 0.9761 15.4391 -12.3278)" width="101.2" x="13.1" y="24.7" /><polygon className="st16" points="116,62 116,35.4 38.1,18 22.1,18 5.8,91.3 76.2,107 106,107" /><polygon className="st1" points="97.2,23 10,23 10,102 111,102 111,36.8" /><polygon className="st53" points="97.2,23 10,23 10,102 111,102 111,36.8" /><g><rect className="st7" height={58} width={80} x={20} y={34} /><g><polygon className="st9" points="100.2,92 73.1,44.2 51.2,75.5 40,58.7 20.2,92 39.7,92" /><circle className="st18" cx={57} cy={52} r={11} /><polygon className="st1" points="40,58.5 31.6,72.6 34.6,78.2 37.9,75.2 43.5,79.9 47,78.2 51,75.2" /><path className="st1" d="M57.7,66c0,0,4.1,7.2,4.3,6.6c0.2-0.6,6.1-5.6,6.1-5.6l6.9,3.6l1.5-10.3L88.9,72L73.1,44.1L57.7,66z" /><polygon className="st15" points="73.1,44.2 83.6,92 100.2,92" /><polyline className="st2" points="100.2,91.9 73.1,44.1 39.7,91.9" /><polyline className="st2" points="51.2,75.4 40,58.5 20.2,91.9" /><polygon className="st15" points="51.2,75.4 40,58.5 47,81.3" /><polyline className="st2" points="51.5,91.9 67.1,70.5 80.4,91.9" /><polygon className="st15" points="72.3,92 67.1,70.7 80.4,92" /></g><rect className="st53" height={58} width={80} x={20} y={34} /></g><polygon className="st18" points="111,37 97,37 97,23" /><polygon className="st53" points="111,37 97,37 97,23" /></svg></div>
        <div className="card__subtitle">Type of work</div>
        <div className="card__wrapper">
          <div className="card__title">Project name</div>
          <div className="card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{userSelect: 'none', width: '100%', height: '100%', display: 'inline-block', fill: 'rgb(224, 223, 220)', flexShrink: 0, cursor: 'auto'}} color="rgb(224, 223, 220)"><g color="rgb(224, 223, 220)"><circle cx={128} cy={128} r={96} opacity="0.2" /><circle cx={128} cy={128} r={96} fill="none" stroke="rgb(224, 223, 220)" strokeMiterlimit={10} strokeWidth={16} /><polyline points="134.1 161.9 168 128 134.1 94.1" fill="none" stroke="rgb(224, 223, 220)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} /><line x1={88} y1={128} x2={168} y2={128} fill="none" stroke="rgb(224, 223, 220)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} /></g></svg></div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    --main-color: #323232;
    --sub-color: #5b5b5b;
    --bg-color: #c7c7c7;
    --accent-color: #242C88;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 270px;
    padding: 25px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: var(--bg-color);
    transition: all 0.2s;
    cursor: pointer;
    box-shadow: 0px 0px 5px -1.5px #000;
  }

  .card::before {
    content: '';
    width: 99%;
    height: 99%;
    background: var(--sub-color);
    position: absolute;
    z-index: -1;
    top: 1px;
    left: 1px;
    border-radius: 25px;
    transition: all 0.3s;
  }

  .card__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .card__img {
    width: 100%;
  }

  .card__title {
    color: var(--main-color);
    font-weight: 900;
    font-size: 25px;
  }

  .card__subtitle {
    color: var(--sub-color);
    font-weight: 600;
    font-size: 20px;
  }

  .card__icon {
    width: 40px;
    height: 40px;
    transform: rotate(-45deg);
    transition: all 0.3s;
  }

  .card__icon svg {
    width: 100%;
    height: 100%;
  }

  .card__icon g {
    fill: var(--main-color);
  }

  .card__icon circle, polyline, line {
    stroke: var(--main-color);
  }

  .card:hover .card__icon {
    transform: rotate(0);
  }

  .card:hover .card__icon circle, .card:hover .card__icon polyline, .card:hover .card__icon line {
    stroke: var(--accent-color);
  }

  .card:hover .card__icon g {
    fill: var(--accent-color);
  }

  .card:hover {
    box-shadow: 0px 0px 20px -5px #000;
  }

  .card:hover::before {
    transform: rotate(10deg);
    box-shadow: 0px 0px 20px -5px #000;
  }

  /* remove svg from class ="card__img" and last styles below css code before use */
  .st1 {
    fill: #fff
  }

  .st2 {
    fill: none;
    stroke: #242c88;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10
  }

  .st7 {
    fill: #589fff
  }

  .st9 {
    fill: #bc8d66
  }

  .st15,.st16 {
    opacity: .4;
    fill: #242c88
  }

  .st16 {
    opacity: .2
  }

  .st18 {
    fill: #ffc408
  }

  .st53 {
    fill: none;
    stroke: #242c88;
    stroke-width: 1.848;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10
  }`;

export default Card;
