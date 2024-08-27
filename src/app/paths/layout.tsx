'use client';
import Layout from '@/components/layouts/default';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
