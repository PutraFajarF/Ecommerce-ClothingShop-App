const App = () => {
  const categories = [
    {
      id: 1,
      tittle: 'Hats'
    },
    {
      id: 2,
      tittle: 'Jackets'
    },
    {
      id: 3,
      tittle: 'Sneakers'
    },
    {
      id: 4,
      tittle: 'Women'
    },
    {
      id: 5,
      tittle: 'Mens'
    }
  ]
  return (
    <div className='categories-container'>
      {categories.map(({tittle}) => (
        <div className='category-container'>
        <div className='background-image' />
        <div className='category-body-container'>
          <h2>{tittle}</h2>
          <p>Shop Now</p>
        </div>
        </div>
      ))}
    </div>
  );
};

export default App;
