import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Hicham Benhima is a passionate full stack web3 developer with more than 40 projects under his belt.
         He is a self-taught developer who has been working in the blockchain space since 2020. He is currently working on a few projects in the DeFi space."
      />
      <meta
        name="keywords"
        content="hicham benhima, hich.eth, hich, web3 developer, dapp development, solidity, next, smart-contracts"
      />
      <meta property="og:title" content="Hicham Benhima's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Hicham Benhima',
};
