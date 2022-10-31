import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader
    speed={3}
    width={280}
    height={423}
    viewBox="0 0 258 423"
    backgroundColor="#f3f3f3"
    foregroundColor="#dedede"
    {...props}>
    <circle cx="130" cy="130" r="110" />
    <rect x="218" y="0" rx="10" ry="10" width="40" height="40" />
    <rect x="44" y="257" rx="5" ry="5" width="170" height="23" />
    <rect x="29" y="290" rx="5" ry="5" width="200" height="15" />
    <rect x="29" y="315" rx="5" ry="5" width="200" height="15" />
    <rect x="16" y="340" rx="10" ry="10" width="64" height="30" />
    <rect x="178" y="340" rx="10" ry="10" width="64" height="30" />
    <rect x="98" y="340" rx="10" ry="10" width="64" height="30" />
    <rect x="15" y="383" rx="5" ry="5" width="60" height="40" />
    <rect x="95" y="383" rx="10" ry="10" width="150" height="40" />
  </ContentLoader>
);

export default Loader;
