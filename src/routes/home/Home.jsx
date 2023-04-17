import './home.css'

export const Home = () => {
  return (
    <div className='home'>
      <iframe className='yt' width="300" height="auto" src="https://www.youtube.com/embed/EWv2jnhZErc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />      
      <h2>JavaScript King</h2>
      <h3>16 projects using<br />HTML<br />CSS<br />JavaScript</h3>
      <p>Tuesday, April 17, 2023</p>    
      <a href="https://reactrouter.com/en/main/routers/create-hash-router" target="_blank">createHashRouter</a>
    </div>
  );
};
