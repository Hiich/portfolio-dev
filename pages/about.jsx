const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3><br /><br />
      <p>
        Hi there! My name is Hicham Benhima and I am a web3/blockchain developer with more than 10 years of experience in various languages.<br />
        I have a passion for using technology to solve complex problems and am always looking for new challenges to tackle.
        <br /><br />
        I have a strong background in Javascript and Solidity and have worked on a variety of projects involving web3/blockchain development.<br />
        Since I have started in this industry I have deployed more than 40 projects (NFTs, Games, ICO's, Staking platforms, Marketplace, etc...)
        <br /><br />
        I enjoy working on cutting-edge technology and am constantly learning and improving my skills to stay ahead in the rapidly evolving world of web3/blockchain development.
        <br /><br />
        In my free time, I enjoy video games, football and music and am an active member of the CryptoDevs community. I am always looking for new opportunities to collaborate and learn from other professionals in the industry.
        <br /><br />
        Thank you for visiting my portfolio. I look forward to connecting and discussing potential projects or opportunities.
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
