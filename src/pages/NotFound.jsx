import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <span className="font-mono text-primary-500">404</span>
      <h1 className="font-display text-3xl font-semibold text-ink-100">Page not found</h1>
      <p className="max-w-sm text-ink-400">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn-primary mt-4">
        Back to home
      </Link>
    </section>
  )
}
