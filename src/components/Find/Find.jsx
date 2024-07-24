const Find = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.story_id}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Find;
