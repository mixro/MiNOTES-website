import { Link } from 'react-router-dom';
import { Empty } from '../components/ui';

export default function NotFound() {
  return (
    <section className="wrap section">
      <Empty title="Page not found">Go back to your modules.</Empty>
      <p style={{ textAlign: 'center' }}><Link className="btn" to="/modules">Modules</Link></p>
    </section>
  );
}
