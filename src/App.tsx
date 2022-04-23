import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-grey-text font-inter">Bookkeeper</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}>
        <Link to="/invoices">Invoices</Link> | <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
