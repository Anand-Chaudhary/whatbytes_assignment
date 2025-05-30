import Sidebar from '@/components/sidebar';

export default function Home() {
  return (
    <div className="main w-full h-screen bg-blue-100">
      <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-64">
        <div className="main p-4">
          {/* Your main content goes here */}
        </div>
      </div>
    </div>
    </div>
  );
}
