import { useState } from 'react';

type SearchBarProps = {
  placeholder?: string;
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Search</button>
    </form>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  form: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    flex: 1,
  },
  button: {
    padding: '8px 16px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default SearchBar;
